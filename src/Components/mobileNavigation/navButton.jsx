import React from "react";
import mobileNavBtn from "../../cssModules/navButton.module.css";

const navButton = (props) => {
  return (
    <div className={`${mobileNavBtn.resMenu}`}>
      <ul className={`${mobileNavBtn.ulClass}`}>
        <li>
          <a onClick={() => props.click()}>
            <i className="fa fa-bars" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default navButton;
