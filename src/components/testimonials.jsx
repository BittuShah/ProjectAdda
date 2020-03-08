import React, { Component } from "react";
import { getFeedback } from "../services/feedback";

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
      <div className="jumbotron">
        {/* <h1>Hello World!</h1> */}
        <div className="row">
          {this.state.feedbacks.map(feedback => (
            <div
              key={feedback.Temp_Id}
              className={`justify-content-center text-center mb-2 ${
                this.state.classes[feedback.Temp_Id - 1]
              }`}
            >
              <h3>
                {feedback.UserInfo.UserName},
                <span> {feedback.UserInfo.City}, </span>
                <span>{feedback.UserInfo.State}</span>
              </h3>
              <h5>{feedback.FeedbackMsg}</h5>
              <h2 className="justify-content-center">{feedback.Ratings}</h2>
            </div>
          ))}

          {/* classess = "d-flex justify-content-center border-primary mb-3
          col-lg-4" */}
          {/* For First Row  */}
          {/* <div className="d-flex justify-content-center col-lg-4 border border-primary mb-3">
            ...
          </div>
          <div className="d-flex justify-content-center col-lg-4 offset-lg-4 border border-primary mb-3">
            ...
          </div> */}
          {/* For Middle Row */}
          {/* <div className="d-flex justify-content-center col-lg-6 offset-lg-3 border border-primary mb-3">
            ...
          </div> */}
          {/* <div className="w-100"></div> */}
          {/* <div className="d-flex justify-content-center offset-lg-4"></div> */}
          {/* For Last Row  */}
          {/* <div className="d-flex justify-content-center col-lg-4 border border-primary mb-3">
            ...
          </div>
          <div className="d-flex justify-content-center col-lg-4 offset-lg-4 border border-primary mb-3">
            ...
          </div> */}
          {/* Extra */}
          {/* <div className="d-flex justify-content-center offset-lg-2 border border-primary"></div> */}
          {/*
          <div className="d-flex justify-content-end offset-lg-2 border border-primary">
            ...
          </div> */}
          {/* <div class="align-self-center col-lg-2 border border-primary">
            Aligned flex item
          </div> */}
        </div>
      </div>
    );
  }
}

export default Testimonials;
