import React, { Component } from "react";
import logoImage from "../Images/logo.png";

const header = () => {
  return (
    <header style={headerStyle}>
      <div
        className="logo"
        style={{ width: "10%", height: "100%", marginLeft: "90px" }}
      >
        <img style={logoStyle} src={logoImage} className="logo-img" />
      </div>

      <nav className="navigation" style={{ width: "80%", height: "100%" }}>
        <ul
          style={{
            marginTop: "2%",
            marginLeft: "7%"

            // border: "1px solid black"
          }}
        >
          <li style={liStyle}>
            <a className="nav-a nav-selected">Home</a>
          </li>
          <li style={liStyle}>
            <a className="nav-a bracket">Projects</a>
          </li>
          <li style={liStyle}>
            <a className="nav-a bracket">Category</a>
          </li>
          <li style={liStyle}>
            <a className="nav-a bracket">About</a>
          </li>
          <li style={liStyle}>
            <a className="nav-a bracket">Other</a>
          </li>
          <div style={{ float: "right" }}>
            <li style={liStyle}>
              <a className="nav-a bracket">Login</a>
            </li>
            <li style={liStyle}>
              <a className="nav-a bracket">Sign up</a>
            </li>
            {false && (
              <li style={liStyle}>
                <a className="nav-a bracket">Other</a>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  width: "100%",
  height: "80px",
  position: "fixed",
  display: "inline-flex",
  border: "1px solid black"
};

const logoStyle = {
  height: "100%",
  width: "100%"
  //   marginLeft: "90px"
};

const liStyle = {
  float: "left",
  padding: "0px 45px 0px 0px",
  listStyle: "none"
};

export default header;
