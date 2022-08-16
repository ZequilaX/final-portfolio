import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials"
import LOGO from '../../assets/header-image.svg'

const Header = () => {
    return (
      <header id="header">
        <div className="container header__container">
          <div className="header__content">
            <div className="header__content-left">
              <h1>Hello.</h1>
              <h2>I'm <span>Sebastian</span></h2>
              <h3>Designer/Web Developer</h3>
              <div className="header__content-footer">
                <CTA />
                <HeaderSocials />
              </div>
            </div>
            <div className="header__content-right">
              <img src={LOGO} alt="" />
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header