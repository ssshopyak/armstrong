import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {ContentBlock} from '../Components/ContentBlock';
import {sliderData} from './HouseCleanData';
import {HouseCleanText} from './HouseCleanText';
import houseClean1 from '../images/houseClean1.jpg';
import houseClean2 from '../images/houseClean2.jpg';
import houseClean3 from '../images/houseClean3.png';
import houseClean4 from '../images/houseClean4.jpg';

const HouseClean = () => {
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
  const isMobile = windowSize < 850;
  const services = [
    {
      title: 'House Cleaning & Sanitizing',
      image: houseClean1,
      data: [
        'Our house cleaning and sanitizing services are designed to meet the unique needs of your home and family. We offer regular cleaning services, deep cleaning services, and one-time cleaning services, as well as customized cleaning plans tailored to your specific needs.',
        'During our cleaning and sanitizing process, we pay special attention to frequently touched surfaces such as doorknobs, light switches, countertops, and handles, where germs and bacteria can accumulate. We use EPA-registered disinfectants that are effective against a broad spectrum of viruses and bacteria, including COVID-19, to ensure that your home is clean and healthy.',
        'At Armstrong Housing LLC, we take pride in providing our customers with a clean, healthy, and safe living environment. Contact us today to learn more about our house cleaning and sanitizing services, and how we can help you maintain a clean and healthy home. With our professional cleaning services, you can enjoy peace of mind knowing that your home is clean, sanitized, and safe for you and your family.',
      ],
    },
    {
      title: 'Apartment Cleaning & Sanitizing',
      image: houseClean2,
      data: [
        'At our company, we understand that maintaining a clean and sanitary living space is essential for your health and wellbeing. That`s why we offer a comprehensive apartment cleaning and sanitizing service to ensure your home is free from germs, dust, and allergens. Our professional cleaning team is trained to provide exceptional service and uses the latest cleaning techniques and equipment to achieve outstanding results.',
        'Our apartment cleaning and sanitizing service includes a thorough cleaning of all living spaces, including bedrooms, bathrooms, living rooms, and kitchens. We pay attention to every detail, from wiping down surfaces to vacuuming carpets and sanitizing high-touch areas such as doorknobs and light switches. We use only eco-friendly and non-toxic cleaning products that are safe for you, your family, and your pets. With our service, you can enjoy a spotless and germ-free living space that promotes health and wellbeing. Contact us today to schedule your apartment cleaning and sanitizing service and experience the difference of a truly clean home.',
      ],
    },
    {
      title: 'Move In/Move Out Cleaning',
      image: houseClean3,
      data: [
        'Are you moving into a new home or getting ready to move out of your current one? Don`t stress about cleaning - let us handle it for you! Our move in/move out cleaning service is designed to take care of all your cleaning needs, so you can focus on the more important aspects of your move.',
        'Our professional cleaning team is experienced in handling move in/move out cleaning projects, and we know exactly what it takes to make a home spotless and ready for its new occupants. We offer a thorough cleaning of all living spaces, including bedrooms, bathrooms, living rooms, and kitchens. We also provide additional services such as window cleaning, carpet cleaning, and appliance cleaning to ensure that your home is in top condition.',
        'With our move in/move out cleaning service, you can rest assured that your new home will be fresh and clean, or your old home will be left in pristine condition for the next occupants. We use only eco-friendly and non-toxic cleaning products that are safe for you, your family, and your pets. Don`t let cleaning stress you out during this important time - contact us today to schedule your move in/move out cleaning service and let us take care of the rest!',
      ],
    },
    {
      title: 'One-Time Cleans',
      image: houseClean4,
      data: [
        'Do you have a special event or occasion coming up and need your home to be spotless? Or maybe you just need a deep cleaning to refresh your living space? Our one-time cleaning service is the perfect solution for you. We provide a comprehensive one-time cleaning service that is tailored to your specific needs.',
        'Our professional cleaning team is trained to provide exceptional service and uses the latest cleaning techniques and equipment to achieve outstanding results. We offer a thorough cleaning of all living spaces, including bedrooms, bathrooms, living rooms, and kitchens. We also provide additional services such as window cleaning, carpet cleaning, and appliance cleaning to ensure that your home is in top condition.',
        'With our one-time cleaning service, you can enjoy a clean and fresh living space without any long-term commitment. We use only eco-friendly and non-toxic cleaning products that are safe for you, your family, and your pets. Contact us today to schedule your one-time cleaning service and experience the difference of a truly clean home. Whether it`s for a special occasion or just to refresh your living space, we`ve got you covered.',
      ],
    },
  ];
  return (
    <div style={styles.conatiner}>
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        style={styles.bodyContainer}
      >
        <div style={{width: isMobile ? '85%' : null}}>
          <h1 style={{fontSize: '56px'}}>
          Take care of your House
          </h1>
          <h1 style={{fontSize: '56px'}}>
          with Armstrong Housing LLC
          </h1>
        </div>
        <ContentBlock
          title={'House Cleaning services'}
          isSlider={true}
          sliderData={sliderData}
          bodyText={HouseCleanText}
        />
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <h2 style={{color: '#000'}}>List of Services</h2>
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
                  key={service.title}
                  className='subServicesContainer'
                  style={{
                    ...styles.subServicesContainer,
                    width: isMobile ? '100%' : '80%',
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row'}}>
                    <div style={{...styles.subServicesTitleContainerGutter, width: isMobile ? '100%' : '50%'}}>
                      <h4 style={{color: '#000', textAlign: 'left', fontSize: '20px'}}>
                        {service.title}
                      </h4>
                      {
                        service.data.map((subTitle) => (
                          <span
                            key={subTitle}
                            style={{
                              marginTop: '5px',
                              marginBottom: '5px',
                              textAlign: 'left',
                              fontSize: '18px',
                            }}
                          >
                            {`${subTitle}`}
                          </span>
                        ))
                      }
                    </div>
                    <img src={service.image} alt='hello' style={{width: isMobile ? '100%' : '45%', borderRadius: '12px'}}/>
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


export default HouseClean;

