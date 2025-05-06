import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../assets/random_logo.jpg'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section footer__logo">
        <a href="/">
          <img src={LogoImg} alt="GGSS Logo" />
        </a>
      </div>



      <div className="footer__section">
        <h3>Quick Links</h3>
        <ul>
            <li>< a href='https://ggss.org.in/joinus'>Join Us</a></li>
            <li><a href="https://ggss.org.in/branches">Branches</a></li>
          <li><a href="https://class.ggss.org.in">Classes</a></li>
          <li><a href="https://pratibha.ggss.org.in">Pratibha</a></li>
          <li><a href="https://camp.ggss.org.in">Summer Camp</a></li>
          <li><a href="https://study.ggss.org.in">Study Material</a></li>
          <li><a href="https://guruvandanam.ggss.org.in">Guru Vandanam</a></li>
          <li><a href="https://maata.ggss.org.in">Our Maata</a></li>
          <li><a href="https://activities.ggss.org.in">Activities</a></li>
          <li><a href="https://donate.ggss.org.in">Donate</a></li>
        </ul>
      </div>

      <div className="footer__section">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:ggss.contact@gmail.com">ggss.contact@gmail.com</a></p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Managed by:<br /><strong>Sri P.N. Ramachandra Iyer Trust</strong></p>
      </div>

      <div className="footer__section">
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
    </footer>
  );
}
