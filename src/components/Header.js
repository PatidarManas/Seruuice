import React from 'react';
import "./Header.scss";
import logo from '../img/l.png'
const Header = () => {
  return (
      <div className='main'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <button className="button" onClick={() => window.location.replace("/#home")}>Home</button>
        <button className="button" onClick={() => window.location.replace("/#service")}>Services</button>
        <button className="button" onClick={() => window.location.replace("/#price")}>Pricing</button>
        <button className="button"  onClick={() => window.location.replace("/#contact")}>Get in Touch</button>
      </div>
       </div>
    )
}

export default Header