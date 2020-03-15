import React from "react";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";
import vid from "../Videos/ghoomar.mp4";
import slideStyle from "../cssModules/slideShow.module.css";

const slideShow = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="4000">
          {/* <img
            src={Img1}
            className={`d-block w-100 ${slideStyle.imgStyle}`}
            alt="..."
          /> */}
          <video
            style={{ width: "100%" }}
            className={slideStyle.vidStyle}
            autoPlay
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <div className="carousel-item" data-interval="4000">
          <img
            src={Img2}
            className={`d-block w-100 ${slideStyle.imgStyle}`}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-interval="4000">
          <img
            src={Img3}
            className={`d-block w-100 ${slideStyle.imgStyle}`}
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default slideShow;
