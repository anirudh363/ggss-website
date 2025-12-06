import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../assets/logo.jpg'; 
import { Link } from 'react-router-dom';

export default function Footer() {



  return (
    <footer className="footer">
      <div className="footer__section footer__logo">
        <Link to="/" >
          <img src={LogoImg} alt="GGSS Logo" />
        </Link>
      </div>



      <div className="footer__section">
        <h3>Quick Links</h3>
        <ul>
            <li>< Link to='/joinus'>Join Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
            <li><Link to="/branches">Branches</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/pratibha">Pratibha</Link></li>
          <li><Link to="/summercamp">Summer Camp</Link></li>
          <li><Link to="/studymaterial">Study Material</Link></li>
          <li><Link to="/guruvandanam">Guru Vandanam</Link></li>
          <li><Link to="/maata">Our Maata</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/annualday">Annual Day</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </div>

      <div className="footer__section">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:sanskritggss@gmail.com">sanskritggss@gmail.com</a></p>
        
        <p>Managed by:<br /><strong>Sri P.N. Ramachandra Iyer Trust</strong></p>
      </div>

      <div className="footer__section">
        <h3>Follow Us</h3>
        <div className="footer__icons">
          <a href="https://www.facebook.com/sanskritggss" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/@GeethaGovindaSamskritaSangha" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.instagram.com/sanskrit_ggss" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:ggss.contact@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href='https://whatsapp.com/channel/0029VbATgxCFcowDkIDVwN2s'>
                          <FontAwesomeIcon icon={faWhatsapp} />
                          </a>
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Geetha Govinda Samskrita Sangha. All rights reserved.
        </p>
      </div>


      
    </footer>
  );
}
