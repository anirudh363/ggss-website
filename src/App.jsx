import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Divider from './components/Divider';
import Pratibha from './components/Pratibha';
import ShlokaCards from './components/ShlokaCards'
import Camp from './components/Camp';
import Annual from './components/Annual';
import Guru from './components/Guru';
import Activities from './components/Activities';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Popup from './components/Popup';

function App() {

  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => setShowPopup(false);

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      {/* <Divider />
      <ShlokaCards /> */}
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
      <Footer />
      <BackToTop />

      <Popup
        display={showPopup}
        onClose={closePopup}
      />

    </div>
  )
}

export default App
