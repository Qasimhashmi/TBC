import React from "react";
import "./style.css";
import logo from "../../assets/TCQ-Logo.png";
import { FaAppStoreIos } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import AppStore from "../../assets/App-store-QR.png";
import PlayStore from "../../assets/Play-store-QR.png";
import Herosectionrighttop from "../../assets/Hero-section-right-top.png";
import Herosectionleftbottom from "../../assets/Hero-section-left-bottom.png";
import Herosectionrightbottom from "../../assets/Hero-section-right-bottom.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Navbar Section */}
      <div className="navbar-section">
        <div className="logo-container">
          <img src={logo} alt="" />
          <h1>
            The Clear Quran<span className="copyright">&copy;</span>{" "}
            <span className="tagline"> Audiobook - DRAMATIZED</span>
          </h1>
        </div>
        <RxHamburgerMenu className="hamburger-icon" size={24} />
        <button className="download-button">
          <FaAppStoreIos size={20} />
          <BiLogoPlayStore size={20} />
          Download
        </button>
      </div>
      {/* Hero Content Section */}
      <div className="hero-content-section">
        <div className="banner-content">
          <div className="banner-left-content">
            <h2>Your daily Journey to Understand Quran</h2>
            <p>
              Immerse yourself in the beauty of the Quran with daily audio.
              Enhance your understanding through listening and reflection,
              anytime, anywhere.
            </p>
            <div className="apps-qr-container">
              <img src={AppStore} alt="" />
              <img src={PlayStore} alt="" />
            </div>
          </div>
          <div className="app-store-rank">
            <img src={Herosectionrighttop} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-bottom-images">
        <img src={Herosectionleftbottom} alt="" />
        <img src={Herosectionrightbottom} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
