import React from "react";
import "./style.css";
import LogoDark from "../../assets/TCQ-Logo-dark.png";
import appStorebadge from "../../assets/app-store-badge.png";
import playStorebadge from "../../assets/play-store-badge.png";
import facebookIcon from "../../assets/Facebook-icon.png";
import linkedinIcon from "../../assets/Linkedin-icon.png";
import twitterIcon from "../../assets/X-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <img src={LogoDark} alt="" />
          <p>
            Designed to bring you closer to the Quran
            <br />
            listen, learn, & reflect anytime, anywhere.
          </p>
          <ul className="footer-links">
            <li>Community</li>
            <li>Blog</li>
            <li>Support Center</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of services</li>
          </ul>
        </div>
        <div className="footer-app-container">
          <p>Get the app</p>
          <img src={appStorebadge} alt="" />
          <img src={playStorebadge} alt="" />
        </div>
      </div>
      <div className="copyright-container">
        <span>&copy; 2025 The Clear Quran Audiobook. All rights reserved.</span>
        <div className="social-handles">
          <img src={facebookIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
