// src/components/AssociationRuleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AssociationRuleList.css'; // Import CSS file

const AssociationRuleList = () => {
  const [associationRules, setAssociationRules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/association_rules')
      .then(response => {
        setAssociationRules(response.data);
      })
      .catch(error => {
        console.error('Error fetching association rules:', error);
      });
  }, []);

  return (
    <div>
      <h2>Association Rules</h2>
      <table className="baby-table">
        <thead>
          <tr>
            <th>Itemsets</th>
            <th>Rule Type</th>
          </tr>
        </thead>
        <tbody>
          {associationRules.map(rule => (
            <tr key={rule.itemsets}>
              <td>{rule.itemsets}</td>
              <td>{rule['Rule Type']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssociationRuleList;
