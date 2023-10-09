import React, { useState } from "react";
import "../Navbar/Navbar.css";
import menu from "../images/menu.png";

function Navbar() {
  const [isActive, setIsActive] = useState();

  const toggleActive = () => setIsActive(!isActive);
  return (
    <div className="navmain">
      <div className="navWrapper">
        <div className="menuwraper">
          <img src={menu} onClick={toggleActive} className="menuImg" alt="" />
        </div>
        <div className="navContainer">
          <label htmlFor="" className="starup">
            Startup&nbsp;3
          </label>
        </div>
        <div className={`NavRightContainer ${isActive ? "active" : ""}`}>
          <div className="overviewContianer">
            {" "}
            <label htmlFor="" className="overview">
              Overview
            </label>
          </div>
          <div className="priceContianer">
            {" "}
            <label htmlFor="" className="price">
              Prices
            </label>
          </div>
          <div className="blogContianer">
            {" "}
            <label htmlFor="" className="blog">
              Blog
            </label>
          </div>
          <div className="feedbackContianer">
            {" "}
            <label htmlFor="" className="feedback">
              Feedback
            </label>
          </div>

          <div className="purchaseContainer">
            <label htmlFor="" className="purchase">
              Purchase
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
