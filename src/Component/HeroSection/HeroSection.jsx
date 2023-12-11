import React from 'react'
import './HeroSection.css'
import Heroimg from '../../assets/1673605267435.jpeg'

function HeroSection() {
  return (
    <div className='content'>
      <section className='main-section'>
        <div className="content-left">
            <p className='section-label'>Very proud to introduce</p>
            <h1 className='section-title'>HI, I'M NAIM! <br /> CREATIVE developer </h1>
            <p className="section-description">I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.
          </p>
          <div className="button-group">
            <a href="#start" className='download'>Download </a>
            <a href="#tour" className='watch-video'>Watch video </a>
          </div>

        </div>
        <div className="content-right">
            <div className="img-container">
                <img src={Heroimg} alt=""  className='section-img'/>
            </div>

        </div>
      </section>
    </div>
  )
}

export default HeroSection
