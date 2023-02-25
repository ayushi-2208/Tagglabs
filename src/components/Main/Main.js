import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import ThirdComponent from "../Home/ThirdComponent/ThirdComponent";
import FourthComponent from "../Home/FourthComponent/FourthComponent";
import FifthComponent from "../Home/FifthComponent/FifthComponent";

export default function Main() {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        backgroundColor: "#E1DDDD",
      }}
    >
      <Home />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
    </div>
  );
}
