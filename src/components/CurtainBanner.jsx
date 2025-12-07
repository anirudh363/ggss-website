import React from "react";
import "./CurtainBanner.css";
import BannerImg from "../assets/release.png"; // your Canva image

export default function CurtainBanner({ isVisible, onClose }) {
  return (
    <div
      className={`curtain-banner ${isVisible ? "show" : "hide"}`}
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <button className="open-btn" onClick={onClose}>
        लोकार्पणम्
      </button>
    </div>
  );
}
