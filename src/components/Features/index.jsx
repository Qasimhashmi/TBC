import React from "react";
import "./style.css";
import Feature1 from "../../assets/feature-audio.png";
import Feature2 from "../../assets/feature-playlist.png";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-card">
        <img src={Feature1} alt="" />
        <div className="feature-card-content">
          <h3>
            Listen to the world's 1st DRAMATIZED Audiobook of the translation of
            the Quran
          </h3>
          <p>
            Immerse yourself in the beautiful dramatization of the translation
            of the Quran to grasp its true message.With clear audio, and easy
            access, deepen your connection with the Quran wherever you are.
          </p>
          <button>Get Started for Free</button>
        </div>
      </div>
      <div className="feature-card">
        <div className="feature-card-content">
          <h3>Create personalized Quran playlists</h3>
          <p>
            Select your favorite Surahs and verses to build custom playlists
            that suit your spiritual goals. Listen your way—whether it's daily
            reflections, study sessions, or peaceful contemplations.
          </p>
          <button>Get Started for Free</button>
        </div>
        <img src={Feature2} alt="" />
      </div>
    </div>
  );
};

export default Features;
