import React, {useState} from 'react';
import styles from './HomeStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {sliderData} from '../Components/Slider/slider-data';
import Slider from '../Components/Slider/Slider';
import aboutus from '../images/aboutus1.jpeg';

const Home = () => {
  const aboutUsPhotos = [
    {
      image: aboutus,
      heading: 'Slide One',
      desc: 'This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
    },
  ];
  const text = {
    hidden: {opacity: 0, x: 100},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const [windowSize] = useState(window.innerWidth);
  const isMobile = windowSize < 1000;
  console.log(isMobile);
  return (
    <div style={styles.conatiner}>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <div style={{width: '80%', marginTop: 120}}>
          <Slider sliderData={sliderData} autoPlay={true} isBorder={true} />
        </div>
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: !isMobile ? 'row' : 'column',
            margin: '20px 0px',
            justifyContent: 'space-between',
            width: '80%',
          }}
        >
          <div
            style={{
              borderRadius: '24px',
              width: isMobile ? '100%' : '40%',
            }}
          >
            <Slider sliderData={aboutUsPhotos} autoPlay={false} />
          </div>
          <motion.span
            variants={text}
            initial="hidden"
            whileInView="visible"
            style={{
              borderRadius: '12px',
              width: isMobile ? '100%' : '55%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '14px' : '18px',
              backgroundColor: '#faf9f7',
              marginTop: isMobile ? 20 : 0,
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                width: '90%',
                display: 'flex',
                marginBottom: '10px',
                color: '#000',
              }}
            >
                About Us
            </span>
            <span
              style={{
                fontSize: '18px',
                width: '90%',
                display: 'flex',
                color: '#000',
                paddingBottom: 10,
              }}>
              {`Armstrong Housing LLC is a property management company
            that specifies in Property preservation and Repairs.
            Our history and knowledge of HUD and REO requirements of property securing,
            maintenance and repairs make us an ideal partner for asset protection.
            We are dedicated to providing quality services
            that are supported by a best-in-class customer service experience
            that is evident through our long-tenured relationships
            with many of the largest financial institutions in the industry.`}
            </span>
          </motion.span>
        </div>
      </div>
    </div>
  );
};


export default Home;
