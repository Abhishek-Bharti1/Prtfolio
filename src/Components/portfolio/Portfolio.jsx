import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me-p.png'
import Img3 from "../../assets/img3.png"
import Img4 from "../../assets/img4.png"

const Portfolio = () => {
  return (
 <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>
   <div className="container portfolio__container">

   <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={Img4} alt="snapchat" />
       </div>
         <h3>Snapchat Clone</h3>
         <h5 className='h62'>Snapchat.<br />

Tech Stack : HTML | CSS | Javascript | React.js | Redux.js | Firebase
 </h5>
         <div className="portfolio__item-cta">
           <a href="https://github.com/Abhishek-Bharti1/snapchat-clone" className='btn' target='_blank'>Git Hub</a>
         <a href="https://snapchat-clone-f9bc5.web.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
         
     </article>


     <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={Img3} alt="BestBuy" />
       </div>
         <h3>J.Crew</h3>
         <h5 className='h61'>J.Crew is one of the most popular E-commerce website in USA . <br />
         Tech Stack : React.js | CSS | Vercel
         
         </h5>
         <div className="portfolio__item-cta">
           <a href="https://github.com/Abhishek-Bharti1/JCrew-Project" className='btn' target='_blank'>Git Hub</a>
         <a href="https://jcrew-in-clone.vercel.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
         
     </article>

     <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG1} alt="Dunzo" />
       </div>
         <h3>dunzoclone-backend</h3>
         <h5 className='h62'>Dunzo is an Indian company that delivers groceries and essentials, fruits and vegetables, meat, pet supplies, food, and medicines in major cities.<br />

Tech Stack : HTML | CSS | Javascript | Express.js | Node.js | MongoDB
 </h5>
         <div className="portfolio__item-cta">
           <a href="https://github.com/Abhishek-Bharti1/Dunzo_clone" className='btn' target='_blank'>Git Hub</a>
         <a href="https://dunzoclonebackend.netlify.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
         
     </article>


  
   </div>
 </section>

  )
}

export default Portfolio