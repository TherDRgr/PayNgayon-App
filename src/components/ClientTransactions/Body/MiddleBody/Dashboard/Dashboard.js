import React, { useContext, useState } from "react";
import Navbar from "../../LeftBody/Navbar/Navbar";
import Logout from "../../LeftBody/Logout/Logout";
import Transactions from "../Transactions/Transactions";
import RightBody from "../../RightBody/RightBody";
import { Link } from "react-router-dom";
import { UsersContext } from "../../../../../contexts/UsersContext";
import "./Dashboard.css"
import { PageProvider } from "../../../../../contexts/PageContext";

const Dashboard = ({handleLogIn}) => {
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);

    const loadDemo = () => {
        const demoUsers = [
            {"name": "Ben Dover",
                "email": "bendover@email.com",
                "password": "123456789",
                "balance": 451865.50,
                "cardNumber": Date.now() - (101010101 * 12),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "userType": "client",
                "categories": ["Rent", "Food", "Transportation", "Mortgage", "Utilities", "Entertainment"],
                "expenses": [],
                "sentRequests": [],
                "receivedRequests": [],
                "history": [
                    {"date": "2023-03-09", "type": "Withdraw", "amount": "67500.00"},
                    {"date": "2023-03-01", "type": "Deposit", "amount": "45650.55"},
                    {"date": "2023-02-15", "type": "Deposit", "amount": "256483.99"},
                    {"date": "2023-02-01", "type": "Deposit", "amount": "142000.00"},
                    {"date": "2022-12-14", "type": "Initial Deposit", "amount": "500000.69"}
                ]
            },
            {"name": "Moe Lester",
                "email": "Moelester@email.com",
                "password": "123456789",
                "balance": 50123541.89,
                "cardNumber": Date.now() - (202020202  * 12),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "userType": "client",
                "categories": ["Rent", "Food", "Transportation", "Mortgage", "Utilities", "Entertainment"],
                "expenses": [],
                "sentRequests": [],
                "receivedRequests": [],
                "history": [
                    {"date": "2023-01-25", "type": "Transfer From Ben Dover", "amount": "1490080.00"},
                    {"date": "2023-01-10", "type": "Withdraw", "amount": "15000000.00"},
                    {"date": "2022-12-30", "type": "Deposit", "amount": "600000.00"},
                    {"date": "2022-12-25", "type": "Transfer To Anna Borshin", "amount": "700845.99"},
                    {"date": "2022-11-30", "type": "Initial Deposit", "amount": "36512775.9"}
                ]
            },
            {"name": "Anna Borshin",
                "email": "annaborshin@email.com",
                "password": "123456789",
                "balance": 87532.54,
                "cardNumber": Date.now() - (303030303  * 12),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "userType": "client",
                "categories": ["Rent", "Food", "Transportation", "Mortgage", "Utilities", "Entertainment"],
                "expenses": [],
                "sentRequests": [],
                "receivedRequests": [],
                "history": [
                    {"date": "2022-12-30", "type": "Deposit", "amount": "1500.00"},
                    {"date": "2022-12-15", "type": "Deposit", "amount": "37005.85"},
                    {"date": "2022-12-01", "type": "Withdraw", "amount": "14000.00"},
                    {"date": "2022-11-24", "type": "Deposit", "amount": "25000.00"},
                    {"date": "2022-11-05", "type": "Initial Deposit", "amount": "38026.69"}
                ]
            },
            {"name": "Peter File",
                "email": "peterfile@email.com",
                "password": "123456789",
                "balance": 1548325.56,
                "cardNumber": Date.now() - (404040404  * 12),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "userType": "client",
                "categories": ["Rent", "Food", "Transportation", "Mortgage", "Utilities", "Entertainment"],
                "expenses": [],
                "sentRequests": [],
                "receivedRequests": [],
                "history": [
                    {"date": "2023-05-01", "type": "Withdraw", "amount": "500850.25"},
                    {"date": "2023-03-06", "type": "Withdraw", "amount": "450000.00"},
                    {"date": "2023-01-03", "type": "Withdraw", "amount": "230000.00"},
                    {"date": "2022-12-25", "type": "Deposit", "amount": "648500.50"},
                    {"date": "2022-12-10", "type": "Initial Deposit", "amount": "1015975.81"}
                ]
            }
        ];
        updateUsers(...users, demoUsers);
        changeCurrUser(demoUsers[1]);
    }

    const handleClick = (e) => {
        e.preventDefault();
        loadDemo();
    }

    return (
        <PageProvider>
            <div className="bodyContainer">
                {users.length > 0 ?
                    <>
                        <div className="leftBodyContainer">
                            <Navbar/>
                            <Logout handleLogIn={handleLogIn} />
                        </div>
                        <div className="middleBodyContainer">
                            <Transactions/>
                        </div>
                        <div className="rightBodyContainer">
                            <RightBody currUser={currUser}/>
                        </div>
                    </>
                :   <div className="no-users">
                        <div className="no-users-text">No Users</div>
                        <p>Click the button below to load demo data</p>
                        <button type="submit" onClick={e => handleClick(e)}>
                            <Link to="/UserList">Load Demo Data</Link>
                        </button>
                    </div>
                }
            </div>
        </PageProvider>
    )
}

export default Dashboard;
