import React from 'react';
import '../styles/Home.css';
import logo from "../assets/images/logo.png"


function Home() {
  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} alt="Logo" className="logo" />
       
        <div className="header-buttons">
          <button></button>
          <button></button>
        </div>
      </header>
      
      <div className="search-bar">
        <input type="text" placeholder="Search for Doctors, Specialties and Hospitals" />
        <button>Search</button>
      </div>
      
      <div className="options-section">
        <div className="option-card">
          <h3>OPD Queue List</h3>
          <p>Manage OPD queues effectively</p>
        </div>
        <div className="option-card">
          <h3>Inventory Management</h3>
          <p>Manage inventory with ease</p>
        </div>
        <div className="option-card">
          <h3>Hospitals</h3>
          <p>Health needs under one roof</p>
        </div>
        <div className="option-card">
          <h3>Patients Reports</h3>
          <p>View and manage patient details</p>
        </div>
        <div className="option-card">
          <h3>Emergency Handling</h3>
          <p>Life Saving is always a priority</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
