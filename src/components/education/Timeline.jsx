// src/components/Timeline.js
import React from 'react';
import './Timeline.css';

const Timeline = ({ experiences }) => {
  return (
    <section className='timeline section' id='timeline'>
      <div className="timeline__container container grid">
      <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className={`timeline-date ${index % 2 === 0 ? 'right' : 'left'}`}>{exp.duration}</div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
