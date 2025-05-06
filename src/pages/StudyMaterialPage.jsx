import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

export default function StudyMaterialPage() {
  return (
    <div className='material-page page'>
      <HeroWithoutStrip page={{title: "Study Material"}}/>
      <p>Page under development...राम राम राम</p>
      
      <BackToTop />
    </div>
  )
}
