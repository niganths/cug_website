import React,{ useEffect }from 'react'
import './style.css'


function HomePage() {
    useEffect(() => {
        const bgAnimation = document.getElementById('bgAnimation');
        const numberOfColorBoxes = 100;
    
        for (let i = 0; i < numberOfColorBoxes; i++) {
          const colorBox = document.createElement('div');
          colorBox.classList.add('colorBox');
          bgAnimation.appendChild(colorBox);
        }
      }, []);
  return (
   
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAmim"></div>
    </div>

  
  );
}

export default HomePage