// src/components/BabyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BabyList.css'; // Import CSS file

const BabyList = () => {
  const [babies, setBabies] = useState([]);
  const [stay, setStay] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/baby')
      .then(response => {
        setBabies(response.data);
      })
      .catch(error => {
        console.error('Error fetching babies:', error);
      });

    axios.get('http://localhost:3000/babytotalstay')
      .then(response => {
        setStay(response.data);
      })
      .catch(error => {
        console.error('Error fetching stay:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>FinalReport</h2>
      <table className="baby-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>IDBaby</th>
            <th>Device1Date</th>
            <th>Device2Date</th>
            <th>Device3Date</th>
            <th>ExitDate</th>
            <th>State</th>
            <th>lengthDayStay1</th>
            <th>lengthDayStay2</th>
            <th>lengthDayStay3</th>
            <th>TotalStay</th>
            <th>Total</th> {/* Add a new column header */}
          </tr>
        </thead>
        <tbody>
          {babies.map(baby => (
            <tr key={baby.ID}>
              <td>{baby.ID}</td>
              <td>{baby.IDBaby}</td>
              <td>{baby.Device1Date}</td>
              <td>{baby.Device2Date}</td>
              <td>{baby.Device3Date}</td>
              <td>{baby.ExitDate}</td>
              <td>{baby.State}</td>
              <td>{baby.lengthDayStay1}</td>
              <td>{baby.lengthDayStay2}</td>
              <td>{baby.lengthDayStay3}</td>
              <td>{baby.TotalStay}</td>
              {/* Assuming stay is an array, you need to find the matching entry */}
              <td>{stay.find(s => s.BabyID === baby.IDBaby)?.TotalStayInSystem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BabyList;
