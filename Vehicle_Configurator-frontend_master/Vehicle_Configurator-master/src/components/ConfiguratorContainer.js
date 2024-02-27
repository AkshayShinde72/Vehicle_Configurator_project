import React, { useState, useEffect } from "react";
import "./ConfiguratorContainer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ConfiguratorContainer = (props) => {
  const [segments, setSegments] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSegments();
  }, []);

  const fetchSegments = () => {
    fetch("http://localhost:8080/api/segments/")
      .then((response) => response.json())
      .then((data) => {
        setSegments(data);
      });
  };

  const fetchManufacturers = (segmentId) => {
    fetch(`http://localhost:8080/api/manufacturers/${segmentId}`)
      .then((response) => response.json())
      .then((data) => {
        setManufacturers(data.data);
      })
      .catch((error) => {
        console.error("Error fetching manufacturers:", error);
      });
  };

  const fetchModels = (segmentId, manufacturerId) => {
    fetch(`http://localhost:8080/api/Model/${segmentId}/${manufacturerId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Models data:", data);
        setModels(data);
      })
      .catch((error) => {
        console.error("Error fetching models:", error);
      });
  };

  const handleSegmentChange = (event) => {
    const segmentId = event.target.value;
    setSelectedSegment(segmentId);
    setSelectedManufacturer(""); // Reset selected manufacturer when segment changes
    setManufacturers([]); // Clear manufacturers list
    setModels([]); // Clear models list

    fetchManufacturers(segmentId);
  };

  const handleManufacturerChange = (event) => {
    const manufacturerId = event.target.value;
    setSelectedManufacturer(manufacturerId);
    setModels([]); // Clear models list

    fetchModels(selectedSegment, manufacturerId);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleGoButtonClick = () => {
    if (selectedModel && selectedSegment && selectedManufacturer) {
      const url = `/Defaultconfig/${selectedModel}/${quantity}`;
      navigate(url);
    } else {
      // Handle the case where one of the required values is not selected
      console.error("Please select all required values before clicking Go.");
    }
  };

  return (
    <div id="configurator" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Configure here</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <h3>Segment</h3>
            <select
              className="custom-select"
              value={selectedSegment}
              onChange={handleSegmentChange}>
              <option value="">Select Segment</option>
              {segments.map((segment) => (
                <option key={segment.id} value={segment.id}>
                  {segment.name}
                </option>
              ))}
            </select>
          </div>
          <div
            className={`col-xs-12 col-md-3 ${
              selectedSegment ? "" : "disabled"
            }`}>
            <h3>Manufacturer</h3>
            <select
              className="custom-select"
              value={selectedManufacturer}
              onChange={handleManufacturerChange}
              disabled={!selectedSegment}>
              <option value="">Select Manufacturer</option>
              {manufacturers.map((manufacturer) => (
                <option key={manufacturer.id} value={manufacturer.id}>
                  {manufacturer.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className={`col-xs-12 col-md-3 ${
              selectedManufacturer ? "" : "disabled"
            }`}>
            <h3>Model</h3>
            <select
              className="custom-select"
              value={selectedModel}
              onChange={handleModelChange}
              disabled={!selectedManufacturer}>
              <option value="">Select Model</option>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.modelName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-xs-12 col-md-3" style={{ width: "15%" }}>
            <h3>Quantity</h3>
            <input
              type="number"
              className="form-control"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          {/* Other dropdowns */}
          <div className="col-xs-12 col-md-3">
            <button
              className="btn1"
              style={{ marginLeft: "45%" }}
              onClick={handleGoButtonClick}
              disabled={!selectedModel}>
              <FaSearch />
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorContainer;
