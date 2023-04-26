import React, {useState} from 'react';
import styles from './PropertyStyle';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion/dist/framer-motion';
import {Button} from '../Components/Button';
import small from '../images/house_small.webp';
import medium from '../images/house_medium.webp';
import large from '../images/house_large.webp';
import extraLarge from '../images/house_extra_large.webp';
import christmas from '../images/christmas.webp';
import santa from '../images/santa.png';
import christmasPhoto from '../images/christmasPhoto.jpg';

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
  const isMobile = windowSize < 1000;
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
  const history = useHistory();
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
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <div style={{display: 'flex', width: '100%', margin: '20px 0px'}}>
            <span style={styles.bodyText}>
              <h2 style={{color: '#000'}}>
                Christmas Light Installation
              </h2>
              <p style={styles.pText}>
                The holiday season is a special time of year
                that is filled with the warmth of family,
                friends and memories.
              </p>
              <p style={styles.pText}>
                Professional decorative lighting
                and displays greatly enhance the special experience that comes
                from this joyous time. For over 30 years, the professional designers,
                installers and staff of Christmas Decor have been a part
                of helping families and businesses create a magical experience
                for loved ones and clients.
              </p>
              <p style={styles.pText}>
                Our highly trained staff can provide the one stop solution,
                comprehensive service program you are looking for to turn your
                unique decorating needs into reality.
              </p>
              <p style={styles.pText}>
                We offer the best in design consultation,
                installation, maintenance and prompt take down services.
                The Christmas Décor team will work with you to design
                a display concept that will perfectly fit your goals and budget.
              </p>
            </span>
            <img src={christmasPhoto} style={{width: '50%', marginTop: '30px', borderRadius: '12px'}}/>
          </div>
          <Button
            onClick={()=>{
              history.push('/');
            }}
            title='Get started'
            backgroundColor={'#fff'}
            color={'#000'}
          />
        </div>
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <h2 style={{color: '#000', marginBottom: '20px'}}>What is the price of Christmas lights?</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {
              services.map((service) => (
                <motion.div
                  variants={item}
                  className='subServicesContainer'
                  key={service.title}
                  style={{
                    ...styles.subServicesContainer,
                    width: isMobile ? '80%' : '30%',
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
