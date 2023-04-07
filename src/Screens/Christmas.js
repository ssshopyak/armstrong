import React, {useRef} from 'react';
import styles from './PropertyStyle';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion/dist/framer-motion';
import {Navbar} from '../Components/Navbar';
import {Footer} from '../Components/Footer';
import {Button} from '../Components/Button';
import small from '../images/house_small.webp';
import medium from '../images/house_medium.webp';
import large from '../images/house_large.webp';
import extraLarge from '../images/house_extra_large.webp';

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
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const isMobile = windowSize.current[0] < 850;
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
      <Navbar />
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        style={styles.bodyContainer}
      >
        <h1 className='title'>
            Christmas Light Installation
        </h1>
        <div style={styles.textContainer}>
          <h3 style={{color: '#fff'}}>
            Christmas will be here quicker than you think.
          </h3>
          <span style={styles.bodyText}>
          The holiday season is a special time of year
          that is filled with the warmth of family,
          friends and memories. Professional decorative lighting
          and displays greatly enhance the special experience that comes
          from this joyous time. For over 30 years, the professional designers,
          installers and staff of Christmas Decor have been a part
          of helping families and businesses create a magical experience
          for loved ones and clients.
          </span>
          <span style={styles.bodyText}>
          Our highly trained staff can provide the one stop solution,
          comprehensive service program you are looking for to turn your
          unique decorating needs into reality.
          We offer the best in design consultation,
          installation, maintenance and prompt take down services.
          The Christmas Décor team will work with you to design
          a display concept that will perfectly fit your goals and budget.
          </span>
          <Button
            onClick={()=>{
              history.push('/');
            }}
            title='Get started'
            backgroundColor={'#fff'}
            color={'#F58220'}
          />
        </div>
        <div style={styles.textContainer}>
          <h3 style={{color: '#fff'}}>What is the price of Christmas lights?</h3>
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
                    width: isMobile ? null : '30%',
                  }}
                >
                  <div style={styles.subServicesTitleContainer}>
                    <img
                      alt='tools'
                      src={service.image}
                      style={{width: '100%', borderRadius: '12px'}}/>
                  </div>
                  <div style={styles.subServicesTitleContainer}>
                    <h3 style={{color: '#F58220', textAlign: 'center', marginTop: '15px'}}>
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
      <Footer/>
    </div>
  );
};


export default Christmas;
