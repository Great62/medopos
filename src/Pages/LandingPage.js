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
import ExplanationSteps from "../Components/ExplanationSteps";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="block2">
        <Pitch />
        <SearchBar />
        <PitchImage />
        <CTAButton />
      </div>
      <div className="block-explanation">
        <ExplanationSteps />
      </div>
      <h2 className="stats-title">Health situation as of mid September 2021</h2>
      <div className="block3">
        <NHSWaitingList />
        <CommonCases />
      </div>
      <div className="block4">
        <CallToActionBottom />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
