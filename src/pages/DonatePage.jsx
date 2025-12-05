import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';
import UPI from '../assets/upi.png';
import BHIM from '../assets/bhim.png';

export default function DonatePage() {
  return (
    <div className='donate-page page'>
      <HeroWithoutStrip page={{title: "Donate"}} />
      
      <section className='about component'>
       
              <div className="about__text">
                <p>Your contribution helps Geetha Govinda Samskrita Sangha continue its mission of nurturing Sanskrit learning and cultural values in children across generations. Each donation supports teaching materials, examination preparation, and the growing network of branches inspired by Maata Smt. Ananthalakshmi Natarajan. We are grateful for your generosity and support.</p>
              </div>

              <div className="about__image">
              <img src={UPI} alt="UPI QR" />
              <br />
              <img src={BHIM} alt="" /> 
              <br />
              <p> Digital Rupee Accepted here</p>
            </div>

      </section>
      
      <BackToTop />
    </div>
  )
}
