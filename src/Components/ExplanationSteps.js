import React from "react";
import "../Styles/explanationSteps.css";
import call from "../Pictures/Group video-bro.svg";
import destination from "../Pictures/Destination-bro.svg";
import treatment from "../Pictures/Cardiologist-bro.svg";

function ExplanationSteps() {
  return (
    <div className="steps-container">
      <div className="step">
        <img src={call} alt="" className="step-picture picture-lower" />
        <div className="step-text">
          <h3 className="step-title">Give us a call</h3>
          <h4 className="step-explained">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In est
            exercitationem totam commodi ullam deleniti molestias facilis non at
            odio.
          </h4>
        </div>
      </div>
      <div className="step">
        <div className="step-text">
          <h3 className="step-title">Go to your destination</h3>
          <h4 className="step-explained">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In est
            exercitationem totam commodi ullam deleniti molestias facilis non at
            odio.
          </h4>
        </div>
        <img src={destination} alt="" className="step-picture" />
      </div>
      <div className="step">
        <img src={treatment} alt="" className="step-picture" />
        <div className="step-text">
          <h3 className="step-title">Get treated</h3>
          <h4 className="step-explained">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In est
            exercitationem totam commodi ullam deleniti molestias facilis non at
            odio.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ExplanationSteps;
