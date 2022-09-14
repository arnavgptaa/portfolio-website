import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><MdWorkOutline/></a>
      <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav