/* eslint-disable react/prop-types */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import {motion} from 'framer-motion/dist/framer-motion';
const Slider = ({sliderData, autoPlay, isBorder = true}) => {
  const container = {
    hidden: {opacity: 0, scale: 1},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="slider">
      <Carousel autoPlay={autoPlay} infiniteLoop showThumbs={false} showStatus={false} showIndicators={false}>
        {sliderData.map((slide) => (
          <div key={slide.image}>
            <motion.img
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.1}}
              alt=""
              style={{borderRadius: isBorder ? '12px' : '0px'}}
              src={slide.image} />
            <p className="legend">{slide.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
