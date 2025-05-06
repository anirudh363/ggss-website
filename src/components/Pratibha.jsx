import React from 'react';
import PratibhaImg from '../assets/pratibha.jpg'; 
import { Link } from 'react-router-dom';

export default function Pratibha() {
  return (
    <div className='pratibha component'>
        <div className="pratibha__image">
        <img src={PratibhaImg} alt="Pratibha Image" />
      </div>
      <div className="pratibha__text">
      <span className='subheading'>Pratibha Competitions</span>
        <ul>
            <li>Pratibha is an annual inter-school talent festival organized by Geetha Govinda Samskrita Sangha every June in Bangalore.</li>
            <li>Started in 2000, it provides a platform for school children to showcase their talent in Sanskrit and Indian cultural events.</li>
            <li>The 10th edition in 2009 expanded to Sringeri, Mumbai, and Chennai, with ~1000 student participants.</li>
            <li>Winners receive valuable books like the Valmiki Ramayana, Srimad Bhagavatam, Bhagavadgita, and more.</li>
            <li>Open to students of classes 2 to 10 from schools across Bangalore.</li>
        </ul>
        <div className="know_more">
        <Link to="/pratibha">Know More</Link>
      </div>
      </div>
    </div>
  )
}
