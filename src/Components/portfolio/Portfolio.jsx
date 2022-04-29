import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me-p.png'
import IMG2 from '../../assets/me-pp.png'


const Portfolio = () => {
  return (
 <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>
   <div className="container portfolio__container">
     <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG1} alt="Dunzo" />
       </div>
         <h3>dunzoclone</h3>
         <div className="portfolio__item-cta">
                    <a href="https://github.com/Abhishek-Bharti1/Dunzo_clone" className='btn' target='_blank'>Git Hub</a>
         <a href="https://dunzoclonebackend.netlify.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

     </article>

     <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG2} alt="BestBuy" />
       </div>
         <h3>bestbuyclone</h3>
         <div className="portfolio__item-cta">
           <a href="https://github.com/Abhishek-Bharti1/" className='btn' target='_blank'>Git Hub</a>
         <a href="https://comforting-fairy-52b33b.netlify.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
         
     </article>

     <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG1} alt="Dunzo" />
       </div>
         <h3>dunzoclone-backend</h3>
         
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