import React, { useRef, useState } from 'react';
import './SliderWithScrollBar.css'; // Import the CSS file for styling
import "./position.css"

const SliderWithScrollBar = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleScrollBarClick = (event) => {
    const { clientX } = event;
    const { offsetWidth } = sliderRef.current;
    const numSlides = slides.length;
    const slideWidth = offsetWidth / numSlides;
    const slideIndex = Math.floor(clientX / slideWidth);
    setCurrentSlideIndex(slideIndex);
  };

  return (
    <div className="slider-with-scrollbar">
      <div className="slider" ref={sliderRef} style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
      <div className="scroll-bar" onClick={handleScrollBarClick}>
        <div
          className="scroll-bar-indicator"
          style={{ left: `${(currentSlideIndex / slides.length) * 100}%`, width: `${(1 / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default SliderWithScrollBar;
