import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

export default function ClassesPage() {
  return (
    <div className='classes-page page'>
      <HeroWithoutStrip page={{title: "Sanskrit Classes and More"}}/>
      <p>Page under development...राम राम राम</p>
      
      <BackToTop />
    </div>
  )
}
