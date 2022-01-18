import React from "react";
import "./first.css";
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { MdSchool } from "react-icons/md";

function first() {
  return (
    <div className="firstcard">
      <div className="first">
        <div className="elements">
          <MdRssFeed />
          <p className="text">Feed</p>
        </div>
        <div className="elements">
          <BsChatSquareTextFill />
          <p className="text">Chats</p>
        </div>
        <div className="elements">
          <AiFillPlayCircle />
          <p className="text">Videos</p>
        </div>
        <div className="elements">
          <MdGroup />
          <p className="text">Groups</p>
        </div>
        <div className="elements">
          <BsBookmarkFill />
          <p className="text">Bookmarks</p>
        </div>
        <div className="elements">
          <BsQuestionCircle />
          <p className="text">Questions</p>
        </div>
        <div className="elements">
          <BiShoppingBag />
          <p className="text">Jobs</p>
        </div>
        <div className="elements">
          <MdEvent />
          <p className="text">Events</p>
        </div>
        <div className="elements">
          <MdSchool />
          <p className="text">Courses</p>
        </div>
        <button className="btn ">Show More</button>
      </div>
      <hr />
      <div>
        <p className="names">Saul Swaniawski</p>
        <p className="names">Herbert Krajcik</p>
        <p className="names">Flavio Fay</p>
        <p className="names">Rylan Shields</p>
        <p className="names">Vito Schroeder</p>
        <p className="names">Colton Schiller</p>
        <p className="names">Wava Wilkinson</p>
        <p className="names">Rickey Murray</p>
        <p className="names">Bud Reilly</p>
        <p className="names">Ellie Baumbach</p>
      </div>
    </div>
  );
}

export default first;
