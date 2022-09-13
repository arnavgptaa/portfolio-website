import React from 'react';
import CV from '../../assets/Arnav Gupta Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Connect With Me</a>
    </div>
  );
};

export default CTA;
