import React from 'react'
import './portfolio.css'
import WIRE from '../../assets/wire.png'
import IMAGE1 from '../../assets/portfolio-1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'

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
                    <i className="fa-solid fa-circle-notch" id="knob__circle"></i>
                    <i className="fa-solid fa-grip-lines" id="knob__arrow"></i>
                  </div>
                  <div className="tv__slot"></div>
                  <div className="tv__knob" id="tv__knob-right">
                    <i className="fa-solid fa-circle-notch" id="knob__circle"></i>
                    <i className="fa-solid fa-grip-lines" id="knob__arrow"></i>
                  </div>
                </div>
              </div>
              <img src={WIRE} id="tv-wire" />
            </div>
            <div className="work__right-container">
              <div className="work__right-header">
                <h1>Projects</h1>
                <h5 id="project-count"></h5>
              </div>
              <hr className="work__right-seperator"></hr>
              <ul id="project__list-container">
                <li className="list__object">
                  <a href="#" target="_blank" onmouseover="changeImage1();knobPositionOne()" onmouseleave="resetState()">
                    <div className="projects__row">
                      <div className="projects__row-left">
                        <h4 className="projects__row-text">Dark Mode Calculator</h4>
                      </div>
                      <div className="projects__row-right">
                        <h4 className="projects__row-text">JavaScript</h4>
                      </div>
                    </div>
                    <img src={IMAGE1} className="portfolio__preview"/>
                  </a>
                  <div className="portfolio__buttons-container">
                    <a href="https://zequilax.github.io/Calculator-V2/" target="__blank" className="portfolio__button portfolio__button-preview">Live Preview</a>
                    <a href="https://github.com/ZequilaX/Calculator-V2" target="__blank" className="portfolio__button portfolio__button-source">GitHub</a>
                  </div>
                </li>
                  <li className="list__object">
                    <a href="#" target="_blank" onmouseover="changeImage2();knobPositionTwo()" onmouseleave="resetState()">
                      <div className="projects__row">
                        <div className="projects__row-left">
                          <h4 className="projects__row-text">Weather App</h4>
                        </div>
                        <div className="projects__row-right">
                          <h4 className="projects__row-text">ReactJS</h4>
                        </div>
                      </div>
                      <img src={IMAGE2} className="portfolio__preview"/>
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