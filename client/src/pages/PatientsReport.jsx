import React, { useState } from 'react';
import '../styles/PatientsReport.css';

const patients = [
    {
        id: 1,
        name: 'Helen Voizhicki',
        role: 'Patient',
        age: 34,
        email: 'helenvoizhicki@gmail.com',
        phone: '+7 (29) 255 58 43',
        birthDate: '02/09/1987',
        address: '1 Main Street, Austin, TX, 78730',
        status: 'Active',
        workFor: 'LoremIpsum Group',
        medicalInsurance: 'None',
        visionInsurance: 'Yes',
        dentalInsurance: 'Yes',
        chartId: '1967678',
        legacyId: '462354',
        patientSince: '03/02/2019',
        preferredProvider: 'Dr. Stephanie Branch',
        medicalRecords: [
            { date: '03/20/2020', name: 'Prolactin', result: '26' },
            { date: '03/29/2020', name: 'Bilirubin', result: '0.6' },
            { date: '04/20/2020', name: 'DHEA-sulphate', result: '>1000' },
            { date: '05/10/2020', name: 'Free Urinary Cortisol', result: '623±33' },
        ],
        medicalBills: [
            { date: '03/20/2020', amount: '$20.00', status: 'Paid' },
            { date: '03/29/2020', amount: '$15.00', status: 'Paid' },
            { date: '04/20/2020', amount: '$100.00', status: 'Unpaid' },
            { date: '05/10/2020', amount: '$25.50', status: 'Paid' },
        ],
        medications: [
            { name: 'Albuterol HFA', dose: '2 puffs', frequency: 'q4h prn', condition: 'Asthma' },
            { name: 'Aspirin', dose: '81 mg', frequency: '1 daily', condition: 'Diabetes' },
            { name: 'Beclomethasone HFA', dose: '2 puffs', frequency: '1 bid', condition: 'Asthma' },
            { name: 'Carvedilol', dose: '12.5 mg', frequency: '1 bid', condition: 'Hypertension' },
        ],
        appointments: [
            { type: 'Urgent', date: '05/28/2020', provider: 'Stephanie Branch', status: '04/09/2020' },
            { type: 'Follow-Up', date: '05/29/2020', provider: 'Stephanie Branch', status: '04/09/2020' },
            { type: 'Follow-Up', date: '06/03/2020', provider: 'Jimmy Sullivan', status: '05/21/2020' },
            { type: 'Chronic Care', date: '06/07/2020', provider: 'Melissa Meizer', status: '03/10/2020' },
        ]
    },
    // Add more patient data here as needed
];

const PatientsReport = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
    };

    const downloadReport = () => {
        const element = document.createElement('a');
        const file = new Blob([JSON.stringify(selectedPatient, null, 2)], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${selectedPatient.name}-MedicalReport.txt`;
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="patients-report-container">
            <h1>Patients List</h1>
            {!selectedPatient ? (
                <div className="patients-list-container">
                    {patients.map((patient) => (
                        <div key={patient.id} className="patient-card" onClick={() => handlePatientClick(patient)}>
                            <h2>{patient.name}</h2>
                            <p>Age: {patient.age}</p>
                            <p>Email: {patient.email}</p>
                            <p>Phone: {patient.phone}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="patient-details-container">
                    <button className="back-button" onClick={() => setSelectedPatient(null)}>Back to List</button>
                    <div className="profile-header">
                        <div className="profile-image">
                            <img src="https://via.placeholder.com/150" alt="profile" />
                        </div>
                        <div className="profile-info">
                            <h2>{selectedPatient.name}</h2>
                            <p>Role: {selectedPatient.role}</p>
                            <p>Status: {selectedPatient.status}</p>
                            <p>Email: {selectedPatient.email}</p>
                            <p>Phone: {selectedPatient.phone}</p>
                            <p>Work For: {selectedPatient.workFor}</p>
                            <p>Address: {selectedPatient.address}</p>
                            <p>Chart ID: {selectedPatient.chartId}</p>
                            <p>Patient Since: {selectedPatient.patientSince}</p>
                            <p>Preferred Provider: {selectedPatient.preferredProvider}</p>
                        </div>
                    </div>
                    <div className="patient-records">
                        <div className="record-section">
                            <h3>Medical Records</h3>
                            <div className="record-card">
                                <ul>
                                    {selectedPatient.medicalRecords.map((record, index) => (
                                        <li key={index}>
                                            <span>{record.date}</span>
                                            <span>{record.name}</span>
                                            <span>{record.result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="record-section">
                            <h3>Medical Bills</h3>
                            <div className="record-card">
                                <ul>
                                    {selectedPatient.medicalBills.map((bill, index) => (
                                        <li key={index}>
                                            <span>{bill.date}</span>
                                            <span>{bill.amount}</span>
                                            <span>{bill.status}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="record-section">
                            <h3>Medications</h3>
                            <div className="record-card">
                                <ul>
                                    {selectedPatient.medications.map((medication, index) => (
                                        <li key={index}>
                                            <span>{medication.name}</span>
                                            <span>{medication.dose}</span>
                                            <span>{medication.frequency}</span>
                                            <span>{medication.condition}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="record-section">
                            <h3>Appointments</h3>
                            <div className="record-card">
                                <ul>
                                    {selectedPatient.appointments.map((appointment, index) => (
                                        <li key={index}>
                                            <span>{appointment.type}</span>
                                            <span>{appointment.date}</span>
                                            <span>{appointment.provider}</span>
                                            <span>{appointment.status}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className="download-button" onClick={downloadReport}>Download Report</button>
                </div>
            )}
        </div>
    );
};

export default PatientsReport;
