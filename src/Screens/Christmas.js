import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import small from '../images/house_small.webp';
import medium from '../images/house_medium.webp';
import large from '../images/house_large.webp';
import extraLarge from '../images/house_extra_large.webp';
import christmas from '../images/christmas.webp';
import santa from '../images/santa.png';
import christmasPhoto from '../images/christmasPhoto.jpg';
import {ContentBlock} from '../Components/ContentBlock';
import {ChristmasText} from './ChristmasText';

const Christmas = () => {
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const mainContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const [windowSize] = useState(window.innerWidth);
  const [isDetailInfoOpen, setIsDetailInfoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const isMobile = windowSize <= 1280;
  const services = [
    {
      title: 'Small',
      image: small,
      price: '800',
    },
    {
      title: 'Medium',
      image: medium,
      price: '1100',
    },
    {
      title: 'Large',
      image: large,
      price: '1400',
    },
    {
      title: 'Extra Large',
      image: extraLarge,
      price: '1700',
    },
  ];

  const handleServices = (title) => {
    if (title === selectedService && isDetailInfoOpen) {
      setIsDetailInfoOpen(false);
      setSelectedService(null);
    } else {
      setIsDetailInfoOpen(true);
      setSelectedService(title);
    }
  };

  return (
    <div style={styles.conatiner}>
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        style={styles.bodyContainer}
      >
        <div>
          <h1 style={{fontSize: '56px'}}>
          Christmas will be here quicker
          </h1>
          <h1 style={{fontSize: '56px', display: 'flex', alignItems: 'center'}}>than you think <img src={santa} alt='hello)' style={{height: '56px'}}/></h1>
        </div>
        <ContentBlock
          title={'Christmas Light Installation'}
          isSlider={false}
          bodyText={ChristmasText}
          photo={christmasPhoto}
        />
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <h2 style={{color: '#000', marginBottom: '20px'}}>What is the price of Christmas lights?</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {
              services.map((service) => (
                <motion.div
                  variants={item}
                  className='subServicesContainer'
                  onClick = {()=>{
                    handleServices(service.title);
                  }}
                  key={service.title}
                  style={{
                    ...styles.subServicesContainer,
                    width: isMobile ? '80%' : '100%',
                  }}
                >
                  <img src={christmas} alt='christmas' style={{height: '80px', position: 'absolute', transform: 'scale(-1, 1)', marginTop: '-50px', marginLeft: '-50px', zIndex: '0'}}/>
                  <div style={styles.subServicesTitleContainer}>
                    <img
                      alt='tools'
                      src={service.image}
                      style={{width: '100%', borderRadius: '12px'}}/>
                  </div>
                  <div style={styles.subServicesTitleContainer}>
                    <h3 style={{color: '#000', fontWeight: 'bold', textAlign: 'center', marginTop: '15px'}}>
                      {service.title}
                    </h3>
                    <h3 style={{color: '#000', textAlign: 'center', marginTop: '15px'}}>
                      ${service.price}+
                    </h3>
                  </div>
                  { isDetailInfoOpen && selectedService === service.title ?
                   (
                    <div style={{height: '100px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>detail info</p>
                    </div>
                   ) : null
                  }

                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};


export default Christmas;
