import React,{ useEffect }from 'react'
import './style.css'
function Home() {
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
    <div>
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAmim"></div>
    </div>
    <div className="container">
      <nav>
        <h1><span>C</span>UG</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>RoadMap</li>
          <li>News</li>
          <li>Events</li>
        </ul>
      </nav>
      <section>
        <div className="textBox">
          <h1><span>Animated</span> Background (CSS)</h1>
          <p>Fast Track Your Web Development Career with Our Team! <br />Learn Web Development from Beginning with live coding sessions on your Laptop!</p>
          <button className="homeBtn" style={{'--i': '#fff'}}>Join Us</button>
          <button className="homeBtn" style={{'--i': '#00bfff'}}>EXPLORE</button>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Home