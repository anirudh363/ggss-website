import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';



const Popup = ({ display, onClose }) => {
  return (
    display && (
      <div className="popup">
        <div className="popup__content">
          <p>Join us help make a difference!</p>
          <a href="https://ggss.org.in/joinus" target="_blank" rel="noopener noreferrer" className="popup__link">
            Learn More
          </a>
        </div>
        <div className="popup__content">
          <p>Find your nearest GGSS branch!</p>
          <a href="https://ggss.org.in/branches" target="_blank" rel="noopener noreferrer" className="popup__link">
            Find Branch
          </a>
        </div>
        <button className="popup__close" onClick={onClose}>
            <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    )
  );
};

export default Popup;
