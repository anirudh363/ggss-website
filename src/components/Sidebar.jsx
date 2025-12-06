// Sidebar.jsx
import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
    onClose(); // Close sidebar after click
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    onClose();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__links">
        <a href="/" onClick={handleHomeClick} className={location.pathname === '/' ? 'active' : ''}>Home</a>
        <NavLink to="/about" onClick={onClose} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        {/* <NavLink to="/maata" onClick={onClose} className={({ isActive }) => isActive ? 'active' : ''}>Maata</NavLink> */}
        <NavLink to="/classes" onClick={onClose} className={({ isActive }) => isActive ? 'active' : ''}>Classes</NavLink>
        {/* <NavLink to="/branches" onClick={onClose} className={({ isActive }) => isActive ? 'active' : ''}>Branches</NavLink> */}
        <NavLink to="/activities" onClick={onClose} className={({ isActive }) => isActive ? 'active' : ''}>Activities</NavLink>
        {/* <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events & Gallery</NavLink> */}
        <NavLink to="/branches" onClick={onClose} className={({ isActive }) => isActive ? 'active' : ''}>Bracnhes</NavLink>
      </div>
      <div className="sidebar__actions">
        <Link to="/donate" className="action-btn donate" onClick={onClose}>Donate</Link>
        <Link to="/joinus" className="action-btn joinus" onClick={onClose}>Join Us</Link>
      </div>
    </div>
  );
}
