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
                <p>
                  We are a Non-Profit Organization established
by our Maata. Late Gurupadadhooli Maata Vid. Ananthalakshmi Natarajan in 1976 with the
benign blessings of Jagadguru Ananthashri Vibhushitha Shri Abhinava
Vidyateertha Jyeshtha Mahasannidhanam of Dakshinamnaya Shringeri Sharada
Peetham to impart Samskriti-Samskritam, and inculcate Eternal Bharatiya
Cultural Values. Over the past Five Decades, GGSS has trained thousands of
Students in Samskritam, Stotras, Bhagavadgeetha, Geetha-Govindam,
Krishnaleela Tarangini and the like, thus creating Cultural and Dharmic
consciousness in the Society. GGSS is one of the earliest Organizations with a
unique pedagogy of imparting Ancient Indian Knowledge and Timeless Wisdom
which has inspired and given rise to several other Institutions. The GGSS family
continues to create leaders across various branches within India and Abroad. With
immense gratitude to the Tapas of our revered Guru, GGSS is celebrating its
Suvarna Mahotsava (Golden Jubilee), under the auspices of Sri P.N. Ramachandra
Iyer Trust (Founded by Maata) to espouse various noble, public causes. Your
contribution will go a long way to continue this Seva.
                </p>
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
