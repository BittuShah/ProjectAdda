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
            className={`${sliderNav.close} fa fa-times-circle-o`}
          ></i>
          {/* <i className="faIcons fa fa-window-close" aria-hidden="true"></i> */}
        </div>
        <nav className={sliderNav.navigation}>
          <ul className={sliderNav.ulClass}>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-home`}></i>
              <a className={sliderNav.navLinks} href="#">
                Home
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-object-group`}></i>
              <a className={sliderNav.navLinks} href="#">
                Projects
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-list-alt`}></i>
              <a className={sliderNav.navLinks} href="#">
                Category
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-info-circle`}></i>
              {/* <i class="far fa-info-circle"></i> */}
              <a className={sliderNav.navLinks} href="#">
                About
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-tasks`}></i>
              <a className={sliderNav.navLinks} href="#">
                Other
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-user-plus`}></i>
              <a className={sliderNav.navLinks} href="#">
                Sign up
              </a>
            </li>
            <li className={sliderNav.liClass}>
              <i className={`${sliderNav.faIcons} fa fa-sign-in`}></i>
              <a className={sliderNav.navLinks} href="#">
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
