import React from "react";
// import "font-awesome/css/font-awesome.css";

const Ratings = ({ star }) => {
  let classes = "";
  if (!star) classes = "fa fa-star";
  else classes = "fa fa-star" + star;

  return <i className={classes}></i>;
};

export default Ratings;
