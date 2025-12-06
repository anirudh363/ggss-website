import React from "react";

const BranchCard = ({ name, year, description, head, contact, venue, timings, address, map }) => {
  return (
    <div className="branch-card">
      <h3>{name} {year && <span>({year})</span>}</h3>

      {description && <p>{description}</p>}

      <p><strong>Head:</strong> {head}</p>
      <p><strong>Contact:</strong> {contact}</p>
      <p><strong>Venue:</strong> {venue}</p>
      <p><strong>Timings:</strong> {timings}</p>
      <p><strong>Address:</strong> {address}</p>

      <a href={map} target="_blank" rel="noopener noreferrer" className="map-btn">
        View on Google Maps
      </a>
    </div>
  );
};

export default BranchCard;
