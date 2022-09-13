import React from 'react';
import CV from '../../assets/Arnav Gupta Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download>Download CV</a>
      <a href="#contact">Connect With Me</a>
    </div>
  );
};

export default CTA;
