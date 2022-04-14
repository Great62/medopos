import React from "react";
import plane from "../Pictures/Flying around the world-pana.svg";

function PitchImage() {
  return (
    <div className="pitch-image-container">
      <img src={plane} alt="" className="pitch-image" />
    </div>
  );
}

export default PitchImage;
