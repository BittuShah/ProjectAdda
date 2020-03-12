import React, { Component } from "react";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";

const slideShow = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-ride="carousel"
      style={{ zIndex: "", marginTop: "20px" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="10000">
          <img
            src={Img1}
            className="d-block w-100"
            style={slideStyle}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-interval="2000">
          <img
            src={Img2}
            className="d-block w-100"
            style={slideStyle}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={Img3}
            className="d-block w-100"
            style={slideStyle}
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

const slideStyle = {
  height: "550px"
};
export default slideShow;
