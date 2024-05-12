// src/components/HeartRateList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeartRateList.css'; // Import CSS file

const HeartRateList = () => {
  const [heartRates, setHeartRates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3/')
      .then(response => {
        setHeartRates(response.data);
      })
      .catch(error => {
        console.error('Error fetching heart rates:', error);
      });
  }, []);

  return (
    <div>
      <h2>DailyReport</h2>
      <table className="baby-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Avg Heart Rate</th>
            <th>Avg Room Temperature</th>
            <th>Avg Baby Temperature</th>
            <th>Avg Oxygen</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {heartRates.map(rate => (
            <tr key={rate.id}>
              <td>{rate.id}</td>
              <td>{rate.start_time}</td>
              <td>{rate.end_time}</td>
              <td>{rate.avg_heart_rate}</td>
              <td>{rate.avgroom_tempe}</td>
              <td>{rate.avgBaby_temp}</td>
              <td>{rate.avg_oxygen}</td>
              <td>{rate.Measure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeartRateList;
