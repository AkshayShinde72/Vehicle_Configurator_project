// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Welcome from "./components/Welcome";
import Feedback from "./pages/Feedback";
import Errorpage from "./pages/Errorpage";
import Footer from "./components/Footer";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import Customize from "./pages/Customize";
import Defaultconfig from "./pages/DefaultConfig";
import "./App.css";
import { IconName } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />\
          <Route path="/errorpage" element={<Errorpage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route
            path="/Customize/:model_id/:quantity"
            element={<Customize />}
          />
          <Route
            path="/Defaultconfig/:model_id/:quantity"
            element={<Defaultconfig />}
          />
          <Route path="/InvoiceGenerator" element={<InvoiceGenerator />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
