import React, {useRef} from 'react';
import styles from './HomeStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {Navbar} from '../Components/Navbar';
import Slider from '../Components/Slider/Slider';
import aboutus from '../images/aboutus.jpg';
import {Footer} from '../Components/Footer';
const Home = () => {
  const container = {
    hidden: {opacity: 0, scale: 0.5},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
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
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const isMobile = windowSize.current[0] < 1000;
  console.log(isMobile);
  return (
    <div style={styles.conatiner}>
      <Navbar />
      <div style={{marginTop: '100px', zIndex: '1'}}>
        <Slider/>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: !isMobile ? 'row' : 'column',
            marginTop: '25px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <motion.img
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.1}}
            src={aboutus}
            alt='aboutus'
            style={{
              borderRadius: '24px',
              width: isMobile ? '90%' : '',
              marginLeft: !isMobile ? '50px': null,
            }}
          />
          <motion.span
            variants={text}
            initial="hidden"
            whileInView="visible"
            style={{
              whiteSpace: 'pre-line',
              textAlign: !isMobile ? 'right' : 'center',
              fontSize: '18px',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                justifyContent: !isMobile ? 'end': 'center',
                width: '100%',
                display: 'flex',
                marginBottom: '20px',
                color: '#F58220',
                textAlign: 'right',
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
      <Footer/>
    </div>
  );
};


export default Home;
