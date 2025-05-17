import React from "react";
import "./style.css";
import appStorebadge from "../../assets/app-store-badge.png";
import playStorebadge from "../../assets/play-store-badge.png";
import mobilepicture from "../../assets/benefits-mobile-img.png";
import BenefitsCard from "../BenefitsCard";
import feature1 from "../../assets/Benefits-images/benefit1.png";
import feature2 from "../../assets/Benefits-images/benefit2.png";
import feature3 from "../../assets/Benefits-images/benefit3.png";
import feature4 from "../../assets/Benefits-images/benefit4.png";
import feature5 from "../../assets/Benefits-images/benefit5.png";
import feature6 from "../../assets/Benefits-images/benefit6.png";
import feature7 from "../../assets/Benefits-images/benefit7.png";
const AppBenefits = () => {
  const features = [
    {
      id: "read-listen",
      icon: feature1,
      title: "Read and Listen",
      description:
        "Follow the Quranic text while listening to the dramatized reading for a complete learning experience.",
    },
    {
      id: "offline-access",
      icon: feature2,
      title: "Offline Access",
      description:
        "Download your favorite Surahs and listen anytime, even without an internet connection.",
    },
    {
      id: "sleep-timer",
      icon: feature3,
      title: "Sleep Timer",
      description:
        "Set a timer to automatically stop the playback, so you can listen peacefully before falling asleep.",
    },
    {
      id: "creating-playlists",
      icon: feature4,
      title: "Creating Playlists",
      description:
        "Save and organize your favorite surahs and translation into custom playlists for easy access anytime.",
    },
    {
      id: "note-taking",
      icon: feature5,
      title: "Note Taking with Audio",
      description:
        "Take notes while listening to the Translation, with audio linked directly to your notes for easy reference.",
    },
    {
      id: "customizable-clips",
      icon: feature6,
      title: "Customizable Clips",
      description:
        "Highlight and save your favorite audio with the most segments for easy replay and reflection.",
    },
    {
      id: "playback-speed",
      icon: feature7,
      title: "Customizable Listening Speed",
      description:
        "Adjust the playback speed to match your listening preference for a more personalized experience.",
    },
  ];

  return (
    <section className="benefits-container">
      <h3>
        An Auditory Experience that engages more of your senses to contemplate
        the message behind the meaning of the Quran
      </h3>
      <p>
        You can listen to the Quran and its meaning whenever you want. Make
        playlists, take notes, set a sleep timer, and enjoy learning in your own
        way.
      </p>
      <div className="badges-conatiner">
        <img src={appStorebadge} alt="" />
        <img src={playStorebadge} alt="" />
      </div>
      <img src={mobilepicture} alt="" className="mobile-picture" />
      <div className="benefits-card-container">
        {features.map((feature, key) => {
          return <BenefitsCard key={key} feature={feature} />;
        })}
      </div>
    </section>
  );
};

export default AppBenefits;
