import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

export default function ActivitiesPage() {
  return (
    <div className='activities-page page'>
      <HeroWithoutStrip page={{title: "Spiritual Activities"}} />
      <p>Page under development...राम राम राम</p>
      
      <BackToTop />
    </div>
  )
}
