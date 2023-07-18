import React from 'react';
import './styles/Message.css';

const Message = () => {
  return (
    <div id="message" className="section">
      <div className="section-content">
        <h1 className="section-heading">Message from Propritors</h1>
        <div className="message-container">
          <div className="message-card">
            <p className="message-text">"XYZ take pride in being one of the pioneer construction & Engineering Proprietorship firm many Regions, having achieved a remarkable growth over the last Five Years and contributing significantly to the construction industry."</p>
          </div>
          <div className="message-card">
            <p className="message-text">"The year was 1997.A sapling was planted called "XYZ Contractors & Developers". It was started as sole proprietorship business. By and by this sapling was grown into a huge tree ."</p>
          </div>
          <div className="message-card">
            <p className="message-text">"XYZ expert team of professionals always assist our clients to select cost effective best architectural solutions according to their needs."</p>
          </div>
          <div className="message-card">
            <p className="message-text">"XYZ has attained prominence as a leader in the field of construction through competence, competitiveness and timely delivery with highest quality standards and recognized safety performance. With the advancement of science and technology,"</p>
          </div>
          <div className="message-card">
            <p className="message-text">"XYZ Contractors & Developers is the preferred choice of many clients both in private & public sector because of its reliability & commitment to quality and safety."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
