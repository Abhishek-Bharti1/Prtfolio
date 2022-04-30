import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
<footer>
  <a href="#" className='footer__logo'>Abhishek Bharti</a>

  <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>

  </ul>

  <div className="footer__socials">
    <a href="https://www.facebook.com/rock.abhishek.940/" target="_blank"><FaFacebookF/></a>
    <a href="https://www.instagram.com/halfbloodprincc/" target="_blank"><FiInstagram/></a>
    <a href="#" target="_blank"><IoLogoTwitter/></a>
  </div>
  <div className="footer__copyright">
    <small>&copy; Abhishek_Bharti</small>
  </div>
</footer>
  )
}

export default Footer