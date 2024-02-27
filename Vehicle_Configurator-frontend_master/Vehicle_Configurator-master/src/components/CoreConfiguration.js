import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CoreConfiguration() {
  const [coreComponents, setCoreComponents] = useState([]);
  const { model_id } = useParams();

  useEffect(() => {
    // Fetch core components from the API based on the modelId
    fetch(`http://localhost:8080/api/core/${model_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCoreComponents(data))
      .catch((error) =>
        console.error("Error fetching core components:", error)
      );
  }, [model_id]);

  return (
    <div>
      <h2>Core Configuration</h2>
      <p>
        This is the core configuration section. Here you can select options
        related to the core features of the car.
      </p>
      <div>
        <label htmlFor="engine">Engine:</label>
        <select id="engine">
          {coreComponents.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="transmission">Transmission:</label>
        <select id="transmission">
          {coreComponents.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CoreConfiguration;
