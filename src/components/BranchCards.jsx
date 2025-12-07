import React from 'react';
import './BranchCards.css'; // Make sure the path is correct
import branchesData from '../assets/branches.json'; // Make sure the path is correct
import HeroWithoutStrip from './HeroWithoutStrip';

const BranchCards = () => {
  return (
    <div className="branch-grid">
      {branchesData.map((branch) => {
        // Construct a Google Maps Search URL if one wasn't provided directly
        // This takes the address and searches for it
        const mapUrl = branch.mapQuery 
          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`
          : null;

        return (
          <article key={branch.id} className="branch-card">
            
            <div className="branch-header">
              <h3>{branch.branchName}</h3>
            </div>

            {branch.description && (
              <div className="branch-desc">
                {branch.description}
              </div>
            )}

            <div className="branch-details">
              {branch.contactPerson && (
                <div className="detail-row">
                  <span className="icon-label">Person:</span>
                  <span className="detail-content">{branch.contactPerson}</span>
                </div>
              )}

              {branch.phone && (
                <div className="detail-row">
                  <span className="icon-label">Phone:</span>
                  <span className="detail-content">
                    <a href={`tel:${branch.phone.replace(/\s+/g, '')}`}>
                      {branch.phone}
                    </a>
                  </span>
                </div>
              )}

              {branch.email && (
                <div className="detail-row">
                  <span className="icon-label">Email:</span>
                  <span className="detail-content">
                    <a href={`mailto:${branch.email}`}>{branch.email}</a>
                  </span>
                </div>
              )}

              {branch.address && (
                <div className="detail-row">
                  <span className="icon-label">Address:</span>
                  <span className="detail-content">{branch.address}</span>
                </div>
              )}

              {branch.timings && (
                <div className="detail-row">
                  <span className="icon-label">Time:</span>
                  <span className="detail-content">{branch.timings}</span>
                </div>
              )}
            </div>

            {/* Only show button if there is an address/map query */}
            {mapUrl ? (
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-btn"
              >
                View Location
              </a>
            ) : (
               /* Optional: Render a disabled button or nothing */
               <span style={{ display: 'block', height: '45px' }}></span> 
            )}

          </article>
        );
      })}
    </div>
  );
};

export default BranchCards;