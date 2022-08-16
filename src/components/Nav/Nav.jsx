import React from 'react'
import './nav.css'
import {FiHome} from '../../../node_modules/react-icons/fi'
import {CgProfile} from '../../../node_modules/react-icons/cg'
import {TbSchool} from '../../../node_modules/react-icons/tb'
import {BsBook} from '../../../node_modules/react-icons/bs'
import {AiOutlinePhone} from '../../../node_modules/react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav("about")} className={activeNav === "about" ? "active" : ""}><CgProfile/></a>
      <a href="#experience" onClick={() => setActiveNav("experience")} className={activeNav === "experience" ? "active" : ""}><TbSchool/></a>
      <a href="#portfolio" onClick={() => setActiveNav("portfolio")} className={activeNav === "portfolio" ? "active" : ""}><BsBook/></a>
      <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === "contact" ? "active" : ""}><AiOutlinePhone/></a>
    </nav>
  )
}
  
  export default Nav