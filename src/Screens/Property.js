import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import tools from '../images/tools.png';
import janitorial from '../images/janitorial.png';
import gloves from '../images/cleaning-gloves.png';
import inspection from '../images/inspection.png';
import lawnMower from '../images/lawn-mower.png';
import property from '../images/property.jpg';
import {ContentBlock} from '../Components/ContentBlock';
import {PropertyText} from './PropertyText';

const Property = () => {
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
  const isMobile = windowSize <= 1280;
  const services = [
    {
      title: 'Construction & Repair Services',
      image: tools,
      data: [
        'Renovations',
        'Paint',
        'Carpet',
        'Framing',
        'Drywall',
        'Trim',
        'Windows',
      ],
    },
    {
      title: 'Janitorial & Disposal Services',
      image: janitorial,
      data: [
        'Cleanouts',
        'Light and Heavy Cleaning',
        'Window Cleaning',
        'Floor Waxing, Stripping, Polishing',
      ],
    },
    {
      title: 'Disaster & Emergency Clean Up',
      image: gloves,
      data: [
        'Water Extraction',
        'Mold Remediation and Removal',
        'Debris Removal',
        'Demolition',
      ],
    },
    {
      title: 'Inspections & Security',
      image: inspection,
      data: [
        'Occupancy Checks',
        'Rekey',
        'Board Up',
        'Photos and Videos',
        'Insurance Inspection',
        'Property Repair Inspection',
      ],

    },
    {
      title: 'Landscape Maintenance',
      image: lawnMower,
      data: [
        'New Installation',
        'Mowing',
        'Edging',
        'Tree Trimming and removal',
        'Fertilization',
        'Irrigation',
        'Hardscaping',
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
          Maintain Your Property Value
          </h1>
          <h1 style={{fontSize: '56px'}}>
          with Armstrong Housing LLC
          </h1>
        </div>
        <ContentBlock
          title={'Property preservation maintenance and inspections'}
          isSlider={false}
          bodyText={PropertyText}
          photo={property}
        />
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <h2 style={{color: '#000'}}>
            Full-Service REO Foreclosure Services
          </h2>
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
                    width: isMobile ? '80%' : '30%',
                  }}
                >
                  <div style={styles.subServicesTitleContainer}>
                    <h4 style={{color: '#000', textAlign: 'center', fontSize: '20px'}}>
                      {service.title}
                    </h4>
                    <img
                      alt='tools' src={service.image} style={{height: '48px'}}/>
                  </div>
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
                        {` - ${subTitle}`}
                      </span>
                    ))
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


export default Property;
