import React from 'react'
import BranchesPage from './BranchesPage'
import BranchCard from '../components/BranchCard.jsx';
import branches from '../assets/branchData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  return (
    <div className='contact-page page'>
        <section className='about component'>
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
      </section>
       
    </div>
  )
}
