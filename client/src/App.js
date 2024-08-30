import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HospitalsRecord from './pages/HospitalsRecord';
import OPDQueue from './pages/OPDQueue';
import InventoryManagement from './pages/InventoryManagement';
import EmergencyHandling from './pages/EmergencyHandling';
import PatientsReport from './pages/PatientsReport';
import Doctors from './pages/Doctors';

function App() {
  return (
    <Router>
    <div>
      
      </div>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/opd-queue" element={<OPDQueue />} />
     <Route path="/inventory-management" element={<InventoryManagement />} /> 
     <Route path="/hospitals" element={<HospitalsRecord/>} />
     <Route path="/doctors" element={<Doctors/>} />
     <Route path="/patients-reports" element={<PatientsReport/>} />
     <Route path="/emergency-handling" element={<EmergencyHandling />} />
   </Routes>
   </Router>
  )
}


export default App
