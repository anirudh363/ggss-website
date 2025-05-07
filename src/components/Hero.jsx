import React from 'react';
import HeroStrip from '../assets/hero-strip.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__sanskrit hero__sanskrit--left">
          <p>राम राम राम<br />राधे श्याम</p>
        </div>
        <p className='hero__shree'>श्रीः</p>
        
        <h1 className="hero__title hero__title-strip">गीत-गोविन्द-संस्कृत-सङ्घः <br /> <span className='english__title'>GEETHA GOVINDA SAMSKRUTA SANGHA</span></h1>
        <div className="hero__sanskrit hero__sanskrit--right">
          <p>सद्गुरो पाहि<br />परमदयालो पाहि</p>
        </div>
        
      </div>
      <div className='title__container'>
          <h1 className='hero__title hero__title--strip'>गीत-गोविन्द-संस्कृत-सङ्घः</h1>
          <h1 className='hero__title hero__title--strip english__title'>GEETHA GOVINDA SAMSKRUTA SANGHA</h1>
        </div>

      <div className="hero__strip-container">
        <div className="hero__strip">
          <img src={HeroStrip} alt="Gurus and Gods" />
          <img src={HeroStrip} alt="Gurus and Gods duplicate" />
        </div>
      </div>
    </section>
  );
}
