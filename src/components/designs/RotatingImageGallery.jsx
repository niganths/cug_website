import React, { useState, useEffect } from 'react';
import './imagegallery.css'; 

const RotatingImageGallery = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    const imageContainerEl = document.querySelector(".image-container");

    const updateGallery = () => {
      imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
      setTimeout(() => {
        setX(prevX => prevX - 45);
      }, 3000);
    };

 

    const timer = setTimeout(() => {
      setX(prevX => prevX - 45);
      updateGallery();
    }, 3000);

    updateGallery();

   
  }, [x]);

  return (
    <div>
      <div className="image-container">
        <span style={{ '--i': 1 }}><img src="https://picsum.photos/id/237/300/200" alt="Image 1" /></span>
        <span style={{ '--i': 2 }}><img src="https://picsum.photos/id/238/300/200" alt="Image 2" /></span>
        <span style={{ '--i': 3 }}><img src="https://picsum.photos/id/239/300/200" alt="Image 3" /></span>
        <span style={{ '--i': 4 }}><img src="https://picsum.photos/id/240/300/200" alt="Image 4" /></span>
        <span style={{ '--i': 5 }}><img src="https://picsum.photos/id/236/300/200" alt="Image 5" /></span>
        <span style={{ '--i': 6 }}><img src="https://picsum.photos/id/235/300/200" alt="Image 6" /></span>
        <span style={{ '--i': 7 }}><img src="https://picsum.photos/id/234/300/200" alt="Image 7" /></span>
        <span style={{ '--i': 8 }}><img src="https://picsum.photos/id/233/300/200" alt="Image 8" /></span>
      </div>
      
    </div>
  );
};

export default RotatingImageGallery;
