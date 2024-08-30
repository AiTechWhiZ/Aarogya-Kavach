import React, { useState } from 'react';
import { Table, Input, Button, Select, Tag } from 'antd';  // Import necessary components from Ant Design
import '../styles/OPDQueue.css';

const { Search } = Input;
const { Option } = Select;

// Dummy data set
const initialData = [
  {
    appointmentId: 'APPT001',
    patientId: 'PT001',
    patientName: 'John Doe',
    age: 32,
    gender: 'Male',
    appointmentDate: '2024-09-01',
    appointmentTime: '09:00',
    doctorAssigned: 'Dr. Smith',
    reasonForVisit: 'Routine Checkup',
    status: 'Confirmed',
  },
  {
    appointmentId: 'APPT002',
    patientId: 'PT002',
    patientName: 'Jane Smith',
    age: 27,
    gender: 'Female',
    appointmentDate: '2024-09-01',
    appointmentTime: '10:30',
    doctorAssigned: 'Dr. Adams',
    reasonForVisit: 'Flu Symptoms',
    status: 'Pending',
  },
  {
    appointmentId: 'APPT003',
    patientId: 'PT003',
    patientName: 'Michael Johnson',
    age: 45,
    gender: 'Male',
    appointmentDate: '2024-09-02',
    appointmentTime: '11:00',
    doctorAssigned: 'Dr. Brown',
    reasonForVisit: 'Blood Pressure Follow-up',
    status: 'Cancelled',
  },
  // More data...
];

const OPDQueue = () => {
  const [data, setData] = useState(initialData); // State to manage appointment data
  const [filterStatus, setFilterStatus] = useState(''); // State to filter appointments by status

  // Function to handle search by patient name
  const onSearch = (value) => {
    const filteredData = initialData.filter((item) =>
      item.patientName.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  // Function to handle status filter
  const handleStatusFilter = (value) => {
    if (value === '') {
      setData(initialData); // Reset to initial data if no filter selected
    } else {
      const filteredData = initialData.filter((item) => item.status === value);
      setData(filteredData);
    }
    setFilterStatus(value); // Update the filter status state
  };

  // Define table columns for appointments
  const columns = [
    {
      title: 'Appointment ID',
      dataIndex: 'appointmentId',
      key: 'appointmentId',
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Appointment Date',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
    },
    {
      title: 'Appointment Time',
      dataIndex: 'appointmentTime',
      key: 'appointmentTime',
    },
    {
      title: 'Doctor Assigned',
      dataIndex: 'doctorAssigned',
      key: 'doctorAssigned',
    },
    {
      title: 'Reason for Visit',
      dataIndex: 'reasonForVisit',
      key: 'reasonForVisit',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Confirmed' ? 'green' : status === 'Pending' ? 'orange' : status === 'Completed' ? 'blue' : 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>OPD Management Dashboard</h2>

      {/* Search and Filter Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <Search
          placeholder="Search by patient name"
          onSearch={onSearch}
          enterButton
          style={{ width: 300 }}
        />
        <Select
          value={filterStatus}
          onChange={handleStatusFilter}
          placeholder="Filter by Status"
          style={{ width: 200 }}
          allowClear
        >
          <Option value="">All</Option>
          <Option value="Confirmed">Confirmed</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Completed">Completed</Option>
          <Option value="Cancelled">Cancelled</Option>
        </Select>
        <Button onClick={() => setData(initialData)}>Reset Filters</Button>
      </div>

      {/* Appointments Table */}
      <Table
        columns={columns}
        dataSource={data}
        rowKey="appointmentId"
        pagination={{ pageSize: 5 }} // Pagination for better UX
      />
    </div>
  );
};

export default OPDQueue;