import React from "react";
import { motion } from "framer-motion";
import "../Styles/CTAButton.css";

function CTAButton() {
  return (
    <div className="CTA-button-container">
      <div className="gradient-border">
        <button className="CTA-button">Contact us</button>
      </div>
    </div>
  );
}

export default CTAButton;
