import React, { Component } from "react";
import Ratings from "./common/ratings";
import { getFeedback } from "../services/feedback";

import styles from "../cssModules/testimonials.module.css";

class Testimonials extends Component {
  state = {
    feedbacks: getFeedback(),
    classes: [
      "col-lg-4",
      "col-lg-4 offset-lg-4",
      "col-lg-6 offset-lg-3",
      "col-lg-4",
      "col-lg-4 offset-lg-4",
    ],
  };
  render() {
    return (
      <div className={`jumbotron pt-2 ${styles.testimonial}`}>
        <h1 className="text-center" style={{ color: "#2b123a" }}>
          Testimonials
        </h1>
        <hr className={styles.line} />
        <div className={`row mt-5 ${styles.boxes}`}>
          {this.state.feedbacks.map((feedback) => (
            <div
              key={feedback.Temp_Id}
              className={`justify-content-center bg-gradients-primary text-center mb-3 p-2 ${
                styles.outer
              } ${this.state.classes[feedback.Temp_Id - 1]}`}
            >
              {/* <div style={block}> */}
              <h3 className={`${styles.name}`}>
                {feedback.UserInfo.UserName} (
                <span className={styles.location}>
                  {" "}
                  {feedback.UserInfo.City},{" "}
                </span>
                <span className={styles.location}>
                  {feedback.UserInfo.State}{" "}
                </span>
                )
              </h3>
              <h5>{feedback.FeedbackMsg}</h5>

              <Ratings totalRatings={feedback.Ratings} />
              {/* <h2 className="justify-content-center">{feedback.Ratings}</h2> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
