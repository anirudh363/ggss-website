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
       <section className='contact-details'>
        <div className="component">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:sanskritggss@gmail.com">sanskritggss@gmail.com</a></p>
           
              <p>Managed by:<br /><strong>Sri P.N. Ramachandra Iyer Trust</strong></p>
            </div>
      
            <div className="component">
              <h3>Follow Us</h3>
              <div className="footer__icons">
                <a href="https://facebook.com/ggss" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://youtube.com/@ggss" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://instagram.com/ggss" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="mailto:ggss.contact@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <p className="footer__copyright">
                © {new Date().getFullYear()} Geetha Govinda Samskrita Sangha. All rights reserved.
              </p>
            </div>
       </section>
    </div>
  )
}
