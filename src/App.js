import React, { Component } from "react";
import Header from "./components/header";
import SlideShow from "./components/slideShow";
import Slider from "./components/mobileNavigation/slider";
import Temp from "./components/temp";
import "./App.css";

class App extends Component {
  state = {
    isSliderOpen: false,
  };
  sliderOpener = () => {
    this.setState({ isSliderOpen: true });
  };
  sliderCloser = () => {
    this.setState({ isSliderOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <Header sliderOpener={this.sliderOpener} />
        <SlideShow />
        <Slider
          isSliderOpen={this.state.isSliderOpen}
          sliderCloser={this.sliderCloser}
        />
        <Temp />
      </React.Fragment>
    );
  }
}

export default App;
