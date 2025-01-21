import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import contacting from '../../assets/contact.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
   
   <nav className="navbar">
    <img src={logo} alt=""  className='logo'/>
    <div className="destopMenu">
    <Link className="desktopMenuListItem">Home</Link>
    <Link className="desktopMenuListItem">Clients</Link>
    <Link className="desktopMenuListItem">Portfolio</Link>
    <Link className="desktopMenuListItem">About</Link>

    </div>
    <button className="desktopMenuBtn">
        <img src={contacting} alt="" className="destopMenuImg" />
        Contact Me
    </button>
   </nav>
  )
}

export default Navbar
