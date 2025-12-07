import React from 'react';
import HeroStrip from '../assets/hero-strip-new.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__sanskrit hero__sanskrit--left sanskrit">
          <p>राम राम राम<br />राधे श्याम</p>
        </div>
        <p className='hero__shree sanskrit'>॥ श्रीः ॥</p>
        
        <h1 className="hero__title hero__title-strip sanskrit">गीत-गोविन्द-संस्कृत-सङ्घः <br /> <span className='english__title'>GEETA GOVINDA SAMSKRUTA SANGHA</span></h1>
        <div className="hero__sanskrit hero__sanskrit--right sanskrit">
          <p>सद्गुरो पाहि<br />परमदयालो पाहि</p>
        </div>
        
      </div>
      <div className='title__container'>
          <h1 className='hero__title hero__title--strip sanskrit'>गीत-गोविन्द-संस्कृत-सङ्घः</h1>
          <h1 className='hero__title hero__title--strip english__title'>GEETA GOVINDA SAMSKRUTA SANGHA</h1>
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
