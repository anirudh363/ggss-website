import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

export default function MaataPage() {
  return (
    <div className='maata-page page'>
      <HeroWithoutStrip page={{title: "Our Guru - Maata"}}/>
      <p>Page under development...राम राम राम</p>
      <BackToTop />
    </div>
  )
}
