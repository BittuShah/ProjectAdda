import React, { Component } from "react";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";
import vid from "../Videos/vahlam.mp4";
import slideStyle from "../cssModules/slideShow.module.css";

class SlideShow extends Component {
  state = {
    images: [
      { imgPath: Img1, onScreen: true },
      { imgPath: Img2, onScreen: false },
      { imgPath: Img3, onScreen: false },
    ],
    intervalTime: 5000,
    hover: false,
  };

  slideHoverHandle = () => {
    alert("hello");
  };

  render() {
    const { images, intervalTime, slideHoverHandle } = this.state;

    return (
      <div
        id="carouselExampleInterval"
        className={`carousel slide ${slideStyle.slideDiv}`}
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image) => (
            <div
              className={
                image.onScreen === true
                  ? "carousel-item active"
                  : "carousel-item"
              }
              data-interval={intervalTime}
              key={image.imgPath}
              // onMouseMove={() => console.log(window.scrollX, window.scrollY)}
              // onMouseEnter={() => this.slideHoverHandle()}
            >
              <img
                src={image.imgPath}
                className={`d-block w-100 ${slideStyle.imgStyle}`}
                alt="..."
              />
            </div>
          ))}

          {/* 
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
          */}
        </div>
        <a
          className={`carousel-control-prev ${slideStyle.slideLeft}`}
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ color: "blue" }}
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className={`carousel-control-next ${slideStyle.slideRight}`}
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

export default SlideShow;
