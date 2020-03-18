import React from "react";
import Header from "./components/header";
import SlideShow from "./components/slideShow";
import Temp from "./components/temp";
import "./App.css";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <SlideShow />
      <Temp />
    </div>
  );
}

export default App;
