import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault(); // prevent navigation if already on home
      window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
    } else {
      navigate('/'); // navigate to home if on another page
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <img src={Logo} alt='GGSS Logo' />
        </Link>
        <h2>GGSS - गीत-गोविन्द-संस्कृत-सङ्घः</h2>
      </div>
      <div className='navbar__links'>
        <a href="/" onClick={handleHomeClick} className={location.pathname === '/' ? "active" : ""}>Home</a>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
        <NavLink to="/maata" className={({ isActive }) => isActive ? "active" : ""}>Maata</NavLink>
        <NavLink to="/classes" className={({ isActive }) => isActive ? "active" : ""}>Classes</NavLink>
        <NavLink to="/guruvandanam" className={({ isActive }) => isActive ? "active" : ""}>Guru Vandanam</NavLink>
        <NavLink to="/branches" className={({ isActive }) => isActive ? "active" : ""}>Branches</NavLink>
        <NavLink to="/activities" className={({ isActive }) => isActive ? "active" : ""}>Activities</NavLink>
        <Link onClick={scrollToFooter}>Contact Us</Link>
      </div>
      <div className='navbar__actions'>
        <Link to="/donate" className="action-btn donate">Donate</Link>
        <Link to="/joinus" className="action-btn joinus">Join Us</Link>
      </div>
    </div>
  );
}
