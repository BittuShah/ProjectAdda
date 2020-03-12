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
      <div className="jumbotron" style={testimonial}>
        {/* <h1>Hello World!</h1> */}
        <div className="row">
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
                {feedback.UserInfo.UserName},
                <span> {feedback.UserInfo.City}, </span>
                <span>{feedback.UserInfo.State}</span>
              </h3>
              <h5>{feedback.FeedbackMsg}</h5>
              {this.state.feedbacks.map(f => {
                let counter = 1;
                while (counter <= 5) {
                  if (counter < f.Ratings) {
                    <Ratings star="" />;
                  } else {
                    <Ratings star="-o" />;
                  }
                  counter++;
                }
              })}
              {/* <Ratings totalRatings={feedback.Ratings} /> */}
              <h2 className="justify-content-center">{feedback.Ratings}</h2>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const testimonial = {
  backgroundColor: "#fbffff"
};

const outer = {
  // border: "1px solid black",
  borderRadius: "17px",
  backgroundColor: "#fbd4cf",
  color: "#2b123a"
};

// const block = {
//   border: "1px solid black",
//   width: "300px",
//   // marginLeft: "100px"
//   textAlign: "center"
// };

export default Testimonials;
