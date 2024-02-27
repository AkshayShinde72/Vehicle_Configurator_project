// Home.js
import React, { useState } from "react";
import "./Home.css"; // Import additional CSS file for Home page styling
import ImageGallery from "../pages/ImageGallery";

  const Welcome = () => {
  const handleStartLogin = () => {
    // Redirect to the login page
    window.location.href = '/login';
  };

   const handleStartRegistration = () => {
    // Redirect to the login page
    window.location.href = '/Registration';
  };

  

  return (
    <div className="home-container">
      <div className="hero-section">
        <video
          src="./welcomecar.mp4"
          alt="Automotive Industry"
          className="hero-video"
          autoPlay
          muted
          loop
        />
        <div className="hero-overlay">
          <button
            className="login-button"
            onClick={handleStartRegistration}>
            Sign Up
          </button>
           <button
            className="login-button"
            onClick={handleStartLogin}>
            Sign In  
          </button>
        </div>
      </div>
      
      <ImageGallery />

    </div>
  );
}

export default Welcome;
