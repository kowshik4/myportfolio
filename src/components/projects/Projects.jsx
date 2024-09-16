import React from 'react';
import './projects.css';


const projects = [
    {
      title: 'Facial Emotion Recognition',
      description: 'Given a human face image, detecting the emotion expressed in the face. Implemented using Machine Learning, Deep Learning, HaarCascade OpenCV',
      technologies: ['Deep Learning', 'Neural Networks', 'OpenCV', 'Tensorflow', 'Python'],
      link: 'https://github.com/kowshik4/FacialEmotionRecognition',
    },
    {
      title: 'Vehicle License Plate Recognition',
      description: 'Created a project capable of license plate detection, employing computer vision techniques to extract the license plate number.',
      technologies: ['Deep Learning', 'Computer Vision', 'Python', 'OpenCV'],
      link: 'https://github.com/kowshik4/License_plates',
    },
    {
      title: 'Techtrade',
      description: 'Developed a website for trading items like phones,laptops and other gadgets among users. Implemented using Javascript, nodeJS, ExpressJs and mongodb.',
      technologies: ['JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
      link: 'https://github.com/kowshik4/Techtrade',
    },
    // Add more projects as needed
  ];


  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
      <h3>{project.title}</h3></a><br />
      <br></br><p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p><br />
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );

const Projects = () => {
    return (
        <section className='projects section' id='projects'>      
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>Technology</span>
            <div className="projects__container container grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}                                
            </div>
        </section>
    );
    };

export default Projects;