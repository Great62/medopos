import "../Styles/healthlists.css";
import { nhsWaitingLists } from "../Data";
import React from "react";
import hospital from "../Pictures/batiment-de-lhopital.png";

function NHSWaitingList() {
  return (
    <div className="health-list-container">
      <div className="NHS-waiting-list">
        <h3 className="list-title">NHS waiting lists</h3>
        <div className="health-list">
          {nhsWaitingLists.map((name, key) => (
            <div className="health-list-item-nhs" key={key}>
              <div className="health-list-item-text">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NHSWaitingList;
