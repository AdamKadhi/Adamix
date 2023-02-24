import React, { useState } from "react";
import vid from "../Storage/aa.mp4";
import song from "../Storage/s.mp3"
const Home = () => {
  return (
    <div className="home">
      <video src={vid} autoPlay loop muted  />
      <audio src={song} autoPlay loop  ></audio>
      <div className="desc">
        <h1>The Flash</h1>
        <p>
          It is a spin-off of Arrow, existing in the same fictional universe
          known as the Arrowverse. The series follows Barry Allen, portrayed by
          Grant Gustin, a crime scene investigator who gains super-human speed,
          which he uses to fight criminals, including others who have also
          gained superhuman abilities.
        </p>
        <button>
          {" "}
          <i className="fa-solid fa-play"></i> Play
        </button>{" "}
        <button>
          {" "}
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default Home;
