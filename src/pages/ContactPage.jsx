import React from 'react';
import BranchCards from '../components/BranchCards'; // Adjust path based on your folder structure
import HeroWithoutStrip from '../components/HeroWithoutStrip';

const ContactUs = () => {
  return (
    <div className="contact-page-container">
            <HeroWithoutStrip page={{ title: "Contact your Nearest Branch" }} />

      
      {/* The Branch Cards Component */}
      <BranchCards />
      
    </div>
  );
};

export default ContactUs;