import "../Styles/healthlists.css";
import { nhsWaitingLists } from "../Data";
import React from "react";

function NHSWaitingList() {
  return (
    <div className="NHS-waiting-list">
      <h3 className="list-title">NHS waiting lists</h3>
      <div className="health-list">
        {nhsWaitingLists.map((name, key) => (
          <div className="gradient-wrap-border-red" key={key}>
            <div className="health-list-item-nhs">
              <div className="health-list-item-text">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NHSWaitingList;
