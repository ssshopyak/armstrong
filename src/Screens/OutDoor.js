import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {useHistory} from 'react-router-dom';
import power from '../images/pressure-washer.png';
import gutter from '../images/roof.png';
import landscaping from '../images/grass-cutter.png';
import windows from '../images/window.png';
import property from '../images/outdoor.jpg';
import {ContentBlock} from '../Components/ContentBlock';
import {OutDoorText} from './OutDoorText';


const Outdoor = () => {
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
      title: 'Power washing',
      id: 'Power',
      image: power,
      data: [
        'Siding washing',
        'Deck washing',
        'Concrete washing',
      ],
    },
    {
      title: 'Gutter services',
      id: 'Gutter',
      image: gutter,
      data: [
        'Gutter cleaning',
        'Gutter repair',
        'Gutter guards',
      ],
    },
    {
      title: 'Landscaping services',
      id: 'Landscaping',
      image: landscaping,
      data: [
        'Bush cutting',
        'Grass cutting',
        'Tree cutting',
      ],
    },
    {
      title: 'Window washing',
      id: 'Window',
      image: windows,
      data: [
        'Our certified windows washers have extensive experience cleaning all types of windows',
      ],
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
        <div style={{width: isMobile ? '85%' : null}}>
          <h1 style={{fontSize: '56px'}}>
          Take care of your yard
          </h1>
          <h1 style={{fontSize: '56px'}}>
          with Armstrong Housing LLC
          </h1>
        </div>
        <ContentBlock
          title={'Outdoor services & landscaping services'}
          isSlider={false}
          bodyText={OutDoorText}
          photo={property}
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
                    width: isMobile ? '80%' : '30%',
                  }}
                  onClick={()=>{
                    history.push(`${service.id}`);
                  }}
                >
                  <div style={styles.subServicesTitleContainer}>
                    <h4 style={{color: '#000', textAlign: 'center', fontSize: '20px'}}>
                      {service.title}
                    </h4>
                    <img
                      alt='tools' src={service.image} style={{height: '48px', tintColor: '#F58220'}}/>
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


export default Outdoor;

