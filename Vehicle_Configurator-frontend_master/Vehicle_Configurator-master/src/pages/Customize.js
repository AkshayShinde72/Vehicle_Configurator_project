import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DefaultConfiguration.css";
import InvoiceGenerator from "./InvoiceGenerator";
import CustomizationButtons from "../pages/CustomizationButtons";
import CoreConfiguration from "../components/CoreConfiguration";
import StandardConfiguration from "../components/StandardConfiguration";
import InteriorConfiguration from "../components/InteriorConfiguration";
import ExteriorConfiguration from "../components/ExteriorConfiguration";

function Customize() {
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
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [showCustomization, setShowCustomization] = useState(true); // Set to true by default
  const [selectedConfiguration, setSelectedConfiguration] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    core: null,
    standard: null,
    interior: null,
    exterior: null,
  });

  const [price, setPrice] = useState(0);

  let navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Confirm order logic
    alert("Order confirmed!");
    setShowInvoice(true); // Set state to show InvoiceGenerator
  };

  const handleConfigurationClick = (configuration) => {
    setSelectedConfiguration(configuration);
  };

  const handleOptionSelect = (option, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [selectedConfiguration]: {
        ...prevOptions[selectedConfiguration],
        [option]: value,
      },
    }));
  };

  useEffect(() => {
    const fetchCarDetails = () => {
      fetch(`http://localhost:8080/api/Model/${model_id}`)
        .then((response) => response.json())
        .then((data) => setCarDetails(data[0]))
        .catch((error) => console.error("Error fetching car details:", error));
    };

    const fetchStandardFeatures = () => {
      fetch(`http://localhost:8080/api/componentbys/${model_id}`)
        .then((response) => response.json())
        .then((data) => setStandardFeatures(data))
        .catch((error) =>
          console.error("Error fetching standard features:", error)
        );
    };

    const fetchInteriorFeatures = () => {
      fetch(`http://localhost:8080/api/componentbyi/${model_id}`)
        .then((response) => response.json())
        .then((data) => setInteriorFeatures(data))
        .catch((error) =>
          console.error("Error fetching interior features:", error)
        );
    };

    const fetchExteriorFeatures = () => {
      fetch(`http://localhost:8080/api/componentbye/${model_id}`)
        .then((response) => response.json())
        .then((data) => setExteriorFeatures(data))
        .catch((error) =>
          console.error("Error fetching exterior features:", error)
        );
    };

    const fetchPrice = () => {
      fetch(`http://localhost:8080/api/price/${model_id}`)
        .then((response) => response.json())
        .then((data) => setPrice(data))
        .catch((error) => console.error("Error fetching price:", error));
    };

    fetchStandardFeatures();
    fetchInteriorFeatures();
    fetchCarDetails();
    fetchExteriorFeatures();
    fetchPrice();
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
              {showCustomization && (
                <CustomizationButtons
                  onCoreClick={() => handleConfigurationClick("core")}
                  onStandardClick={() => handleConfigurationClick("standard")}
                  onInteriorClick={() => handleConfigurationClick("interior")}
                  onExteriorClick={() => handleConfigurationClick("exterior")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "40%",
          margin: "0 auto",
          display: "flex",
          marginBottom: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {selectedConfiguration === "core" && (
          <CoreConfiguration onSelect={handleOptionSelect} />
        )}
        {selectedConfiguration === "standard" && (
          <StandardConfiguration onSelect={handleOptionSelect} />
        )}
        {selectedConfiguration === "interior" && (
          <InteriorConfiguration onSelect={handleOptionSelect} />
        )}
        {selectedConfiguration === "exterior" && (
          <ExteriorConfiguration onSelect={handleOptionSelect} />
        )}
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

export default Customize;
