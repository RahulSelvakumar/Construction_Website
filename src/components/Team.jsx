import React from 'react';
import './styles/Team.css';

import userImg from '../images/user.jpg';


const Team = () => {
  const teamData = [
    {
      sno: 1,
      name: 'Ravendra Pal Singh',
      qualification: 'B.Tech',
      designation: 'Project In charge Civil',
      image: userImg
    },
    {
      sno: 2,
      name: 'Raheesh Khan',
      qualification: 'B.Tech',
      designation: 'Project Eng. Civil',
      image:userImg
    },
    {
      sno: 3,
      name: 'Anshul Kumar',
      qualification: 'Diploma Engineer',
      designation: 'Site Eng. Civil',
      image:userImg
    },
    {
      sno: 4,
      name: 'Nawab Ahamad Saifi',
      qualification: 'Diploma',
      designation: 'Site Eng. Civil',
      image:userImg
    },
    {
      sno: 5,
      name: 'Sanjeev Kumar',
      qualification: 'Diploma Engineer',
      designation: 'Site Eng. Electrical',
      image:userImg
    },

  ];

  return (
    <div id="team" className="section">
      <div className="section-content">
        <h1 className="section-heading">Our Team</h1>
        <div className="team-container">
          {teamData.map((member, index) => (
            <div key={index} className="user-card">
              <img src={member.image} alt={member.name} className="user-profile" />
              <h2>{member.name}</h2>
              <p>
                <strong>Technical Qualification: </strong>
                {member.qualification}
              </p>
              <p>
                <strong>Designation: </strong>
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
