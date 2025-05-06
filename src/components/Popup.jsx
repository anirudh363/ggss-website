import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Popup = ({ display, onClose }) => {
  return (
    display && (
      <div className="popup">
        <div className="popup__content">
          <p>Join us help make a difference!</p>
          <Link to="/joinus" target="_blank" rel="noopener noreferrer" className="popup__link">
            Learn More
          </Link>
        </div>
        <div className="popup__content">
          <p>Find your nearest GGSS branch!</p>
          <Link to="/branches" target="_blank" rel="noopener noreferrer" className="popup__link">
            Find Branch
          </Link>
        </div>
        <button className="popup__close" onClick={onClose}>
            <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    )
  );
};

export default Popup;
