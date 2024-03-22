import React,{ useEffect }from 'react'
import './style.css'


function HomePage(props) {
  const Height = window.innerHeight;
  const width = 1123
  const horizontalBoxes = Math.floor(width / 60);
  const verticalBoxes = Math.floor(Height / 71);
  const totalBoxes = horizontalBoxes * verticalBoxes;
  console.log("hello w"+width)
  const {data} = props;
  const render = data === "home" ? 200 : 300;
  const bgAnimationStyle = {
   height: `${render}vh` 
};
    useEffect(() => {
        const bgAnimation = document.getElementById('bgAnimation');
        const numberOfColorBoxes = render;
    
        for (let i = 0; i < numberOfColorBoxes; i++) {
          const colorBox = document.createElement('div');
          colorBox.classList.add('colorBox');
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