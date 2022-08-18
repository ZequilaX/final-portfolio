import React from 'react'
import './skills.css'
import linesHorizontal from '../../assets/lines-horizontal.png'
import linesVertical from '../../assets/lines-vertical.png'
import {BiCodeAlt} from '../../../node_modules/react-icons/bi'
import {GiPaintRoller} from '../../../node_modules/react-icons/gi'

const Skills = () => {
    return (
        <section id="skills">
            <div className="container skills-container">
            <div className="skills__container-content">
                <div className="skills__title">
                    <h1>My Skills</h1>
                </div>
                <div className="skill-card-container">
                    <div className="skill__card-line"></div>
                    <div className="skill-card">
                        <div className="skill-card-top">
                            <h2>FRONTEND</h2>
                            <BiCodeAlt />
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage html-animation percent-97">
                                <h5>HTML</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage css-animation percent-93">
                                <h5>CSS</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage bootstrap-animation percent-85">
                                <h5>BOOTSRAP</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage react-animation percent-75">
                                <h5>REACT</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage javascript-animation percent-70">
                                <h5>JAVASCRIPT</h5>
                            </span>
                        </div>
                        <div className="decoration__line-slider"></div>
                        <div className="decoration__line-slider-short"></div>
                    </div>
                    <div className="decoration__pattern-container">

                        <div className="decoration__pattern-container">
                            <div className="decoration__pattern-container">
                                <img src={linesHorizontal} alt="" />
                            </div>
                            <div className="decoration__pattern-container">
                                <img src={linesVertical} className="decoration-vertical" alt="" />
                            </div>
                            <div className="decoration__pattern-container">
                                <img src={linesHorizontal} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="skill-card">
                        <div className="skill-card-top">
                            <h2>DESIGN</h2>
                            <GiPaintRoller />
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage photoshop-animation percent-98">
                                <h5>PHOTOSHOP</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage figma-animation percent-90">
                                <h5>FIGMA</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage illustrator-animation percent-80">
                                <h5>ILLUSTRATOR</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage cinema4d-animation percent-70">
                                <h5>CINEMA 4D</h5>
                            </span>
                        </div>
                        <div className="skill-progress-slider">
                            <span className="skill__progress-percentage afterEffects-animation percent-60">
                                <h5>AFTER EFFECTS</h5>
                            </span>
                        </div>
                        <div className="decoration__line-slider"></div>
                        <div className="decoration__line-slider-short"></div>
                    </div>
                    <div className="skill__card-line"></div>
                </div>
            </div>
        </div>
        </section>
    )
  }
  
  export default Skills