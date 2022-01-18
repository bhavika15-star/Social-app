import React, { useState } from "react";
import axios from "axios";
import "./addnew.css";
import { useNavigate } from "react-router-dom";


export default function CreateUser() {
  
  let navigate=useNavigate();
  const [values, setValues] = useState({
    id: "",
    first_name: "",
    last_name: "",
    Avatar: "",
    address: "",
    city: "",
    createdAt: "",
  });
  

  const { id, first_name, last_name, Avatar, address, city, createdAt } =
    values;

  const handleChange = (event) => {
    const {value,name} = event.target;
    // formData.set(name, value);
    setValues({ ...values, [name]: value });
    //console.log(values);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const config = {
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      }
  }
    //setValues({ ...values, values });
    console.log(values);
    const result = await axios.post(
      "https://61dd090d591c3a0017e1abcd.mockapi.io/userDetail",
      values,config
    );
    console.log(result);
    navigate("/");
  };

  const createForm = () => (
    <form className="newusersections">
      <div className="sections">
        <div className="id">
          <span
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            ID:{" "}
          </span>
          <div className="inputbox">
            <input
              onChange={handleChange}
              type="number"
              name="id"
              className="input"
              placeholder="ID"
              value={id}
            />
          </div>
        </div>

        <div className="avatar">
          <span
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            Avatar
          </span>
          <div className="inputbox">
            <input
              name="Avatar"
              className="input"
              value={Avatar}
              type="text"
              placeholder="Enter the url of image"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="firstname">
          <span
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            First Name:{" "}
          </span>
          <div className="inputbox">
            <input
              onChange={handleChange}
              type="text"
              name="first_name"
              className="input"
              placeholder="First Name"
              value={first_name}
            />
          </div>
        </div>
        <div className="lastname">
          <span
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            Last Name:{" "}
          </span>
          <div className="inputbox">
            <input
              onChange={handleChange}
              type="text"
              name="last_name"
              className="input"
              placeholder="Last Name"
              value={last_name}
            />
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="createdat">
          <span
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            Created At:
          </span>
          <div className="inputbox">
            <input
              onChange={handleChange}
              type="text"
              name="createdAt"
              className="input"
              placeholder="Date Time"
              value={createdAt}
            />
          </div>
        </div>

        <div className="city">
          <span
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            City:
          </span>
          <div className="inputbox">
            <input
              onChange={handleChange}
              type="text"
              name="city"
              className="input"
              placeholder="City"
              value={city}
            />
          </div>
        </div>
      </div>

      <div className="address">
        <span style={{ fontWeight: "bold", fontSize: "22px" }}>
          Address
        </span>
        <div className="inputboxaddress">
          <textarea
            onChange={handleChange}
            type="text"
            name="address"
            className="inputaddress"
            placeholder="Address"
            value={address}
          />
        </div>
      </div>

      <br />

      <button type="submit" onClick={onSubmit} className="newpostbtn">
        Share New-Post
      </button>
    </form>
  );

  return (
    <div>
      <h1 style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}>
        New Post
      </h1>

      <div className="form">
        <br />
        {createForm()}
      </div>
    </div>
  );
}
