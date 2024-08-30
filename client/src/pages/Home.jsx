import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';  
import { Pie } from 'react-chartjs-2';
import '../styles/Home.css';
import logo from "../assets/images/logo.png";
import { FaNotesMedical, FaProcedures, FaSyringe, FaUserMd, FaCircle } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

function Home() {
  const navigate = useNavigate();

  const pieData = {
    labels: ['OPD Appointments', 'New Patients', 'Inventory', 'Hospital Revenue'],
    datasets: [
      {
        data: [450, 155, 52, 13921],
        backgroundColor: ['#007bff', '#ff8c00', '#6a5acd', '#28a745'],
        hoverBackgroundColor: ['#0056b3', '#e07b00', '#4e4cb2', '#207c34'],
      },
    ],
  };

  const doctorStatus = {
    name: 'Dr. Kiran Patel',
    status: 'online',  // 'online', 'away', or 'offline'
  };

  const statusColor = {
    online: 'green',
    away: 'yellow',
    offline: 'red',
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile-section">
          <FaUserMd className="doctor-icon" />
          <FaCircle color={statusColor[doctorStatus.status]} className="status-icon" />
          <h2 className="doctor-name">{doctorStatus.name}</h2>
          <p className="status-text">{doctorStatus.status.charAt(0).toUpperCase() + doctorStatus.status.slice(1)}</p>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => navigate('/opd-queue')}>OPD Appointments</li>
          <li onClick={() => navigate('/patients-reports')}>Medical Reports</li>
          <li onClick={() => navigate('/doctors')}>Doctors</li>
          <li onClick={() => navigate('/inventory-management')}>Inventory Management</li>
          <li onClick={() => navigate('/emergency-handling')}>Emergency Handling</li>
        </ul>
      </aside>

      <div className="main-content">
        <header className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search for Doctors, Specialties, and Hospitals" />
            <button>Search</button>
          </div>
          <div className="header-buttons">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </header>

        <div className="stats-cards">
          <div className="stat-card" style={{ backgroundColor: "#007bff" }} onClick={() => navigate('/opd-queue')}>
            <FaProcedures className="stat-icon" />
            <div>
              <h3>Appointments</h3>
              <p>450</p>
              <span>45% increase in appointments</span>
            </div>
          </div>
          <div className="stat-card" style={{ backgroundColor: "#ff8c00" }} onClick={() => navigate('/patients-reports')}>
            <FaUserMd className="stat-icon" />
            <div>
              <h3>New Patients</h3>
              <p>155</p>
              <span>40% increase in new patients</span>
            </div>
          </div>
          <div className="stat-card" style={{ backgroundColor: "#6a5acd" }} onClick={() => navigate('/inventory-management')}>
            <FaSyringe className="stat-icon" />
            <div>
              <h3>Operations</h3>
              <p>52</p>
              <span>85% increase in operations</span>
            </div>
          </div>
          <div className="stat-card" style={{ backgroundColor: "#28a745" }}>
            <FaNotesMedical className="stat-icon" />
            <div>
              <h3>Hospital Earning</h3>
              <p>₹ 13,921</p>
              <span>50% increase in sales</span>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-card">
            <h3>Statistics Overview</h3>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
