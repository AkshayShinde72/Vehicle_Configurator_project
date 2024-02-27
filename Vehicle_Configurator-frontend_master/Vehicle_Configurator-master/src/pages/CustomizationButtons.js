import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InvoiceGenerator from "./InvoiceGenerator";

function CustomizationButtons({
  onCoreClick,
  onStandardClick,
  onInteriorClick,
  onExteriorClick,
}) {
  const navigate = useNavigate();
  const { model_id, quantity } = useParams();
  const [showInvoice, setShowInvoice] = useState(false);
  const [price, setPrice] = useState(0);

  const [carDetails, setCarDetails] = useState({
    id: null,
    modelName: "",
    price: 0,
    segmentMaster: { id: null, name: "" },
    mfgMaster: { id: null, name: "" },
    imagePath: "",
  });

  const handleBackClick = () => {
    navigate(`/Defaultconfig/${model_id}/${quantity}`);
  };

  const handleConfirmOrder = () => {
    // Confirm order logic
    alert("Order confirmed!");
    setShowInvoice(true); // Set state to show InvoiceGenerator
  };

  useEffect(() => {
    const fetchCarDetails = () => {
      fetch(`http://localhost:8080/api/Model/${model_id}`)
        .then((response) => response.json())
        .then((data) => setCarDetails(data[0])) // Assuming the API returns an array with a single object
        .catch((error) => console.error("Error fetching car details:", error));
    };

    // Call the fetchCarDetails function to trigger the API request
    fetchCarDetails();
  }, [model_id]); // Include model_id as a dependency

  return (
    <div>
      <div className="button-row">
        <button className="button" onClick={onCoreClick}>
          Core
        </button>
        <button className="button" onClick={onStandardClick}>
          Standard
        </button>
        <button className="button" onClick={onInteriorClick}>
          Interior
        </button>
        <button className="button" onClick={onExteriorClick}>
          Exterior
        </button>
        <button className="button" onClick={handleBackClick}>
          Back
        </button>
        <button className="button" onClick={handleConfirmOrder}>
          Confirm
        </button>
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

export default CustomizationButtons;
