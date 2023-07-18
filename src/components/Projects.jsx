import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      srNo: 1,
      projectName: 'Work of different Water Work UGR & OHSR Faridabad',
      clientName: 'NBCC',
      workDetails: 'Construction of RCC UGT & OHSR at Faridabad incl. Elect., Mech. Work of different capacity and installation of 138 tubewell & Rainwater harvesting work at Faridabad.',
      orderValue: '175 Crore',
      completionDate: '30.11.2018',
      status: 'Completed'
    },
    {
      srNo: 2,
      projectName: 'ESIC Hospital',
      clientName: 'ESIC Department',
      workDetails: 'ESIC Hospital Construction Sector-24 Noida',
      orderValue: '250 Crore',
      completionDate: '30.12.2022',
      status: 'Completed'
    },
    {
      srNo: 3,
      projectName: 'Greater Noida Ganga Jal Project',
      clientName: 'UPRNN',
      workDetails: 'Under 85 Cusec Ganga Jal Water Line Work',
      orderValue: '350 Crore',
      completionDate: '31.06.2022',
      status: 'Completed'
    },
    {
      srNo: 4,
      projectName: 'Greater Noida Sewer Work',
      clientName: 'Jal Nigam (UP)',
      workDetails: 'Laying of 300 to 2400 mm Dia. With C&DS Jal Nigam (UP) Trenchless Sewer Line at West Greater Noida Area.',
      orderValue: '80 Crore',
      completionDate: '20.07.2022',
      status: 'Completed'
    },
    {
      srNo: 5,
      projectName: '85 Cusec Ganga Jal Project various Sector Greater Noida',
      clientName: 'Greater Noida Industrial Development Authority',
      workDetails: 'Ganga Jal Water Line Work 1600 Dia GRP Pipe',
      orderValue: '100 Crore',
      completionDate: '20.07.2022',
      status: 'Completed'
    },
    // Add more project data
  ];

  return (
    <div id="projects" className="section">
      <div className="section-content">
        <h1 className="section-heading">Our Projects</h1>
        <div className="project-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-details">
                <h2>{project.projectName}</h2>
                <p>
                  <strong>Sr. No.: </strong>
                  {project.srNo}
                </p>
                <p>
                  <strong>Client: </strong>
                  {project.clientName}
                </p>
                <p>
                  <strong>Work Details: </strong>
                  {project.workDetails}
                </p>
                <p>
                  <strong>Order Value: </strong>
                  {project.orderValue}
                </p>
                <p>
                  <strong>Completion Date: </strong>
                  {project.completionDate}
                </p>
                <p>
                  <strong>Status: </strong>
                  {project.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
