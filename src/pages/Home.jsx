import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import Divider from '../components/Divider';
import Pratibha from '../components/Pratibha';
import ShlokaCards from '../components/ShlokaCards'
import Camp from '../components/Camp';
import Annual from '../components/Annual';
import Guru from '../components/Guru';
import Activities from '../components/Activities';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Popup from '../components/Popup';
import Calendar from '../components/Calendar';

export default function Home() {

    // Change to true to show the popup
    const [showPopup, setShowPopup] = useState(false);
    
    const closePopup = () => setShowPopup(false);

  return (
    <div>
        <div className='home'>
              <Hero />
              <Divider />
              <Calendar />
              <Divider />
              <About />
              <Divider /> 
              <ShlokaCards />
              <Divider />
              <Classes />
              <Divider />
              <Pratibha />
              <Divider />
              <Camp />
              <Divider />
              <Annual />
              <Divider />
              <Guru />
              <Divider />
              <Activities />
              <Divider />
              <BackToTop />
        
              <Popup
                display={showPopup}
                onClose={closePopup}
              />
        
            </div>
    </div>
  )
}
