import React, {useState} from 'react';
import styles from './PropertyStyle';
import {sliderData} from './PowerData';
import {motion} from 'framer-motion/dist/framer-motion';
import {ContentBlock} from '../Components/ContentBlock';
import {PowerText} from './PowerText';

const Power = () => {
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
          title={'Power washing'}
          isSlider={true}
          sliderData={sliderData}
          bodyText={PowerText}
        />
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <h2 style={{color: '#000'}}>Pricing 2023</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            style={{
              width: isMobile ? '85%' : '60%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <motion.table id="customers" variants={item}>
              <tr>
                <th>House Type</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>One story</td>
                <td>$250-$350</td>
              </tr>
              <tr>
                <td>Two story</td>
                <td>$350-$450</td>
              </tr>
              <tr>
                <td>Three story</td>
                <td>$450-$550</td>
              </tr>
            </motion.table>
            <motion.table id='customers' variants={item}>
              <tr>
                <th>Garage type</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>One car</td>
                <td>$120</td>
              </tr>
              <tr>
                <td>Two car</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Three car</td>
                <td>$190</td>
              </tr>
            </motion.table>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};


export default Power;

