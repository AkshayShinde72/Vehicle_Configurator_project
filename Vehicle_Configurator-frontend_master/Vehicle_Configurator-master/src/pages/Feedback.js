import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "general", // Default value
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        window.location.reload(); // This will refresh the entire page
      } else {
        // Handle error, e.g., show an error message
        console.error("Feedback submission failed");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error.message);
    }
  };

  return (
    <div className="feedback-container">
      <div className="image-container">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/customer-feedback-7455350-6103991.png?f=webp"
          alt="Feedback Image"
          className="feedback-image"
        />
      </div>
      <div className="form-container">
        <h2>Provide Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedbackType">Feedback Type:</label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleInputChange}
              required>
              <option value="general">General Feedback</option>
              <option value="bug">Report a Bug</option>
              <option value="feature">Request a Feature</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleInputChange}
              required></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
