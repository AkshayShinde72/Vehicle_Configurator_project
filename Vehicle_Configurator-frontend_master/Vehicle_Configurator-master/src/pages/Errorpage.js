import React from "react";
import "./Errorpage.css"; // Add a CSS file for styling

const Errorpage = () => {
  const handleStartWelcome = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <div className="errorpage-container">
      <div className="hero-section">
        <h1>Sorry incorrect login credentials...</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Remove the video tag */}
        <div className="hero-overlay">
          <button className="registration-button" onClick={handleStartWelcome}>
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
