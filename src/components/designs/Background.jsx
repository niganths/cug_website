import React, { useEffect } from "react";
import "./style.css";
import Footer from "../footer/Footer";

function HomePage(props) {
  const Height = window.innerHeight;
  const width = 1123;
  const horizontalBoxes = Math.floor(width / 60);
  const verticalBoxes = Math.floor(Height / 71);
  const totalBoxes = horizontalBoxes * verticalBoxes;
<<<<<<< HEAD
  console.log("hello w"+width)
  const {data} = props;
  const render = data === "home" ? 200 : 300;
=======
  console.log("hello w" + width);
  const { data } = props;
  const render = data === "home" ? 200 : totalBoxes * 1.5;
>>>>>>> 20feb92513efcd78b66fd09765207a4e4fa4b606
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

  return (
    <div className="bgAnimation" id="bgAnimation" style={bgAnimationStyle}>
      <div className="backgroundAmim"></div>
    </div>
  );
}

export default HomePage;
