import React from "react";
import logoStyle from "../cssModules/logo.module.css";
import logoImage from "../Images/logo.png";

const Logo = () => {
  return (
    <div className={logoStyle.logoDiv}>
      <img src={logoImage} className={logoStyle.logoImg} alt="" />
    </div>
  );
};

export default Logo;
