// Navbar.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import additional CSS file for Navbar styling

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to determine whether to show the buttons
  const shouldShowButtons = () => {
    // Check if the current route is one of the specified pages
    return !["/", "/login", "/registration", "/errorpage"].includes(
      location.pathname
    );
  };
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Vehicle Configurator
        </Link>
        <ul className="nav-menu">
          {shouldShowButtons() && (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                {sessionStorage.getItem("isLoggedIn") ? (
                  <>
                    <span>Welcome-{sessionStorage.getItem("username")} </span>
                    <Link to="/" onClick={handleLogout}>
                      -Logout
                    </Link>
                  </>
                ) : (
                  <Link to="/login">Login </Link>
                )}
              </li>

              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
