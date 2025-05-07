import React from 'react';

export default function HeroWithoutStrip({ page }) {
  return (
    <section className="hero nostrip">
      <div className="hero__top">
        
        <p className='hero__shree'>श्रीः</p>
        <h1 className='hero__title'>{ page.title }</h1>
        
      </div>
    </section>
  );
}
