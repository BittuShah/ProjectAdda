import React, { Component } from "react";
import styles from "../../cssModules/Footer.module.css";

class FeedBack extends Component {
  render() {
    return (
      <div className={`text-center col-4 ${styles.maindiv}`}>
        <h4 style={{ marginBottom: "20px" }}>FeedBack</h4>
        <form className="form-group text-center">
          <div className={styles.setform}>
            <input
              type="text"
              className={`col-lg-6 ${styles.inputstyle}`}
              placeholder="Enter Name"
            />
          </div>
          <div className={styles.setform}>
            <input
              type="email"
              className={`col-lg-6 ${styles.inputstyle}`}
              placeholder="Enter Email"
            />
          </div>
          <div className={styles.setform}>
            <textarea
              type="text"
              className={`col-lg-6 ${styles.inputstyle}`}
              placeholder="Enter Message"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FeedBack;
