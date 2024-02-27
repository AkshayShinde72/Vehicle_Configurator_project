import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./DefaultConfiguration.css";
import InvoiceGenerator from "./InvoiceGenerator";

function Defaultconfig() {
  const { model_id, quantity } = useParams();

  const [carDetails, setCarDetails] = useState({
    id: null,
    modelName: "",
    price: 0,
    segmentMaster: { id: null, name: "" },
    mfgMaster: { id: null, name: "" },
    imagePath: "",
  });

  const [standardFeatures, setStandardFeatures] = useState([]);
  const [coreFeatures, setCoreFeatures] = useState([]);
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);

  const [price, setPrice] = useState(0);

  let navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Confirm order logic
    alert("Order confirmed!");
    setShowInvoice(true); // Set state to show InvoiceGenerator
  };

  const handleConfigure = (event) => {
    navigate(`/Customize/${model_id}/${quantity}`);
  };

  useEffect(() => {
    const fetchCarDetails = () => {
      fetch(`http://localhost:8080/api/Model/${model_id}`)
        .then((response) => response.json())
        .then((data) => setCarDetails(data[0])) // Assuming the API returns an array with a single object
        .catch((error) => console.error("Error fetching car details:", error));
    };

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

    // Function to fetch standard features
    const fetchCoreFeatures = () => {
      fetch(`http://localhost:8080/api/componentbyc/${model_id}`)
        .then((response) => response.json())
        .then((data) => setCoreFeatures(data))
        .catch((error) =>
          console.error("Error fetching core features:", error)
        );
      console.log(coreFeatures);
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

    const handleConfigure = (event) => {
      navigate("/configure");
    };

    // Call the functions to fetch data
    fetchStandardFeatures();
    fetchInteriorFeatures();
    fetchCarDetails();
    fetchCoreFeatures();
    fetchExteriorFeatures();
  }, [model_id]);

  return (
    <div>
      <div className="default-configuration">
        <div className="car-info">
          <img
            src={`/${carDetails.imagePath}`}
            alt="Car"
            className="car-image"
          />
          <div className="info">
            <h2>{`${carDetails.modelName}`}</h2>
            <p>
              Description of the car Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla euismod ligula vel justo sodales, nec
              tincidunt orci ultricies.
            </p>

            <h4>Core Features:</h4>
            <ul>
              {coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
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
              <button onClick={handleConfirmOrder}>Confirm</button>
              <button onClick={handleConfigure}>Configure</button>

              {/* Cancel button with Link for navigation */}
              <Link to="/Home">
                <button>Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showInvoice && (
        <InvoiceGenerator
          orderSize={quantity}
          price={price}
          modelname={carDetails.modelName}
        />
      )}
    </div>
  );
}

export default Defaultconfig;
