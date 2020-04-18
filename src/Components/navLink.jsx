import React, { Component } from "react";
import navStyle from "../cssModules/navLink.module.css";

class NavLink extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav className={navStyle.navigation}>
          <ul className={navStyle.ulClass}>
            <li className={navStyle.liClass}>
              <a href="www.google.com" className={navStyle.nav_a}>
                Home
              </a>
            </li>
            <li className={navStyle.liClass}>
              <a href="www.google.com" className={navStyle.nav_a}>
                Projects
              </a>
            </li>
            <li className={navStyle.liClass}>
              <a href="www.google.com" className={navStyle.nav_a}>
                Category
              </a>
            </li>
            <li className={navStyle.liClass}>
              <a href="www.google.com" className={navStyle.nav_a}>
                About
              </a>
            </li>
            <li className={navStyle.liClass}>
              <a href="www.google.com" className={navStyle.nav_a}>
                Other
              </a>
            </li>
            <div className={navStyle.rightDiv}>
              <li className={navStyle.liClass}>
                <a href="www.google.com" className={navStyle.nav_a}>
                  Login
                </a>
              </li>
              <li className={navStyle.liClass}>
                <a href="www.google.com" className={navStyle.nav_a}>
                  Sign up
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavLink;
