import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StandardConfiguration() {
  const [standardComponents, setStandardComponents] = useState([]);
  const { model_id } = useParams();

  useEffect(() => {
    // Fetch standard components from the API based on the model_id
    fetch(`http://localhost:8080/api/std/${model_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStandardComponents(data))
      .catch((error) =>
        console.error("Error fetching standard components:", error)
      );
  }, [model_id]);

  return (
    <div>
      <h2>Standard Configuration</h2>
      <p>
        This is the standard configuration section. Here you can select options
        related to the standard features of the car.
      </p>
      <div>
        <label htmlFor="seats">Seats:</label>
        <select id="seats">
          {standardComponents.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StandardConfiguration;
