import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abhishek-bharti-/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Abhishek-Bharti1" target="_blank"><FaGithub/></a>

        <a href="mailto:abhishekbharti91550@gmail.com" target="_blank"><CgMail/></a>

    </div>
  )
}

export default HeaderSocials