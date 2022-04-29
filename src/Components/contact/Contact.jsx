import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eay6o4r', 'template_gs76hye', form.current, 'gGynJAfx2ZsLVfUJC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>
  <div className="container contact__container">
    <div className="contact__options">
      <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>abhishekbharti91550@gmail.com</h5>
<a href="mailto:abhishekbharti91550@gmail.com" target="_blank">Send a message</a>

      </article>

      <article className='contact__option'>
        <AiFillLinkedin className='contact__option-icon'/>
<h4>Linkedin</h4>
<h5>Abhishek Bharti</h5>
<a href="https://www.linkedin.com/in/abhishek-bharti-/" target="_blank">Send a message</a>

      </article>

      <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
<h4>WhatsApp</h4>
<h5>+919140397365</h5>
<a href="https://api.whatsapp.com/send?phone=9140397365" target="_blank">Send a message</a>
</article>
    </div>
{/* end of contact */}
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
</form>
  </div>
</section>
  )
}

export default Contact