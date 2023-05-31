import React from 'react';
import './Resume.css'
const ExperienceItem = ({ title, organization, duration, description, right }) => {
  return (
    <div className={`timeline-item ${right ? 'right' : ''}`}>
      <div className="timeline-item-content">
        <h5>{title}</h5>
        <h6>{organization}</h6>
        <p><strong>Duration: </strong>{duration}</p>
        <div className="timeline-item-dot" />
      </div>
    </div>
  );
};

export default ExperienceItem;