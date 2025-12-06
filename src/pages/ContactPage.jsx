import React from 'react'
import BranchCard from '../components/BranchCard.jsx';
import branches from '../assets/branchData.json';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

export default function ContactPage() {
  return (
    <div className='contact-page page'>
      <HeroWithoutStrip page={{title: "Our Branches"}}/>
      <section className='about component'>
        <div className="branches-container">

          <div className="branches-grid">
            {branches.map((b, index) => (
              <BranchCard
                key={index}
                name={b.name}
                year={b.year}
                description={b.description}
                head={b.head}
                contact={b.contact}
                venue={b.venue}
                timings={b.timings}
                address={b.address}
                map={b.map}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
