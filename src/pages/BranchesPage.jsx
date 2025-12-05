import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

export default function BranchesPage() {
  return (
    <div className='branches-page page'>
      <HeroWithoutStrip page={{title: "Branches"}}/>
      return (
    <div className="branches-container">
      <h1 className="branches-title">Our Branches</h1>

      <div className="branches-grid">
        {branches.map((b, index) => (
          <BranchCard
            key={index}
            name={b.name}
            head={b.head}
            contact={b.contact}
            address={b.address}
            map={b.map}
          />
        ))}
      </div>
    </div>
  );
     
      <BackToTop />
    </div>
  )
}
