import React, { useEffect } from "react";
import "./style.css";
import Footer from "../footer/Footer";

function HomePage(props) {
  const { data } = props;
  const render = data === "home" ? 300 : 150;
  const bgAnimationStyle = {
    height: `${render}vh`,
  };
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    const numberOfColorBoxes = render;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.appendChild(colorBox);
    }
  }, [render]);
  return (<>
    <div className="bgAnimation" id="bgAnimation" style={bgAnimationStyle}>
      <div className="backgroundAmim"></div>
    </div>
    
    </>

  );
}

export default HomePage;
