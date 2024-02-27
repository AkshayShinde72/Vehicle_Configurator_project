import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ExteriorConfiguration() {
  const [exteriorComponents, setExteriorComponents] = useState([]);
  const { model_id } = useParams();

  useEffect(() => {
    // Fetch exterior components from the API based on the modelId
    fetch(`http://localhost:8080/api/exterior/${model_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setExteriorComponents(data))
      .catch((error) =>
        console.error("Error fetching exterior components:", error)
      );
  }, [model_id]);

  return (
    <div>
      <h2>Exterior Configuration</h2>
      <p>
        This is the exterior configuration section. Here you can select options
        related to the exterior features of the car.
      </p>
      <div>
        <label htmlFor="exteriorComponent">Exterior Component:</label>
        <select id="exteriorComponent">
          {exteriorComponents.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ExteriorConfiguration;
