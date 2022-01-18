import React, { useState, useEffect } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { ImForward } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";

function UserCard(props) {
  const [countCmnts, setcountComnts] = useState(0);
  const [cmnt, setCmnt] = useState("");
  const [theArray, setTheArray] = useState([]);
  const [data, setData] = useState([]);
  let temp = [];

  useEffect(() => {
    console.log(data);
  }, [data]);
  function likeFunc() {
    insert(data, data.length - 1, 10);
  }
  function dislike() {
    let temp = data;
    let temp2 = data.filter((x, index) => {
      return index !== data.length - 1;
    });
    temp.pop();
    console.log(temp2, "temp");
    setData(temp2);
  }
  const insert = (arr, index, newItem) => {
    console.log("hii");
    setData([...arr.slice(0, index), newItem, ...arr.slice(index)]);
  };

  const addEntryClick = () => {
    setTheArray([...theArray, cmnt]);
    setcountComnts(countCmnts + 1);
  };

   const showHide = () => {
  //   var x = document.getElementById("cmnt");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  };

  return (
    <div>
      <div key={props.id} className="card">
        <div className="innercard">
          <div className="header">
            <div className="card_top">
              <img className="user_image" src={props.Avatar} alt="user_image" />
              <div className="margin-left username">
                {props.first_name} {props.last_name}
              </div>
              <div className="margin-left createdatetime">
                {props.createdAt.slice(0, 10)}, 0{props.createdAt.slice(12, 19)}
              </div>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="desc">
            {props.address},{props.city}
          </div>
          <div>
            <img className="image" src={props.Avatar} alt="image" />
          </div>

          <div className="bottom">
            <div className="likedislike">
              <div className="like" onClick={likeFunc}>
                <BsFillHandThumbsUpFill />
              </div>
              <div className="like" onClick={dislike}>
                <BsFillHandThumbsDownFill />
              </div>
              <span className="likecmnttext">{data.length} Likes</span>
            </div>
            <div className="likecmnttext" onClick={showHide}>
              {countCmnts} Comment
            </div>
          </div>

          <div id="cmnt" className="cmnt">
            <div className="cmnt_section">
              <input
                className="cmntinput"
                type="text"
                placeholder="Write Your Comment here"
                onChange={(e) => setCmnt(e.target.value)}
              />
              <button className="cmntbtn" onClick={addEntryClick}>
                <ImForward />
              </button>
            </div>

            <div className="cmntshow">
              {theArray.map((entry) => (
                <div className="commentsection">
                  <img
                    className="commentimage"
                    src={props.Avatar}
                    alt="userimage"
                  />
                  <div>
                    <div className="cmntname ">
                      {props.first_name} {props.last_name}
                    </div>
                    <div className="comment">{entry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
