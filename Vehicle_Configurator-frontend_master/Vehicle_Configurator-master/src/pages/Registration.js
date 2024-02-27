import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import { Link } from "react-router-dom";
export default function Registration() {
  const [formdata, setFormData] = useState({
    id: "",
    username: "",
    emailid: "",
    password: "",
    comp_name: "",
    address: "",
    telephone: "",
    holding: "",
    name_auth_person: "",
    designation: "",
    auth_tel: "",
  });
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let demo = JSON.stringify(formdata);
    console.log(JSON.parse(demo));

    fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: demo,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.text(); // Use text() instead of json() to handle non-JSON responses
      })
      .then((data) => {
        console.log("Server response:", data);

        try {
          const jsonData = JSON.parse(data);
          if (jsonData && jsonData.success === true) {
            alert("Successfully registered");
            navigate("/login");
          } else {
            alert(
              "Registration failed1: " + (jsonData.message || "Unknown error")
            );
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Successfully registered");
        }

        // Move navigate("/") here
        navigate("/");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        alert("Registration failed3. Please try again later.");
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
        <h1>Registration Page</h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="column">
            <label>Email:</label>
            <input type="text" name="emailid" onChange={handleChange} />
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} />
            <label>Password:</label>
            <input type="text" name="password" onChange={handleChange} />
            <label>Company Name:</label>
            <input type="text" name="comp_name" onChange={handleChange} />
          </div>
          <div className="column">
            <label>Address:</label>
            <input type="text" name="address" onChange={handleChange} />
            <label>Telephone:</label>
            <input type="text" name="telephone" onChange={handleChange} />
            <label>Holding:</label>
            <input type="text" name="holding" onChange={handleChange} />
            <label>Authorized Person Name:</label>
            <input
              type="text"
              name="name_auth_person"
              onChange={handleChange}
            />
            <label>Designation:</label>
            <input type="text" name="designation" onChange={handleChange} />
            <label>Authorized Person Tel:</label>
            <input type="text" name="auth_tel" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
          <br></br>
          <Link to="/">Back</Link>
        </form>
      </div>
    </div>
  );
}
