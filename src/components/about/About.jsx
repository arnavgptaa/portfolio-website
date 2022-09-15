import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
import {MdOutlineWork} from 'react-icons/md';
import {MdOutlineWeb} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <MdOutlineWork className="about__icon" size={27} />
              <h5>Work <br /> Experience</h5>
            </article>

            <article className="about__card">
              <TiGroup className="about__icon" size={28} />
              <h5>Volunteer <br /> Experience</h5>
            </article>

            <article className="about__card">
              <MdOutlineWeb className="about__icon" size={28} />
              <h5>Projects <br /> Undertaken</h5>
            </article>
          </div>

          
          <p>
            I am a Full Stack web developer with 10+ projects of building, retaining and deploying multi-page websites. I have developed websites from front to backend with the use of React, Node.Js, Express.Js, JavaScript, and HTML.
          </p>

          <p>
            Also improved consumer satisfaction and finished web site goals via creating site structure, navigation, page optimization, and photo integration. I can adapt onto any skillset swiftly, making myself flexible upon any tech stack. A passionate, diligent developer who desires to grow consistently.
          </p>

          <p>
            Since I am an innovative individual, I attempted my luck in Frontend Development, and my interest boosted in it, then progressively I took the command on backend development as well.
          </p>

          <a href="#contact" className="btn btn-primary"> Let's Talk </a>

        </div>

      </div>
    </section>
  );
};

export default About;
