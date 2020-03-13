import React from "react";
// import "font-awesome/css/font-awesome.css";

const Ratings = ({ totalRatings }) => {
  let elements = [];
  let counter = 1;

  while (counter <= 5) {
    if (counter <= totalRatings) {
      elements.push(
        <i key={counter} className="fa fa-star" style={filled}></i>
      );
    } else {
      elements.push(
        <i key={counter} className="fa fa-star-o" style={empty}></i>
      );
    }
    counter++;
  }

  return <div>{elements.map(e => e)}</div>;

  // console.log(elements);
  // return <i className="fa fa-star-o"></i>;
  // return null;
};

const empty = {
  marginRight: "3px",
  fontSize: "20px"
};

const filled = {
  marginRight: "3px",
  color: "#420F8D",
  fontSize: "20px"
};

export default Ratings;
