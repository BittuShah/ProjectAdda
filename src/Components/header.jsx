import React from "react";
import Logo from "./Logo";
import NavLink from "./navLink";
import NavButton from "./mobileNavigation/navButton";
import headerStyle from "../cssModules/header.module.css";

const header = (props) => {
  return (
    <header className={`sticky-top ${headerStyle.header}`}>
      <div className={headerStyle.headerBackground}></div>
      <Logo />
      <NavButton click={props.sliderOpener} />

      <NavLink />
    </header>
  );
};

export default header;
