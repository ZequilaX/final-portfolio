import React from 'react'
import './contact.css'
import {BsLinkedin} from '../../../node_modules/react-icons/bs'
import {BsGithub} from '../../../node_modules/react-icons/bs'
import {BsInstagram} from '../../../node_modules/react-icons/bs'
import {MdMail} from '../../../node_modules/react-icons/md'

const Contact = () => {
    return (
      <section id="contact">
        <div class="container contact__section">
            <div class="contact__header">
              <h1>LET'S GET IN TOUCH</h1>
              <hr />
            </div>
            <div class="contact__socials">
              <a href="https://github.com/ZequilaX" target="_blank" rel="noreferrer">
                <BsGithub/>
                <h5 class="social__icon-text">GitHub</h5>
              </a>
              <a href="https://www.instagram.com/cyanide.digital/" target="_blank" rel="noreferrer">
                <BsInstagram/>
                <h5 class="social__icon-text">Instagram</h5>
              </a>
              <a href="https://www.linkedin.com/in/sebastian-collison-465601207/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
                <h5 class="social__icon-text">LinkedIn</h5>
              </a>
              <a href="mailto:sebcollison@gmail.com" target="_blank" rel="noreferrer">
                <MdMail/>
                <h5 class="social__icon-text">Mail</h5>
              </a>
            </div>
            <div class="contact__body">
              <div class="contact__body-left">
                <form class="form__body">
                  <div class="form__body-top">
                    <input type="text" name="firstName" placeholder="Your first name" class="form__item" id="first-name" required />
                    <input type="text" name="secondName" placeholder="Your last name" class="form__item" id="last-name" required />
                    <input type="email" name="email" placeholder="Your email address" class="form__item form__item-long" id="email-address" required />
                      
                    <input type="text" name="subject" placeholder="Subject" class="form__item form__item-long" id="message-subject" required />
                    <textarea name="message" placeholder="Message" class="form__item-textarea" rows="10" id="message-content" required />
                  </div>
                  <div class="form__footer">
                    <input type="submit" value="SEND MESSAGE" class="form-submit" id="submit-button" />
                    <div class="form__footer-line"></div>
                    </div>
                </form>
              </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default Contact