import React, { Component } from "react";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";
import vid from "../Videos/vahlam.mp4";
import slideStyle from "../cssModules/slideShow.module.css";

class slideShow extends Component {
  state = {
    images: [Img1, Img2, Img3],
    hover: false
  };

  myFun = () => {
    alert("hello");
  };

  render() {
    const images = this.state.images;

    return (
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {/* {images.map(image => {
            <div className="carousel-item" data-interval="15000">
              <img
                src={Img2}
                className={`d-block w-100 ${slideStyle.imgStyle}`}
                alt="..."
              />
            </div>;
          })} */}

          {/* <div className="carousel-item active" data-interval="15000">
            <img
            src={Img1}
            className={`d-block w-100 ${slideStyle.imgStyle}`}
            alt="..."
          />
            <div className={`${slideStyle.contentDiv}`}>
              <video
                className={`${slideStyle.vidStyle}`}
                controlsList="nodownload"
                autoPlay
                controls
              >
                <source src={`${vid}#t=0,10`} type="video/mp4" />
              </video>

              <div className={`${slideStyle.detailsDiv}`}>Hello</div>
            </div>
          </div>
          <div className="carousel-item" data-interval="15000">
            <img
              src={Img2}
              className={`d-block w-100 ${slideStyle.imgStyle}`}
              alt="..."
            />
          </div>
          <div className="carousel-item" data-interval="15000">
            <img
              src={Img3}
              className={`d-block w-100 ${slideStyle.imgStyle}`}
              alt="..."
            />
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default slideShow;
