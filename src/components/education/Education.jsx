// src/components/Experience.js
import React from 'react';
import Timeline from './Timeline';

const Experience = () => {
  const experiences = [
    {
      company: "R.V.R & J.C College of Engineering, Guntur, India",
      role: "Bachelor of technology in Computer Science",
      duration: "July 2016 - Aug 2020",
      description: "Completed my Bachelor's degree with a focus on Computer Science and Engineering."
    },
    {
      company: "Incline Inventions Pvt. Ltd., Hyderabad, India",
      role: "Software Engineer Intern",
      duration: "May 2019 - July 2019",
      description: "Worked on various projects using Python and Machine Learning models."
    },
    {
      company: "Tata Consultancy Services, Bangalore, India",
      role: "Software Engineer",
      duration: "Oct 2020 - Nov 2022",
      description: "Worked on various projects using Java, JavaScript, MySQL, and IBM BPM."
    },
    {
      company: "University of North Carolina at Charlotte, Charlotte, USA",
      role: "Master's in Computer Science",
      duration: "Jan 2023 - Present",
      description: "Pursuing a Master's degree with a focus on Data Science, Machine Learning and Deep Learning."
    }
    // Add more experiences here
  ];

  return (
    <section className='education section' id='education'>
      <div className="timeline__container container grid">
      <h2 className='section__title'>Education</h2>
      <Timeline experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;
