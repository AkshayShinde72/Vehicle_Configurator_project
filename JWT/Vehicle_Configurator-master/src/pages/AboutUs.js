// AboutUs.js
import React, { useEffect, useState } from "react";
import "./AboutUs.css"; // Import additional CSS file for styling

function AboutUs() {
  const clients = [
    {
      name: "TATA",
      imageUrl:
        "https://www.adgully.com/img/800/202011/tata-motors-brings-more-cheer-to-the-season_-launches-india-ki-doosri-diwali-campaign_2.jpg",
      websiteUrl: "https://www.tatamotors.com/",
    },
    {
      name: "Honda",
      imageUrl:
        "https://dealerimages.dealereprocess.com/image/upload/1600348.jpg",
      websiteUrl: "https://www.hondacarindia.com/",
    },
    {
      name: "Hyundai",
      imageUrl:
        "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/revised/Home_orignal_pc_launch.jpg",
      websiteUrl: "https://www.hyundai.com/in/en",
    },
    {
      name: "Toyota",
      imageUrl:
        "https://res.cloudinary.com/forexmotors-com/image/upload/v1696663248/Forex-vehicles/toyota_banner_forex_min_3b8e7e041e.webp",
      websiteUrl: "https://www.toyotabharat.com/",
    },
    // Add similar objects for other clients
  ];

  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  useEffect(() => {
    // Automatic slideshow interval
    const intervalId = setInterval(() => {
      setCurrentClientIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [clients.length]);

  return (
    <div>
      <div className="about-section">
        <h1>About V-Conf</h1>
        <div>
          <div className="about-section">
            <p>
              V-Conf is India's leading car search venture that helps users to
              buy a car of their choice and within their budget. This website
              and app carry rich automotive content such as expert reviews,
              detailed specs and prices, comparisons as well as videos and
              pictures of all car brands and models available in India.
            </p>

            <p>
              V-Conf has launched many innovative features to ensure that users
              get an immersive experience of the car model before visiting a
              dealer's showroom. This includes a tool that gives a feel for
              experiencing the interior and exterior view of the car.
            </p>

            <p>
              Our vision is to construct a complete ecosystem for consumers and
              car manufacturers, dealers, and related businesses such that
              consumers have easy and complete access to not only buying and
              selling cars but also managing their entire ownership experience.
            </p>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>Meet Our Clients</h2>
      <div className="slideshow-container">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`client-slide ${
              index === currentClientIndex ? "active" : ""
            }`}>
            <a
              href={client.websiteUrl}
              target="_blank"
              rel="noopener noreferrer">
              <div className="column">
                <div className="card">
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    style={{ width: "100%" }}
                  />
                  <div className="container">
                    <h2>{client.name}</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
