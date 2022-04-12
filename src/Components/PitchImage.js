import React from "react";
import airplane from "../Pictures/airplane.png";

function PitchImage() {
  return (
    <div className="pitch-image-container">
      <img src={airplane} alt="" className="pitch-image" />
    </div>
  );
}

export default PitchImage;
