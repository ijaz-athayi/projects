import React from "react";
import "../css/homepage/homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div id="homepagebody">
      <div id="homepagecontn">

        <h1>Hello IJAZ</h1>
        <p>which project will you want to see first</p>
        <div id="projects1">
          <div id="pianobutdiv">
            {" "}
            <button
              onClick={() => navigate("/piano88")}
              className="homepagebutton"
            >
              
              {" "}
              PIANO88
            </button>
            {/* <span className='hovername'>PIANO88</span> */}
          </div>
          <div id="piano24butdiv">
            <button
              onClick={() => navigate("/piano24")}
              className="homepagebutton"
            >
              {" "}
              PIANO24
            </button>
            {/* <span className='hovername'>PIANO24</span> */}
          </div>
          <div id="calcbutdiv">
            {" "}
            <button
              onClick={() => navigate("/calculator")}
              className="homepagebutton"
            >
              CALCULATOR
            </button>
            {/* <span className='hovername'>CALCULATOR</span> */}
          </div>
          <div id="webcambutdiv">
            {" "}
            <button
              onClick={() => navigate("/webcam")}
              className="homepagebutton"
            >
              {" "}
              WEBCAM
            </button>
            {/* <span className='hovername'>WEBCAM</span> */}
          </div>

          <div id="mywebsitediv">
            <a href="http://ijaz.free.nf/">
              <button className="homepagebutton"> My website</button>
            </a>
          </div>
          <div id="mongologin">
            <button
              onClick={() => navigate("/")}
              className="homepagebutton"
            >
              {" "}
              MONGODB <br /> LOGIN
            </button>
          </div>

          <div id="comingsoon">
            <button
              onClick={() => navigate("/login")}
              className="homepagebutton"
            >
              {" "}
              COMMING <br /> SOON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
