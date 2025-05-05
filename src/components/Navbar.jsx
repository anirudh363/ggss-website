import React from 'react';
import Logo from '../assets/random_logo.jpg';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={Logo} alt='logo' />
        <h2>GGSS - गीत-गोविन्द-संस्कृत-सङ्घः</h2>
      </div>
      <div className='navbar__links'>
        <a href='#'>Home</a>
        <a href='#'>Classes</a>
        <a href='#'>Maata</a>
        <a href='#'>Guru Vandanam</a>
        <a href='#'>Activities</a>
        <a href='#'>Contact Us</a>
      </div>
      <div className='donate'>
        <a href='#'>Donate</a>
      </div>
    </div>
  );
}

