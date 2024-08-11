// Welcome.js
import React from 'react';
import './style.css'; // Make sure the path to your CSS file is correct
import drone from "../../../assets/drone.png";
import Login from "../login/Login";
import Signup from "../signup/Signup";

const Welcome = () => {
  return (
    <section id="welcome" className="hero">
      <div>
        <div className="image">
          <img src={drone} alt="WingSim Logo" />
        </div>
        <div className="container">
          <div className="typewriter">
            <h1>Welcome to WingSim</h1>
          </div>
          <p><i>"Experience the Future of Drone Simulation"</i></p>
          <div className="buttons">
            <a href="Login" className="btn">Login</a>
            <a href="Signup" className="btn">Signup</a>
          </div>
        </div>
      </div>
      <div className="circle">
        <span className="dot"></span>
        <span className="dot1"></span>
      </div>
    </section>
  );
};

export default Welcome;
