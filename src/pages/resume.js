import React from "react";
import Navbar from "../components/navbar";import "../css/main.css";

function Resume() {
  return (
    <>
      <div className="main-container">
        {" "}
        <div className="navbar-div">
          <Navbar />{" "}
        </div>
        <div className="main-div">
          <h1>Resume</h1>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Resume;
