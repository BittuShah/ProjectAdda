import React from "react";
import logoStyle from "../cssModules/logo.module.css";
import logoImage from "../Images/logo.png";

const Logo = () => {
  return (
    <div>
      <div className={logoStyle.logoDiv}>
        <img src={logoImage} className={logoStyle.logoImg} />
      </div>
    </div>
  );
};

export default Logo;