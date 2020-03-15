import React, { Component } from "react";
import Social from "./content/social";
import FeedBack from "./content/feedback";
import styles from "../cssModules/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer font-small special-color-dark pt-4"
        style={{ fontFamily: "cursive" }}
      >
        <div className={`container-fuild ${styles.container}`}>
          <div className="row">
            <div className="col-4 text-center">
              <h4>ProjectAdda</h4>
            </div>
            <FeedBack />
            <Social />
          </div>
          {/* <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="http://localhost:3000/"> PanchuSena</a>
          </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
