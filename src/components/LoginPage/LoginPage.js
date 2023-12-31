import React, { useContext, useState }from "react";
import { Link } from "react-router-dom";
import { EmployeesContext } from "../../contexts/EmployeesContext";
import { LoggedInUserContext } from "../../contexts/LoggedInUserContext";
import { UsersContext } from "../../contexts/UsersContext";
import "./LoginPage.css"

const LoginPage = ({handleLogIn}) => {
    const [loggedInUser, updateLoggedInUser] = useContext(LoggedInUserContext);
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);
    const [employees, updateEmployees] = useContext(EmployeesContext);
    const [usernameIn, setUsernameIn] = useState("");
    const [passwordIn, setPasswordIn] = useState("");
    const [loginValid, setLoginValid] = useState([true, true]);
    let unValidity = true;
    let pwValidity = true;

    const isValidLogin = () => {
        let found = false;

        employees.forEach(employee => {
            if(found)
                return;

            if(employee.email === usernameIn) {
                pwValidity = true;
                found = true;
                setLoginValid([true, false]);
                if(employee.password === passwordIn) {
                    unValidity = true;
                    updateLoggedInUser(employee);
                    setLoginValid([true, true]);
                } else {
                    unValidity = false;
                }
            }
        });

        users.forEach(user => {
            if(found)
                return;

            if(user.email === usernameIn) {
                pwValidity = true;
                found = true;
                setLoginValid([true, false]);
                if(user.password === passwordIn) {
                    unValidity = true;
                    updateLoggedInUser(user);
                    setLoginValid([true, true]);
                } else {
                    unValidity = false;
                }
            }
        });

        if(!found)
            setLoginValid([false, true]);

        return found;
    }

    const handleSubmit = (e) => {
        if(isValidLogin() && unValidity && pwValidity) {
            if(employees.findIndex(user => usernameIn === user.email) !== -1) {
                if(users.length > 0)
                    changeCurrUser(users[0]);
                if(localStorage.getItem("employees") === null)
                    updateEmployees([...employees]);
            } else {
                changeCurrUser(users[users.findIndex(user => usernameIn === user.email)]);
            }

            handleLogIn();
        }
    }

    return (
        <div className="login-page">
            <div className="login-logo">
                <i className="fa-solid fa-tree"></i>
                PayNgayon
            </div>
            <form className="login-form" onSubmit={e => document.getElementsByClassName("login-link").click()}>
                <div className="login-div">
                    <label htmlFor="username">Email</label>
                    <input
                        type="text"
                        id="username"
                        value={usernameIn}
                        onChange={e => setUsernameIn(e.target.value)}
                    />
                    {!loginValid[0] && <div className="invalid">Username does not exist</div>}
                </div>

                <div className="login-div">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordIn}
                        onChange={e => setPasswordIn(e.target.value)}
                    />
                    {!loginValid[1] && <div className="invalid">Incorrect Password</div>}
                </div>

                <Link to="../Dashboard/history" className="login-link">
                    <button className="login-btn" onClick={e => handleSubmit(e)}>Log In</button>
                </Link>
            </form>
        </div>
    )
}

export default LoginPage;
