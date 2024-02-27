import React from "react";
import "./ImageGallery.css";

function ImageGallery2() {
  return (
    <div className="image-gallery-container">
      <h2>Image Gallery</h2>
      <br />
      <div className="image-grid">
        <img src="images/sedan.jpg" alt="Image 1" className="gallery-image" />
        <img src="images/select4.jpg" alt="Image 2" className="gallery-image" />
        <img src="images/small.jpg" alt="Image 3" className="gallery-image" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default ImageGallery2;
