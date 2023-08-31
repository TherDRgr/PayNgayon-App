import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../../contexts/LoggedInUserContext";
import { UsersContext } from "../../../contexts/UsersContext";
import "./Header.css"

const Header = () => {
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);
    const [loggedInUser, updateLoggedInUser] = useContext(LoggedInUserContext);

    return (
        <div className="headerContainer">
            <div className="leftContainer">
                <i className="fa-solid fa-tree"></i>
                 PayNgayon
            </div>
            <div className="middleContainer">
                {/* <div className="initialContainer">
                    <div className="initials">R</div>
                </div>
                <div className="greeting">Hello,</div> */}
            </div>
            <div className="rightContainer">
                {loggedInUser.userType !== "client" ?
                <Link to="/UserList">
                    Users
                    <i className="fa-solid fa-user"></i>
                </Link>
                :
                <div className="initials-greeting">
                    <div className="initialContainer">
                        <div className="initials">{currUser.name[0]}</div>
                    </div>
                    <div className="greeting">Hello, {currUser.name}</div>
                </div>
                }
            </div>
        </div>
    )
}

export default Header
