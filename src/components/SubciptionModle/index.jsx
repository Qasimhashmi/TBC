import React from "react";
import "./style.css";
import checkboxImage from "../../assets/Tick-Square.png";

const SubcriptionModle = () => {
  const plans = [
    {
      label: "Standard",
      price: 4.99,
      period: "mth",
      billing: "Charges $6 every month",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlist & listen offline",
      ],
    },
    {
      label: "Growth",
      price: 4.99,
      period: "mth",
      billing: "Charges $6 every month",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlist & listen offline",
      ],
    },
    {
      label: "Scale",
      price: 4.99,
      period: "mth",
      billing: "Charges $6 every month",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlist & listen offline",
      ],
    },
    {
      label: "Family Package",
      price: 4.99,
      period: "mth",
      billing: "Charges $6 every month",
      features: [
        "Listening with better audio quality",
        "Listening without restrictions & ads",
        "Create playlist & listen offline",
      ],
    },
  ];
  return (
    <div className="subcription-modle-container">
      <h3>
        Subscribe to The Clear Quran{" "}
        <span className="registered-symbol">&reg;</span> <br /> Audiobook
        Premium
      </h3>
      <div className="plans">
        {plans.map((plan, key) => {
          return (
            <div className="plan-card-container">
              <div className={`plan-label ${plan.label.toLowerCase()}`}>
                {plan.label}
              </div>

              <div className="plan-price">
                <span className="price-amount">${plan.price}</span>
                <span className="price-period">/mth</span>
              </div>

              <div className="plan-billing">
                Charges ${plan.billing.split("$")[1].split(" ")[0]} every month
              </div>

              <hr className="plan-divider" />

              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <img src={checkboxImage} alt="" />
                    <p className="feature-text">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="lifetime-plan">
        <div className="lifetime-plan-left">
          <div className={`lifetime-label`}>Lifetime</div>
          <h3>
            Get Lifetime Access to <br /> All Features – One Time, <br />{" "}
            Forever.
          </h3>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default SubcriptionModle;
