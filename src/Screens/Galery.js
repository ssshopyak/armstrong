import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {useHistory} from 'react-router-dom';
import {sliderData} from './GaleryData';
import Slider from '../Components/Slider/Slider';
import {Button} from '../Components/Button';
import photo from '../images/Photo.png';
const Galery = () => {
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
  const isMobile = windowSize <= 1280;
  const history = useHistory();
  return (
    <div style={styles.conatiner}>
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        style={styles.bodyContainer}
      >
        <div style={{width: isMobile ? '90%' : null}}>
          <h1 style={{fontSize: '56px', display: 'flex', alignItems: 'center'}}>Photos <img src={photo} alt='hello)' style={{height: '56px'}}/></h1>
        </div>
        <div style={{...styles.textContainer, width: isMobile ? '90%' : '60%'}}>
          <div style={{width: isMobile ? null : '100%', margin: '20px 0px'}}>
            <Slider sliderData={sliderData} autoPlay={true}/>
          </div>
          <Button
            onClick={()=>{
              history.push('/Contact');
            }}
            title='Get started'
            backgroundColor={'#fff'}
            color={'#000'}
          />
        </div>
      </motion.div>
    </div>
  );
};


export default Galery;
