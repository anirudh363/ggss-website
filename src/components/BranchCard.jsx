import React from "react";

const BranchCard = ({ name, head, contact, address, map }) => {
  return (
    <div className="branch-card">
      <h3>{name}</h3>

      <p><strong>Head:</strong> {head}</p>
      <p><strong>Contact:</strong> {contact}</p>
      <p><strong>Address:</strong> {address}</p>

      <a href={map} target="_blank" rel="noopener noreferrer" className="map-btn">
        View on Google Maps
      </a>
    </div>
  );
};

export default BranchCard;
