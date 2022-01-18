import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { ImForward } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import "./user.css";
import Addnew from "./addnew.js";
import UserCard from "./userCard";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);
  
  { /* const [countCmnts, setcountComnts] = useState(0);
  const [like, setLike] = useState(1);
  const [isliked, setIsLiked] = useState(false);
  const [isdisliked, setIsDisliked] = useState(false);
  const [cmnt, setCmnt] = useState("");
  const [theArray, setTheArray] = useState([]);

  const likehandler = (id) => {
    const user = users.filter((item) => item.id === id);
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };
  const dislikehandler = (id) => {
    setLike(isdisliked ? like + 1 : like - 1);
    setIsDisliked(!isdisliked);
  };  

  const addEntryClick = () => {
    setTheArray([...theArray, cmnt]);
    setcountComnts(countCmnts + 1);
  };

  const showHide = () => {
    var x = document.getElementById("cmnt");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };   */}

  const getuser = () => {
    axios
      .get("https://61dd090d591c3a0017e1abcd.mockapi.io/userDetail")
      .then((response) => {
        console.log(response);
        const myuser = response.data;
        setUsers(myuser);
      });
    // console.log()
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="mid">
      <div className="innercard newpost">
        <Link className="postbtn" to="/addnew" component={Addnew}>
          New Post
        </Link>
      </div>

      {users.map((user) => {
        return (
          <div>
            <UserCard id={user.id} Avatar={user.Avatar} first_name={user.first_name} last_name={user.last_name}
            createdAt={user.createdAt} address={user.address} city={user.city} users={users}/>
          </div>
          // <div key={user.id} className="card">
          //   <div className="innercard">
          //     <div className="header">
          //       <div className="card_top">
          //         <img
          //           className="user_image"
          //           src={user.Avatar}
          //           alt="user_image"
          //         />
          //         <div className="margin-left username">
          //           {user.first_name} {user.last_name}
          //         </div>
          //         <div className="margin-left createdatetime">
          //           {user.createdAt.slice(0,10)}, 0{user.createdAt.slice(12,19)}
          //         </div>
          //       </div>
          //       <div>
          //         <BsThreeDotsVertical />
          //       </div>
          //     </div>
          //     <div className="desc">
          //       {user.address},{user.city}
          //     </div>
          //     <div>
          //       <img className="image" src={user.Avatar} alt="image" />
          //     </div>

          //     <div className="bottom">
          //       <div className="likedislike">
          //         <div className="like" onClick={()=>likehandler(user.id)}>
          //           <BsFillHandThumbsUpFill />
          //         </div>
          //         <div className="like" onClick={()=>dislikehandler(user.id)}>
          //           <BsFillHandThumbsDownFill />
          //         </div>
          //         <span className="likecmnttext">{like} Likes</span>
          //       </div>
          //       <div className="likecmnttext" onClick={showHide}>{countCmnts} Comment</div>
          //     </div>

          //     <div id="cmnt" className="cmnt">
          //       <div className="cmnt_section">
          //         <input
          //           className="cmntinput"
          //           type="text"
          //           placeholder="Write Your Comment here"
          //           onChange={(e) => setCmnt(e.target.value)}
          //         />
          //         <button className="cmntbtn" onClick={addEntryClick}>
          //           <ImForward />
          //         </button>
          //       </div>

          //       <div className="cmntshow">
          //         {theArray.map((entry) => (
          //           <div>{entry}</div>
          //         ))}
          //       </div>
          //     </div>
          //   </div>
          // </div>
          // </div>
        );
      })}
    </div>
  );
};

export default UsingFetch;
