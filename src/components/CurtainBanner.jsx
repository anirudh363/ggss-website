import React, { useState, useEffect } from "react";
import "./CurtainBanner.css";

export default function CurtainBanner({ isVisible, onClose }) {
  return (
    <div className={`curtain-banner ${isVisible ? "show" : "hide"}`}>
      <div className="left-curtain"></div>
      <div className="right-curtain"></div>

      <button className="open-btn" onClick={onClose}>
        लोकार्पणम्
      </button>
    </div>
  );
}
