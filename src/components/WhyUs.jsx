import React from 'react';
import './styles/WhyUs.css';
import quality from '../images/quality.jpeg';
import warranty from '../images/warranty.png';
import timely from '../images/timely.png';
import financial from '../images/financial.jpeg';

const WhyUs = () => {
  return (
    <div id="why-us" className="section">
      <div className="section-content">
        <h1 className="section-heading">Why Us?</h1>
        <div className="card-container">
          <div className="card">
            <img src={quality} alt="Satisfaction" className="card-image" />
            <h2>Quality</h2>
            <p>Quality in constructions is defined as "meeting or exceeding" the requirements of clients. XYZ have given the top priority to ensure the quality of constructions from inception to completion. XYZ Very own triple quality check system run by Construction experts to meet up XYZ aim. Quality is the key to success of XYZ history.</p>
          </div>
          <div className="card">
            <img src={warranty} alt="Satisfaction" className="card-image" />
            <h2>Warranty</h2>
            <p>XYZ give structural warranty for any constructions its undertake. It covers all the Structural works of the construction such as Foundation works, Columns, Beams, staircases, Concrete slabs & Other civil works like Brickworks, Floor finishes roof works etc... Due to any kind of a defect, XYZ undertakes total responsibility of the failures.</p>
          </div>
          <div className="card">
            <img src={timely} alt="Satisfaction" className="card-image" />
            <h2>Timely Delivery</h2>
            <p>One of the most common concerns among the clients about construction is the time of delivery. Without dragging on the procedure, wasting the time & money of the clients, XYZ ensures on time delivery as a major responsibility. XYZ gives their top priority to fulfill on time completion.</p>
          </div>
          <div className="card">
          <img src={financial} alt="financial" className="card-image" />
            <h2>Financial Stability</h2>
            <p>Financial stability means Condition in which the financial system is not unstable. It is defined in terms of its ability to facilitate & enhance economic processes, manage risks & absorb shock during the Past years, XYZ has maintained an excellent financial disciplines to reach the current stable condition of the Establishment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
