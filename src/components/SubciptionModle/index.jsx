import React, { useState, useEffect } from "react";
import "./style.css";

const SubcriptionModle = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const PlanCard = ({ label, features }) => (
    <div className="plan-card">
      <div className="plan-label">{label}</div>
      <div className="plan-price">
        <span className="price-amount">$4.99</span>
        <span className="price-period">/mth</span>
      </div>
      <div className="plan-billing">Charged $6 every month</div>
      <div className="plan-features">
        {features.map((feature, index) => (
          <div className="feature-item" index={index}>
            <input type="checkbox" checked={true} />
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Lifetime plan component
  //   const LifetimePlan = () => (
  //     <div className="lifetime-plan">
  //       <div className="lifetime-left">
  //         <div className="lifetime-label">Lifetime</div>
  //         <h3 className="lifetime-title">
  //           Get Lifetime Access to All Features - One Time, Forever.
  //         </h3>
  //         <div className="lifetime-features">
  //           <div className="lifetime-feature">
  //             <span className="lifetime-check">□</span>
  //             <span>Listening with better audio quality</span>
  //           </div>
  //           <div className="lifetime-feature">
  //             <span className="lifetime-check">□</span>
  //             <span>Listening without restrictions & ads</span>
  //           </div>
  //           <div className="lifetime-feature">
  //             <span className="lifetime-check">□</span>
  //             <span>Create playlists & listen offline</span>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="lifetime-right">
  //         <div className="lifetime-price">
  //           <span className="price-amount">99.00</span>
  //           <span className="price-period">/lifetime</span>
  //         </div>
  //         <div className="lifetime-billing">Onetime payment $99 for lifetime</div>
  //         <div className="lifetime-guarantee">
  //           6 - months money - back guarantee
  //         </div>
  //         <button className="lifetime-button">Get Lifetime Access</button>
  //       </div>
  //     </div>
  //   );

  const plans = [
    {
      label: "Standard",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlists & listen offline",
      ],
    },
    {
      label: "Growth",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlists & listen offline",
      ],
    },
    {
      label: "Scale",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlists & listen offline",
      ],
    },
    {
      label: "Family Package",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlists & listen offline",
      ],
    },
  ];

  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h2 className="subscription-title">
          Subscribe to The Clear Quran<sup>®</sup>
          <br />
          Audiobook Premium
        </h2>
      </div>

      <div className={`subscription-plans ${isMobile ? "mobile" : ""}`}>
        {plans.map((plan, index) => (
          <PlanCard key={index} label={plan.label} features={plan.features} />
        ))}
      </div>

      {/* <LifetimePlan /> */}
    </div>
  );
};

export default SubcriptionModle;
