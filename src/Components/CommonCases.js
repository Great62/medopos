import "../Styles/healthlists.css";
import React, { useEffect, useState } from "react";
import { commonCases } from "../Data";
import operation from "../Pictures/chirurgie-robotique.png";

function CommonCases() {
  return (
    <div className="health-list-container">
      <div className="common-cases-container">
        <h3 className="list-title">Common cases</h3>
        <div className="health-list">
          {commonCases.map((name, key) => (
            <div className="health-list-item" key={key}>
              <div className="health-list-item-text">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommonCases;
