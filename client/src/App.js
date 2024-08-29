import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HospitalsRecord from './pages/HospitalsRecord';

function App() {
  return (
    <Router>
    <div>
      
      </div>
     <Routes>
     <Route path="/" element={<Home/>} />
     {/* <Route path="/opd-queue" element={<OPDQueue />} />
     <Route path="/inventory-management" element={<InventoryManagement />} /> */}
     <Route path="/hospitals" element={<HospitalsRecord/>} />
     {/* <Route path="/patients-reports" element={<PatientsReports />} />
     <Route path="/emergency-handling" element={<EmergencyHandling />} /> */}
   </Routes>
   </Router>
  )
}


export default App
