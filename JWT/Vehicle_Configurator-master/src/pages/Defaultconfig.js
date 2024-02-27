import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DefaultConfiguration.css";

function Defaultconfig() {
  const { model_id } = useParams();

  const [standardFeatures, setStandardFeatures] = useState([]);
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Function to fetch standard features
    const fetchStandardFeatures = () => {
      fetch(`http://localhost:8080/api/componentbys/${model_id}`)
        .then((response) => response.json())
        .then((data) => setStandardFeatures(data))
        .catch((error) =>
          console.error("Error fetching standard features:", error)
        );
      console.log(standardFeatures);
    };

    // Function to fetch interior features
    const fetchInteriorFeatures = () => {
      fetch(`http://localhost:8080/api/componentbyi/${model_id}`)
        .then((response) => response.json())
        .then((data) => setInteriorFeatures(data))
        .catch((error) =>
          console.error("Error fetching interior features:", error)
        );
    };

    // Function to fetch exterior features
    const fetchExteriorFeatures = () => {
      fetch(`http://localhost:8080/api/componentbye/${model_id}`)
        .then((response) => response.json())
        .then((data) => setExteriorFeatures(data))
        .catch((error) =>
          console.error("Error fetching exterior features:", error)
        );
    };

    // Function to fetch price
    const fetchPrice = () => {
      fetch(`http://localhost:8080/api/price/${model_id}`)
        .then((response) => response.json())
        .then((data) => setPrice(data))
        .catch((error) => console.error("Error fetching price:", error));
    };

    // Call the functions to fetch data
    fetchStandardFeatures();
    fetchInteriorFeatures();
    fetchExteriorFeatures();
    fetchPrice();
  }, [model_id]);

  return (
    <div className="default-configuration">
      <div className="car-info">
        <img src="/images/luxury.jpg" alt="Car" className="car-image" />
        <div className="info">
          <h2>Car Model</h2>
          <p>
            Description of the car Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla euismod ligula vel justo sodales, nec
            tincidunt orci ultricies.
          </p>
          <h4>Standard Features:</h4>
          <ul>
            {standardFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h4>Interior Features:</h4>
          <ul>
            {interiorFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h4>Exterior Features:</h4>
          <ul>
            {exteriorFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h4>Price: {price}</h4>

          <div className="buttons">
            <button onClick={() => console.log("Confirm clicked")}>
              Confirm
            </button>
            <button onClick={() => console.log("Configure clicked")}>
              Configure
            </button>

            {/* Cancel button with Link for navigation */}
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Defaultconfig;
