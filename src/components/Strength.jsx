import React from 'react';
import './styles/Strength.css';

const Strength = () => {
  const tableData = [
    {
      particulars: 'Concrete Mixer',
      machinery: 6,
      cost: '4.40 Lakh',
      age: '2 years'
    },
    {
      particulars: 'Vibrators',
      machinery: 8,
      cost: '2.20 Lakh',
      age: '3 years'
    },
    {
        particulars:'Pump',
        machinery: 2,
        cost: '0.80 Lakh',
        age: '3 years'
      },
      {
        particulars:'Cube Testing Machine',
        machinery: 2,
        cost: '0.95 Lakh',
        age: '2 years'
      },
      {
        particulars:'Bar Cutting Machine',
        machinery: 2,
        cost: '0.90 Lakh',
        age: '3 years'
      },
      {
        particulars:'Bar Bending Machine',
        machinery: 2,
        cost: '0.70 Lakh',
        age: '2 years'
      }
   
  ];

  return (
    <div id="strength" className="section">
      <div className="section-content">
        <h1 className="section-heading">Our Strengths</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Particulars of Machinery etc.</th>
                <th>No. of Machinery</th>
                <th>Estimated Cost (Rs.)</th>
                <th>Approximate Age</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.particulars}</td>
                  <td>{row.machinery}</td>
                  <td>{row.cost}</td>
                  <td>{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Strength;