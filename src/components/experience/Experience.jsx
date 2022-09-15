import React from 'react'
import './experience.css'
import {SiHtml5} from 'react-icons/si'
import {ImCss3} from 'react-icons/im'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>MERN</h5>
      <h2>My Tech Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <SiHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <ImCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            
            <article className="experience__details">
              <SiJavascript className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <SiReact className='experience__details-icon'/>
              <h4>React JS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <SiNextdotjs className='experience__details-icon'/>
              <h4>Next JS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <SiTailwindcss className='experience__details-icon'/>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <SiBootstrap className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div> 
        </div>
        <div className="experience__backend">

        <h3>BackEnd Development</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <SiNodedotjs className='experience__details-icon'/>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <SiExpress className='experience__details-icon'/>
              <h4>Express JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            
            <article className="experience__details">
              <SiFirebase className='experience__details-icon'/>
              <h4>Firebase</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <SiMongodb className='experience__details-icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <GrMysql className='experience__details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience