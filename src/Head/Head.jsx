import React from "react";
import "../Head/Head.css";
import Login from "../Login/Login";

function Head() {
  return (
    <div className="mainwrapper">
    <div className="HeaderWrapper">
      <div className="headerContainer">
        <div className="headContainer">
          <h2 className="head">Generate Awesome Web Pages</h2>
        </div>
        <div className="subHeadContainer">
          <div className="subheadTextContainer">
            <p className="subhead">
              The most important part of the Startup is samples. The samples
              form a set of 25 usable pages you can use as is or you can add new
              blocks.
            </p>
          </div>
          <div className="btnlearnMoreContainer">
            <button className="btnLearnMore">Learn More</button>
          </div>
        </div>
      </div>
      <div className="loginWraperinHead">
      <Login />
      </div>
    </div>
    </div>
  );
}

export default Head;
