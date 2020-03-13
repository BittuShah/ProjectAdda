import React, { Component } from "react";
import { getFeedback } from "../services/feedback";
import Ratings from "./ratings";

class Testimonials extends Component {
  state = {
    feedbacks: getFeedback(),
    classes: [
      "col-lg-4",
      "col-lg-4 offset-lg-4",
      "col-lg-6 offset-lg-3",
      "col-lg-4",
      "col-lg-4 offset-lg-4"
    ]
  };
  render() {
    return (
      <div className="jumbotron pt-2" style={testimonial}>
        <h1 className="text-center" style={{ color: "#2b123a" }}>
          Testimonials
        </h1>
        <hr style={line} />
        <div className="row mt-5">
          {this.state.feedbacks.map(feedback => (
            <div
              key={feedback.Temp_Id}
              className={`justify-content-center bg-gradients-primary text-center mb-3 p-2 ${
                this.state.classes[feedback.Temp_Id - 1]
              }`}
              style={outer}
            >
              {/* <div style={block}> */}
              <h3>
                {feedback.UserInfo.UserName} (
                <span style={location}> {feedback.UserInfo.City}, </span>
                <span style={location}>{feedback.UserInfo.State} </span>)
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

const testimonial = {
  backgroundColor: "#fbffff",
  fontFamily: "cursive"
};

const outer = {
  // border: "1px solid black",
  borderRadius: "17px",
  backgroundColor: "#fbd4cf",
  color: "#2b123a"
};

const location = {
  fontSize: "15px"
};

const line = {
  height: "5px",
  width: "170px",
  backgroundImage: "linear-gradient(to right, #fbd4cf, #2b123a)",
  borderRadius: "17px"
};

// const block = {
//   border: "1px solid black",
//   width: "300px",
//   // marginLeft: "100px"
//   textAlign: "center"
// };

export default Testimonials;
