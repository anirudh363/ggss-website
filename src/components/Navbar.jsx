import React from 'react';
import Logo from '../assets/logo.jpg';

export default function Navbar() {

  const scrollToFooter = (e) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the footer
  };

  const backToTop = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  };

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <a href='/' onClick={backToTop}>
          <img src={Logo} alt='GGSS Logo' />
        </a>
        <h2>GGSS - गीत-गोविन्द-संस्कृत-सङ्घः</h2>
      </div>
      <div className='navbar__links'>
        <a href='#'>Home</a>
        <a href='#'>Classes</a>
        <a href='#'>Maata</a>
        <a href='#'>Guru Vandanam</a>
        <a href='#'>Activities</a>
        <a href='' onClick={scrollToFooter}>Contact Us</a>
      </div>
      <div className='donate'>
        <a href='#'>Donate</a>
      </div>
    </div>
  );
}

