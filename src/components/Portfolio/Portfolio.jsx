import React from 'react'
import './portfolio.css'
import WIRE from '../../assets/wire.png'
import IMAGE1 from '../../assets/portfolio-1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'
import {RiLogoutCircleLine} from '../../../node_modules/react-icons/ri'

const Portfolio = () => {
  
    return (
      <section id="portfolio">
        <div className="container work__section">
          <div className="work__container">
            <div className="work__left-container">
              <div className="work__left-inside">
                <div className="tv__screen">
                  <div className="tv__screen-middle" id="portfolio-image"></div>
                </div>
                <div className="tv__bottom">
                  <div className="tv__knob" id="tv__knob-left">
                    <RiLogoutCircleLine />
                  </div>
                  <div className="tv__slot"></div>
                  <div className="tv__knob" id="tv__knob-right">
                    <RiLogoutCircleLine />
                  </div>
                </div>
              </div>
              <img src={WIRE} id="tv-wire" alt="" />
            </div>
            <div className="work__right-container">
              <div className="work__right-header">
                <h1>Projects</h1>
                <h5 id="project-count">2</h5>
              </div>
              <hr className="work__right-seperator"></hr>
              <ul id="project__list-container">
                <li className="list__object">
                  <a href="https://zequilax.github.io/Calculator-V2/" target="_blank" rel="noreferrer" onmouseover="changeImage1();knobPositionOne()" onmouseleave="resetState()">
                    <div className="projects__row">
                      <div className="projects__row-left">
                        <h4 className="projects__row-text">Dark Mode Calculator</h4>
                      </div>
                      <div className="projects__row-right">
                        <h4 className="projects__row-text">JavaScript</h4>
                      </div>
                    </div>
                    <img src={IMAGE1} className="portfolio__preview" alt=""/>
                  </a>
                  <div className="portfolio__buttons-container">
                    <a href="https://zequilax.github.io/Calculator-V2/" target="__blank" className="portfolio__button portfolio__button-preview">Live Preview</a>
                    <a href="https://github.com/ZequilaX/Calculator-V2" target="__blank" className="portfolio__button portfolio__button-source">GitHub</a>
                  </div>
                </li>
                  <li className="list__object">
                    <a href="https://zequilax.github.io/Calculator-V2/" target="_blank" rel="noreferrer" onmouseover="changeImage2();knobPositionTwo()" onmouseleave="resetState()">
                      <div className="projects__row">
                        <div className="projects__row-left">
                          <h4 className="projects__row-text">Weather App</h4>
                        </div>
                        <div className="projects__row-right">
                          <h4 className="projects__row-text">ReactJS</h4>
                        </div>
                      </div>
                      <img src={IMAGE2} className="portfolio__preview" alt=""/>
                    </a>
                    <div className="portfolio__buttons-container">
                    <a href="https://zequilax.github.io/Calculator-V2/" target="__blank" className="portfolio__button portfolio__button-preview">Live Preview</a>
                    <a href="https://github.com/ZequilaX/Calculator-V2" target="__blank" className="portfolio__button portfolio__button-source">GitHub</a>
                  </div>
                  </li>
                  
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Portfolio