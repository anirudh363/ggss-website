import React, { useState } from "react";

export default function ActivitiesTabs({ literaryComponents, culturalComponents }) {
  const [activeTab, setActiveTab] = useState("literary");

  return (
    <div className="activities-tabs">
      <div className="tabs">
        <button 
          className={activeTab === "literary" ? "tab active" : "tab"}
          onClick={() => setActiveTab("literary")}
        >
          Literary Activities
        </button>

        <button
          className={activeTab === "cultural" ? "tab active" : "tab"}
          onClick={() => setActiveTab("cultural")}
        >
          Cultural Activities
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "literary" && (
          <>
            {literaryComponents.map((Component, i) => (
              <div key={i} className="tab-section">
                <Component />
              </div>
            ))}
          </>
        )}

        {activeTab === "cultural" && (
          <>
            {culturalComponents.map((Component, i) => (
              <div key={i} className="tab-section">
                <Component />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
