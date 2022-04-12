import React from "react";
import "../Styles/landingPage.css";

//Component imports
import CTAButton from "../Components/CTAButton";
import NavBar from "../Components/NavBar";
import Pitch from "../Components/Pitch";
import SearchBar from "../Components/SearchBar";
import CommonCases from "../Components/CommonCases";
import NHSWaitingList from "../Components/NHSWaitingList";
import CallToActionBottom from "../Components/CallToActionBottom";
import PitchImage from "../Components/PitchImage";

function LandingPage() {
  return (
    <div>
      <div className="block1">
        <h1 className="brand-title">Compass Elective</h1>
        <NavBar />
      </div>
      <div className="block2">
        <Pitch />
        <SearchBar />
        <PitchImage />
        <CTAButton />
      </div>
      <div className="block3">
        <NHSWaitingList />
        <CommonCases />
      </div>
      <div className="block4">
        <CallToActionBottom />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default LandingPage;
