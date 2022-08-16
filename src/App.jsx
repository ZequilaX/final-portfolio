import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Playlist from './components/Playlist/Playlist'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Portfolio />
        <Playlist />
        <Contact />
        <Footer />
      </>
    )
  }
  
  export default App