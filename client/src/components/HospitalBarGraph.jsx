import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function HospitalBarGraph() {
  const data = {
    labels: ['Lakshadweep', 'Chandigarh', 'Dadra & N Haveli', 'Puducherry', 'Daman & Diu'], // Add all states/UTs labels here
    datasets: [
      {
        label: 'Public Hospitals',
        data: [9, 9, 12, 14, 5], // Corresponding data for public hospitals
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Private Hospitals',
        data: [4, 4, 6, 6, 21], // Corresponding data for private hospitals
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Hospitals',
        data: [13, 13, 18, 20, 26], // Corresponding data for total hospitals
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Hospitals in India (Statewise)',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default HospitalBarGraph;
