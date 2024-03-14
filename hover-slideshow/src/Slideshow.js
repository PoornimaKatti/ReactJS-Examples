import React from 'react';
import './Slideshow.css';

const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src="image1.jpg" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="image3.jpg" alt="Slide 3" />
      </div>
    </div>
  );
};
export default Slideshow;