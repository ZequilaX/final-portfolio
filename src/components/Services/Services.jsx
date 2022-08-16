import React from 'react'
import './services.css'
import {TbGridDots} from '../../../node_modules/react-icons/tb'
import {BiCodeAlt} from '../../../node_modules/react-icons/bi'
import {MdOutlineDesignServices} from '../../../node_modules/react-icons/md'


const Services = () => {
    return (
      <section id="services">
        <div className="container services__section">
          <div className="services__container">
            <div className="services__header">
              <h2>WHAT I DO</h2>
              <div className="decoration-line" id="services__line"></div>
            </div>
            <div className="services__cards">
              <div className="service__card">
                <div className="card__circle">
                  <BiCodeAlt />
                </div>
                <div className="service__card-text">
                  <h3>Web Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum elit felis, eu vestibulum dui cursus in. Nullam ipsum quam, ullamcorper sed diam nec, rhoncus cursus nibh.</p>
                </div>
              </div>
                <div className="service__card">
                  <div className="card__circle">
                    <TbGridDots />
                  </div>
                  <div className="service__card-text">
                      <h3>UI/UX Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum elit felis, eu vestibulum dui cursus in. Nullam ipsum quam, ullamcorper sed diam nec, rhoncus cursus nibh.</p>
                  </div>
                </div>
                <div className="service__card">
                  <div className="card__circle">
                    <MdOutlineDesignServices />
                  </div>
                  <div className="service__card-text">
                      <h3>Graphic Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum elit felis, eu vestibulum dui cursus in. Nullam ipsum quam, ullamcorper sed diam nec, rhoncus cursus nibh.</p>
                  </div>
                </div>
            </div>
            <a href="#contact" className="btn btn-primary btn-primary-white">Contact Me</a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Services