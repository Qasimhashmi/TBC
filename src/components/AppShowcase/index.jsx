import React from "react";
import "./style.css";
import appStorebadge from "../../assets/app-store-badge.png";
import playStorebadge from "../../assets/play-store-badge.png";

const AppShowcase = () => {
  return (
    <div className="app-showcase-container">
      <h1>Your Quran journey starts here</h1>
      <p>Start your 30-day free trial today.</p>
      <div className="app-showcase-badges">
        <img src={appStorebadge} alt="" />
        <img src={playStorebadge} alt="" />
      </div>
    </div>
  );
};

export default AppShowcase;
