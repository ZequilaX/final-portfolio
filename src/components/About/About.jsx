import React from 'react'
import './about.css'
import whiteSplash from '../../assets/white-splash.png'
import lightningSpark from '../../assets/lightning-spark.png'
import ME from '../../assets/me.png'

const About = () => {
    return (
      <section id="about">
        <img src={whiteSplash} id="about__splash-image" alt="" />
        <div className="container about__container">
          <div className="about__container">
            <div className="about__text-content">
              <h2>ABOUT</h2>
              <div className="decoration-line"></div>
              <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum elit felis, eu vestibulum dui cursus in. Nullam ipsum quam, ullamcorper sed diam nec, rhoncus cursus nibh. In mi odio, lacinia ac iaculis eu, rhoncus a ipsum. In hac habitasse platea dictumst. Aliquam erat volutpat. Vivamus commodo velit justo, eu egestas sem consectetur ac. Cras vehicula tellus a sagittis laoreet.</p><br/>
              <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum elit felis, eu vestibulum dui cursus in. Nullam ipsum quam, ullamcorper sed diam nec, rhoncus cursus nibh. In mi odio, lacinia ac iaculis eu, rhoncus a ipsum. In hac habitasse platea dictumst. Aliquam erat volutpat. Vivamus commodo velit justo, eu egestas sem consectetur ac. Cras vehicula tellus a sagittis laoreet.</p><br/>
              <div className="button__container">
                <button className="btn btn-secondary">CIRRICULUM VITAE</button>
                <div className="decoration-line-long-white"></div>
              </div>
            </div>
            <div className="about-image-container">
              <img src={lightningSpark} id="about__lightning-image-top" alt=""/>
              <img src={ME} id="about-image" alt=""/>
              <img src={lightningSpark} id="about__lightning-image-bottom" alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About