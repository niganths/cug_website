import React,{ useEffect }from 'react'
import './style.css'
import { Link } from 'react-router-dom';

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
    <div>
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAmim"></div>
    </div>
    <div className="container">
      <nav>
        <h1><span>C</span>UG</h1>
        <ul>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>Events</li>
          <li>RoadMap</li>
          <li>News</li>
          <li>Events</li>
        </ul>
      </nav>
      <section>
       
      </section>
    </div>
  </div>
  );
}

export default HomePage