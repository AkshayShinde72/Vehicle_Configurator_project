import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSuccessfulLogin = (username) => {
    // Set isLoggedIn to true in session storage
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", username);
    alert("Successfully logged in");
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let demo = JSON.stringify(formData);
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: demo,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          handleSuccessfulLogin(formData.username);

          navigate("/home");
        } else {
          alert("Invalid user");
          navigate("/errorpage");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div className="feedback-container">
      <div className="image-container">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png?f=webp"
          alt="Feedback Image"
          className="feedback-image"
        />
      </div>
      <div className="registration-container">
        <h1>Login Page</h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="column">
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} />
            <label>Password:</label>
            <input type="text" name="password" onChange={handleChange} />
          </div>

          <button type="submit">Submit</button>
          <br></br>
          <Link to="/">Back</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
