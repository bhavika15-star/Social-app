import React from "react";
import "./last.css";
import { FaGifts } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import image from "./im.png";

function last() {
  return (
    <div className="last">
      <div className="lastheader">
        <div className="giftboximg">
          <FaGifts />
        </div>
        <div className="headertext">
          <span style={{ color: "black", fontWeight: "500" }}>Pola</span> and{" "}
          <span style={{ color: "black", fontWeight: "500" }}>
            3 Other friends
          </span>{" "}
          have a brthday today.
        </div>
      </div>
      <div>
        <img className="lastimage" src={image} alt="image" />
      </div>
      <hr />
      <div className="onlinefriendsheading">Online Friends</div>
      <div>
        <div style={{display: "flex", alignItems: "center"}}>
          <GoPrimitiveDot className="dot" />
          <p className="onlinenames">Saul Swaniawski</p>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <GoPrimitiveDot className="dot" />
          <p className="onlinenames">Herbert Krajcik</p>
        </div>
      </div>
    </div>
  );
}

export default last;
