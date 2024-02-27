import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function InteriorConfiguration() {
  const [interiorComponents, setInteriorComponents] = useState([]);
  const { model_id } = useParams();

  useEffect(() => {
    // Fetch interior components from the API based on the model_id
    fetch(`http://localhost:8080/api/interior/${model_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setInteriorComponents(data))
      .catch((error) =>
        console.error("Error fetching interior components:", error)
      );
  }, [model_id]);

  return (
    <div>
      <h2>Interior Configuration</h2>
      <p>
        This is the interior configuration section. Here you can select options
        related to the interior features of the car.
      </p>
      <div>
        <label htmlFor="seats">Seats:</label>
        <select id="seats">
          {interiorComponents.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InteriorConfiguration;
