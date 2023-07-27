import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import GetAstros from "./pages/GetAstros";
import CurrentISS from "./pages/CurrentISS";
import "./App.css";
import "./index.css";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadStarsPreset(tsParticles);
}

function App() {
  return (
    <div className="app-container">
      <Particles
        className="particles-container"
        options={{ preset: "stars" }}
        init={particlesInit}
      />
      <div className="content-container">
        <CurrentISS />
        <GetAstros />
      </div>
    </div>
  );
}

export default App;
