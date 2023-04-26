import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {LandscapingText} from './LandscapingText';
import {ContentBlock} from '../Components/ContentBlock';
import {sliderData} from './LandscapingData';
const Landscaping = () => {
  const mainContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const [windowSize] = useState(window.innerWidth);
  const isMobile = windowSize < 850;
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
          Take care of your exterior
          </h1>
          <h1 style={{fontSize: '56px'}}>
          with Armstrong Housing LLC
          </h1>
        </div>
        <ContentBlock
          title={'Landscaping services'}
          isSlider={true}
          sliderData={sliderData}
          bodyText={LandscapingText}
        />
      </motion.div>
    </div>
  );
};


export default Landscaping;

