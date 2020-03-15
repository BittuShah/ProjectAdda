import React from "react";
import Logo from "./Logo";
import NavLink from "./navLink";
import headerStyle from "../cssModules/header.module.css";

const header = () => {
  return (
    <header className={`sticky-top ${headerStyle.header}`}>
      <Logo />
      <NavLink />
    </header>
  );
};

export default header;
