/* eslint-disable react/prop-types */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
const Slider = ({sliderData, autoPlay, isBorder = true}) => {
  return (
    <div className="slider" style={{}}>
      <Carousel autoPlay={autoPlay} infiniteLoop showThumbs={false} showStatus={false} showIndicators={false}>
        {sliderData.map((slide) => {
          return (
            <div key={slide.image}>
              <img
                alt=""
                style={{borderRadius: isBorder ? '12px' : '0px'}}
                src={slide.image} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
