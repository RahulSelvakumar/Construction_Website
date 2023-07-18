import React from 'react';
import './styles/Services.css';

const Services = () => {
  return (
    <div id="services" className="section">
      <div className="section-content">
        <h1 className="section-heading">Our Services</h1>
        <div className="services-table">
          <table>
            <tbody>
              <tr>
                <td>Finishing</td>
                <td>Tiles and Gypsum</td>
                <td>Carpentry work</td>
              </tr>
              <tr>
                <td>MEP work</td>
                <td>Excavation</td>
                <td>Compaction</td>
              </tr>
              <tr>
                <td>Leveling</td>
                <td>Blinding Concrete</td>
                <td>Shuttering work</td>
              </tr>
              <tr>
                <td>Steel Reinforcement</td>
                <td>Concrete Curing</td>
                <td>Concrete and concrete test</td>
              </tr>
              <tr>
                <td>Backfilling and soil test</td>
                <td>Furniture work</td>
                <td>Completion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="services-description">
          XYZ’s history of commercial services successes ranges from residential and industrial complexes. XYZ provides the highest quality of service for just about every type of institutional and commercial project, and that's a promise that's backed by the testimony of more than a half-decade worth of satisfied customers.
        </p>
      </div>
    </div>
  );
};

export default Services;
