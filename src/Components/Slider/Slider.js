import React from 'react';
import {sliderData} from './slider-data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
const Slider = () => {
  return (
    <div className="slider">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {sliderData.map((slide) => (
          <div key={slide.image}>
            <img alt="" src={slide.image} />
            <p className="legend">{slide.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
