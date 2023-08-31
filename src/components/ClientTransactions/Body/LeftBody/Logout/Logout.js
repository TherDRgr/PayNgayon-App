import React from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Logout.css";

const Logout = ({ handleLogIn }) => {
  const confirmLogout = () => {
    // Show a confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Log Out",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      background: "#acffdb",
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the handleLogIn function if the user confirms
        handleLogIn();
      }
    });
  };

  return (
    <div className="logoutContainer" onClick={confirmLogout}>
      <div className="links">
        <div className="linkText">Log Out</div>
      </div>
    </div>
  );
};

export default Logout;
