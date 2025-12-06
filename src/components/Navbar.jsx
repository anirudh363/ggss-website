import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.jpg';
import Sidebar from './Sidebar';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1350);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1400);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'><img src={Logo} alt='GGSS Logo' /></Link>
        {/* <h2 className='ggss-title'>GGSS</h2> */}
      </div>

      {isMobile ? (
        <>
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          {sidebarOpen && (
            <>
              <Sidebar onClose={() => setSidebarOpen(false)} />
              <div className="backdrop" onClick={() => setSidebarOpen(false)}></div>
            </>
          )}
        </>
      ) : (
        <>
          <div className='navbar__links'>
            <a href="/" onClick={handleHomeClick} className={location.pathname === '/' ? "active" : ""}>Home</a>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
            {/* <NavLink to="/maata" className={({ isActive }) => isActive ? "active" : ""}>Our Guru Maata</NavLink> */}
            <NavLink to="/classes" className={({ isActive }) => isActive ? "active" : ""}>Classes</NavLink>
            {/* <NavLink to="/branches" className={({ isActive }) => isActive ? "active" : ""}>Branches</NavLink> */}
            <NavLink to="/activities" className={({ isActive }) => isActive ? "active" : ""}>Activities</NavLink>
            {/* <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events & Gallery</NavLink> */}
            {/* <Link onClick={scrollToFooter}>Contact Us</Link> */}
            <NavLink to="/branches" className={({ isActive }) => isActive ? "active" : ""}>Branches</NavLink>
          </div>
          <div className='navbar__actions'>
            <Link to="/donate" className="action-btn donate">Donate</Link>
            <Link to="/joinus" className="action-btn joinus">Join Us</Link>
          </div>
        </>
      )}
    </div>
  );
}
