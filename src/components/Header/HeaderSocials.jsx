import React from 'react'
import {BsLinkedin} from '../../../node_modules/react-icons/bs'
import {BsGithub} from '../../../node_modules/react-icons/bs'
import {BsInstagram} from '../../../node_modules/react-icons/bs'
import {MdMail} from '../../../node_modules/react-icons/md'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/ZequilaX" target="_blank" rel="noreferrer">
                <BsGithub/>
            </a>
            <a href="https://www.instagram.com/cyanide.digital/" target="_blank" rel="noreferrer">
                <BsInstagram/>
            </a>
            <a href="https://www.linkedin.com/in/sebastian-collison-465601207/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
            </a>
            <a href="mailto:sebcollison@gmail.com" target="_blank" rel="noreferrer">
                <MdMail/>
            </a>
      </div>
    )
  }
  
  export default HeaderSocials