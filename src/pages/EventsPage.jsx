import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';
import Annual from "../components/Annual.jsx"
import Guru from "../components/Guru.jsx"

export default function EventsPage() {
  return (
    <div className='activities-page page'>
      <HeroWithoutStrip page={{title: "Events and Gallery"}} />
      {/* <p>Page under development...राम राम राम</p> */}
      <Annual />
      
      <BackToTop />
    </div>
  )
}