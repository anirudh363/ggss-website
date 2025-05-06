import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import the "arrow-up" icon


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Show button after scrolling 200px
    } else {
      setIsVisible(false); // Hide button when above 200px
    }
  };

  const backToTop = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    isVisible && (
      <button
        onClick={backToTop}
        className="back-to-top-btn"
        title="Back to Top"
      >
        <FontAwesomeIcon icon={faArrowUp} /> {/* FontAwesome icon */}
      </button>
    )
  );
};

export default BackToTop;
