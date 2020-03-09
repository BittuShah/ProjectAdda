import React from "react";
import logoImage from "../Images/logo.png";

const Logo = () => {
  return (
    <div>
      <img style={logoStyle} src={logoImage}></img>
    </div>
  );
};

const logoStyle = {
  height: "100px",
  width: "150px",
  marginLeft: "50px"
};

export default Logo;
