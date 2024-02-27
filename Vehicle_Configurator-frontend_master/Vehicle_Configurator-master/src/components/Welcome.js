// Home.js
import React from "react";
import "./Home.css"; // Import additional CSS file for Home page styling
import "./Welcome.css"; // Import additional CSS file for Home page styling
import ImageGallery from "../pages/ImageGallery";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

const Welcome = () => {
  const handleStartLogin = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };

  const handleStartRegistration = () => {
    // Redirect to the registration page
    window.location.href = "/registration";
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <video
          src="./Welcomecar.mp4"
          alt="Automotive Industry"
          className="hero-video"
          autoPlay
          muted
          loop
        />
        <div className="hero-overlay">
          <div className="btn__container">
            <a onClick={handleStartLogin} href="/login" className="btn">
              <i className="fas fa-user-alt">
                <FaUserAlt />
              </i>
              <span>Login</span>
            </a>
            <a
              onClick={handleStartRegistration}
              href="/registration"
              className="btn-f">
              <i className="fas fa-user-plus">
                <FaUserPlus />
              </i>
              <span>Signup</span>
            </a>
          </div>
        </div>
      </div>

      <ImageGallery />
    </div>
  );
};

export default Welcome;
