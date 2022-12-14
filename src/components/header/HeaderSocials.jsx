import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrMail } from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/arnavgptaa" target="_blank"><BsLinkedin size={20}/></a>
        <a href="https://www.github.com/arnavgptaa" target="_blank"><BsGithub size={20}/></a>
        <a href="mailto:arnavgpta@gmail.com" target="_blank"><GrMail size={20}/></a>
    </div>
  )
}

export default HeaderSocials