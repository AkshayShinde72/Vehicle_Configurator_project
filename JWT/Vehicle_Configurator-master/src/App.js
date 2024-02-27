// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
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
import Defaultconfig from "./pages/Defaultconfig";
import "./App.css";
import Invoice from "./Invoice";

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
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Defaultconfig/:model_id" element={<Defaultconfig />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
