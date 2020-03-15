import React from "react";
// import "font-awesome/css/font-awesome.css";
import styles from "./../../cssModules/testimonials.module.css";

const Ratings = ({ totalRatings }) => {
  let elements = [];
  let counter = 1;

  while (counter <= 5) {
    if (counter <= totalRatings) {
      elements.push(
        <i key={counter} className={`fa fa-star ${styles.filled}`}></i>
      );
    } else {
      elements.push(
        <i key={counter} className={`fa fa-star-o ${styles.empty}`}></i>
      );
    }
    counter++;
  }

  return <div>{elements.map(e => e)}</div>;

  // console.log(elements);
  // return <i className="fa fa-star-o"></i>;
  // return null;
};

export default Ratings;
