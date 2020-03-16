import React, { Component } from "react";
import styles from "../../cssModules/Footer.module.css";

class Social extends Component {
  render() {
    return (
      <div className={`col-4 text-center ${styles.social}`}>
        <h4 className="">Follow Us!</h4>
        <ul className="list-unstyled list-inline">
          <li className={`list-inline-item ${styles.list_inline_item}`}>
            <span className={`btn-floating mx-2 ${styles.fb}`}>
              <i className="fa fa-facebook-f" />
            </span>
          </li>
          <li className={`list-inline-item ${styles.list_inline_item}`}>
            <span className={`btn-floating mx-2 ${styles.tw}`}>
              <i className="fa fa-twitter" />
            </span>
          </li>
          <li className={`list-inline-item ${styles.list_inline_item}`}>
            <span className={`btn-floating mx-2 ${styles.in}`}>
              <i className="fa fa-instagram" />
            </span>
          </li>
          <li className={`list-inline-item ${styles.list_inline_item}`}>
            <span className={`btn-floating mx-2 ${styles.li}`}>
              <i className="fa fa-linkedin" />
            </span>
          </li>
          <li className={`list-inline-item ${styles.list_inline_item}`}>
            <span className={`btn-floating mx-2 ${styles.wp}`}>
              <i className="fa fa-whatsapp" />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
