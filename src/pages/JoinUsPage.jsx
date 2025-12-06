import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function JoinUsPage() {
  return (
    <div className="joinus-page page">
      <HeroWithoutStrip page={{ title: "" }} />

      <section className="contact-details big-sections">
        
        <div className="info-card">
          <h3>Contact Us</h3>
          <p className="email-line">
            Email:&nbsp;
            <a href="mailto:sanskritggss@gmail.com">sanskritggss@gmail.com</a>
          </p>
          <p>
            Managed by:<br />
            <strong>Sri P.N. Ramachandra Iyer Trust</strong>
          </p>
        </div>

        <div className="info-card">
          <h3>Follow Us</h3>
          <div className="big-icons">
            <a href="https://www.facebook.com/sanskritggss" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.youtube.com/@GeethaGovindaSamskritaSangha" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com/sanskrit_ggss" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:sanskritggss@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://whatsapp.com/channel/0029VbATgxCFcowDkIDVwN2s">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

      </section>

      <BackToTop />
    </div>
  );
}
