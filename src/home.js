import React from 'react';
import './App.css';
import First from "./components/first";
import Users from "./components/user.js";
import Last from "./components/last.js";

function home() {
    return (
        <div className='App'>
            <First />
            <Users />
            <Last />
        </div>
    )
}

export default home
