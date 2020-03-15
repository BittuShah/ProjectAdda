import React from "react";
import navStyle from "../cssModules/navLink.module.css";

const navLink = () => {
  return (
    <nav className={navStyle.navigation}>
      <ul className={navStyle.ulClass}>
        <li className={navStyle.liClass}>
          <a className="nav-a nav-selected">Home</a>
        </li>
        <li className={navStyle.liClass}>
          <a className="nav-a bracket">Projects</a>
        </li>
        <li className={navStyle.liClass}>
          <a className="nav-a bracket">Category</a>
        </li>
        <li className={navStyle.liClass}>
          <a className="nav-a bracket">About</a>
        </li>
        <li className={navStyle.liClass}>
          <a className="nav-a bracket">Other</a>
        </li>
        <div className={navStyle.rightDiv}>
          <li className={navStyle.liClass}>
            <a className="nav-a bracket">Login</a>
          </li>
          <li className={navStyle.liClass}>
            <a className="nav-a bracket">Sign up</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default navLink;
