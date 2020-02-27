import React, { Component } from "react";
import { getFeedback } from "../services/feedback";

class Testimonials extends Component {
  state = {
    feedbacks: getFeedback()
  };
  render() {
    return (
      <div className="jumbotron">
        {/* <h1>Hello World!</h1> */}
        <div className="row">
          {this.state.feedbacks.map(feedback => (
            <div
              key={feedback._id}
              className="col-lg-4 border border-primary m-2"
            >
              <h2>Ratings : {feedback.Ratings}</h2>
              <h2>Feedback Message : {feedback.FeedbackMsg}</h2>
              <h5>UserName : {feedback.UserInfo.UserName}</h5>
              <h5>City : {feedback.UserInfo.City}</h5>
              <h5>State : {feedback.UserInfo.State}</h5>
            </div>
          ))}

          <div class="d-flex justify-content-start col-lg-2 border border-primary">
            ...
          </div>
          <div class="d-flex justify-content-end col-lg-2 border border-primary">
            ...
          </div>
          <div class="d-flex justify-content-center col-lg-2 border border-primary">
            ...
          </div>

          {/* <div class="align-self-center col-lg-2 border border-primary">
            Aligned flex item
          </div> */}
        </div>
      </div>
    );
  }
}

export default Testimonials;
