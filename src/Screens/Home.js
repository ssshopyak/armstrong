import React, {useState} from 'react';
import styles from './HomeStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {sliderData} from '../Components/Slider/slider-data';
import Slider from '../Components/Slider/Slider';
import aboutus from '../images/aboutus.jpg';

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
      <div style={{zIndex: '1', width: '100%'}}>
        <Slider sliderData={sliderData} autoPlay={true} isBorder={false} />
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: !isMobile ? 'row' : 'column',
            margin: '25px 0px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              borderRadius: '24px',
              width: isMobile ? '90%' : '30%',
              marginLeft: !isMobile ? '50px': null,
            }}
          >
            <Slider sliderData={aboutUsPhotos} autoPlay={false} />
          </div>
          <motion.span
            variants={text}
            initial="hidden"
            whileInView="visible"
            style={{
              whiteSpace: 'pre-line',
              textAlign: 'center',
              fontSize: '18px',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                justifyContent: 'center',
                width: '100%',
                display: 'flex',
                marginBottom: '20px',
                color: '#000',
                textAlign: 'center',
              }}
            >
                About Us
            </span>
            {`Armstrong Housing LLC is a property management company \n
            that specifies in Property preservation and Repairs.\n
            Our history and knowledge of HUD and REO requirements of property securing,\n
            maintenance and repairs make us an ideal partner for asset protection.\n
            We are dedicated to providing quality services\n
            that are supported by a best-in-class customer service experience\n
            that is evident through our long-tenured relationships\n
            with many of the largest financial institutions in the industry.`}
          </motion.span>
        </div>
      </div>
    </div>
  );
};


export default Home;
