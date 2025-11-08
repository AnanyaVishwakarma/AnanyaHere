import React from 'react';
import './AboutText.css';

const AboutText = () => {
return (
  <div className="about-text animate-fade-in-left">
    <p className="about-text__paragraph">
      I'm a dedicated software developer with a strong passion for building efficient, scalable, and maintainable applications. 
      My journey in software development began with a fascination for how technology solves real-world problems, 
      and it has grown into a mission to create impactful digital solutions that empower users and businesses alike.
    </p>
    <p className="about-text__paragraph">
      I enjoy working across the full stack — from crafting clean, responsive front-end interfaces 
      to designing robust back-end architectures. I constantly strive to write clean, well-documented code 
      and to stay updated with the latest technologies and development best practices.
    </p>
    <p className="about-text__paragraph">
      Beyond coding, I’m passionate about software design principles, system optimization, 
      and collaborating with teams to bring complex ideas to life. 
      I believe in continuous improvement, open communication, and the power of teamwork to deliver 
      reliable, high-quality software products.
    </p>
  </div>
);

};

export default AboutText;