import React from 'react';

export default function HeroWithoutStrip({ page }) {
  return (
    <section className="hero nostrip">
      <div className="hero__top">
        <div className="hero__sanskrit hero__sanskrit--left">
          <p>राम राम राम<br />राधे श्याम</p>
        </div>
        <p className='hero__shree'>श्रीः</p>
        <h1 className='hero__title'>{ page.title }</h1>
        <div className="hero__sanskrit hero__sanskrit--right">
          <p>सद्गुरो पाहि<br />परमदयालो पाहि</p>
        </div>
      </div>
    </section>
  );
}
