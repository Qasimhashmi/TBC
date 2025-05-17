import React from "react";
import "./style.css";
const BenefitsCard = ({ feature }) => {
  console.log(feature);

  return (
    <div className="card-container">
      <div className="card-icon-container">
        <img src={feature.icon} alt="" />
      </div>
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </div>
  );
};

export default BenefitsCard;
