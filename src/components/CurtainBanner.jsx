import React from "react";
import "./CurtainBanner.css";
import BannerImg from "../assets/release.png"; // your Canva banner
import ButtonImg from "../assets/open-button.png"; // the button image

export default function CurtainBanner({ isVisible, onClose }) {
  return (
    <div
      className={`curtain-banner ${isVisible ? "show" : "hide"}`}
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <img
        src={ButtonImg}
        alt="लोकार्पणम्"
        className="open-btn-img"
        onClick={onClose}
      />
    </div>
  );
}
