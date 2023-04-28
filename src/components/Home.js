import React from 'react'
import "./Home.scss"
import Services from './Services'
import Pricing from './Pricing'
import Contact from './contact'
const Home = () => {
  
    return (
    <>
    <div className='home' id="home">
        <div className="left">
            <div className="l1">Create Magic with our touch&#129668;</div>
            <div className="l2">Get Your Buisness and Content to a level you think and it deseve to be...</div>
            <div className="but">

          <button   onClick={() => window.location.replace("/#contact")}>Contact us&#128222;</button>
          </div>
        </div>
        <div className="right">
        We are committed to delivering our best to help you realize your dream ideas. We are here to support you throughout your journey towards the destination you have always dreamt of. With our expertise and dedication, we will work hand-in-hand with you to turn your vision into reality. You can count on us to be your trusted partner in achieving your goals        </div>
        <a href="#service">
      <div className="scroll-down"></div>
    </a>
    </div>        
    <Services id='service'/>
    <Pricing id='price' />
    <Contact id='contact' />
    </>
  )
}

export default Home