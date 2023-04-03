import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { sliderData } from "./slider-data";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 15000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <span style={{fontSize:'24px', textAlign:'center'}} className="arrow prev" onClick={prevSlide}>{'<'}</span>
      <span style={{fontSize:'24px', textAlign:'center'}} className="arrow next" onClick={nextSlide}>{'>'}</span>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2 style={{color:'#F58220',}}>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr style={{backgroundColor:'#F58220', border:'1px solid #F58220', width:'100%'}} />
                  <Button title={'Get Started'} onClick={()=> { console.log('home')}} backgroundColor={'#F58220'}/>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
