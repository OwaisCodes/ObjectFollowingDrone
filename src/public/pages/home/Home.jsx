import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.png";
import SignoutDropdown from "../../components/dropdrowns/SignoutDropdown.jsx";
import "./home.css";
import drone from '../../../assets/videos/drone.mp4';

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      location.pathname = "/signup";
    }
  }, []);
  
  return (
    <>
      <Navbar id="homeNavbar">
        <Container id="homeNavbarContainer">
          <Navbar.Brand href="#home" id="logoName">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Object Following Drone
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div id="navLinks">
              <a href="#withKeys">Keys</a>
              <a href="#withJoystick">Joystick</a>
              <a href="#withGestures">Gestures</a>
              <a href="#feedback">Feedback</a>
              <a href="#aboutUs">About Us</a>
            </div>
            <div id="signoutDropdown">
              <SignoutDropdown />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      <section id="withKeys" className="section">
        <div>
         <h2>Control with Keys</h2>
         <p>This Feature lets you control drone by Keyboard Keys <li>A = left rotation</li><li>W = Upward</li><li>S = Downward</li><li>D = Right rotation</li><li>Arrow Keys = Forwad,Backword,Left,Right</li></p>
          <button>Key Simulator</button>
        </div>
      </section>
    
      <section id="withJoystick" className="section">
        <div>
         <h2>Control with Joystick</h2>
         <p>This Feature lets you control drone by joystick <li>A = Take off</li><li>B = Landing</li><li>LB = Drone Camera</li><li>RB = Drone Bottom View</li><li> Gimbal = Forwad,Backword,Left,Right</li></p>
         <button>JoyStick Simulator</button>
        </div>      
      </section>
    
      <section id="withGestures" className="section">
        <div>
         <h2>Control with Gestures</h2>
         <p>This Feature lets you control drone by Hand Gesture<li>Thumb = Left rotation</li><li>Index Finger = Upwards</li><li>Victory Sign = Downwards</li><li>Pinky Finger = Right rotation</li><li>Punch = Forward</li><li>High-Five = Stop</li></p>
         <button>Gesture Simulator</button>
        </div>
      </section>
    
      <section id="feedback" className="section">
        <div>
          <h2>Feedback</h2>
          <form> 
            <div className="div1">
            <label htmlFor="name">Name  :</label>
            <input type="text" id="name" name="name" required />
            </div>
            <div className="div2">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className="div3">
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="2" cols="50" required />
            </div>
            <button type="submit">Submit</button>
           </form>
        </div>
      </section>
   
      <section id="aboutUs" className="section">
        <div>
          <h2>About Us</h2>
          <p>Welcome to WingSim, your gateway to the future of drone control. Our innovative simulator allows users to experience the thrill of piloting a drone, using either traditional keyboard controls or advanced hand gesture technology. Whether you're a beginner eager to learn the basics or an experienced pilot looking to refine your skills, WingSim provides a realistic and immersive environment to explore and master drone flying.</p>   
        </div>
      </section>
    </>
  );
};

export default Home;
