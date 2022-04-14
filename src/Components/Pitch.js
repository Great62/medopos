import React from "react";
import "../Styles/searchBar.css";
import "../Styles/Pitch.css";
import flight from "../Pictures/Flying around the world-pana.svg";

function Pitch() {
  return (
    <div className="pitch">
      <div className="pitch-text">
        <h2 className="pitch-text-main">
          Cancelled operation? Long waiting list?
        </h2>
        <h4 className="pitch-text-explain">
          Compass Elective can direct you to private treatment overseas, by top
          physicians without delay and at surprisingly reasonable cost.
        </h4>
      </div>
      <img src={flight} alt="" className="pitch-image-desktop" />
    </div>
  );
}

export default Pitch;
