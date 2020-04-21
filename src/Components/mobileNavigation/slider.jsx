import React from "react";
import sliderNav from "../../cssModules/slider.module.css";

const slider = (props) => {
  const sliderClassName = props.isSliderOpen
    ? `${sliderNav.sliderMainDiv} ${sliderNav.open}`
    : `${sliderNav.sliderMainDiv}`;

  const sliderBgDivClass = props.isSliderOpen ? sliderNav.sliderBgDiv : "";

  return (
    <div className={sliderBgDivClass} onClick={() => props.sliderCloser()}>
      <div className={sliderClassName}>
        <div className={sliderNav.closeBtnDiv}>
          {/* <button
            onClick={() => props.sliderCloser()}
            className={sliderNav.closeBtn}
          >
            X
          </button> */}
          <i
            onClick={() => props.sliderCloser()}
            className={`${sliderNav.close} fa fa-times-circle`}
          ></i>
          {/* <i className="faIcons fa fa-window-close" aria-hidden="true"></i> */}
        </div>
        <nav className={sliderNav.navigation}>
          <ul className={sliderNav.ulClass}>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-home`}></i>
                Home
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-object-group`}></i>
                Projects
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-list-alt`}></i>
                Category
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-info-circle`}></i>
                About
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-tasks`}></i>
                Other
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-user-plus`}></i>
                Sign up
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <a className={sliderNav.navLinks} href="#">
                <i className={`${sliderNav.faIcons} fa fa-sign-in`}></i>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default slider;
