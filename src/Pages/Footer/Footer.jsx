import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo1.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer-logo">
        <img src={Logo} alt="footer logo" />
        <h1>SNews</h1>
        </div>
        <div className="footer-navigation">
            <ul>
                <li>Navigation</li>
                <li> <NavLink to={"/search"}>Search</NavLink>  </li>
                <li> <NavLink to={"/news"}>  Category</NavLink></li>
                <li> <NavLink to={"/contact"}>  Contact</NavLink></li>
                <li> <NavLink to={"/faq"}>  Faq</NavLink></li>
            </ul>
        </div>
        <div className="footer-last">
            <ul>
                <li>Company</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-icons">
            <h1>Social Media</h1>
            <div className="social-icons">
            <a href='' target='_blank'> <AiOutlineInstagram/> </a>
            <a href='' target='_blank'> <FaLinkedinIn/> </a>
            <a href='' target='_blank'> <FiGithub/></a>
            </div>
        </div>
    </section>
  )
}

export default Footer