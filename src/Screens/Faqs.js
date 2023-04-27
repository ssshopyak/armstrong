import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {useHistory} from 'react-router-dom';
import {FaqsText} from './FaqsText';
import {Button} from '../Components/Button';
const Faqs = () => {
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
          Frequently Asked Question(s)
          </h1>
        </div>
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <div style={{display: 'flex', width: '100%', margin: '20px 0px', flexDirection: isMobile ? 'column' : 'row'}}>
            <span style={{...styles.bodyText, width: isMobile ? '100%' : '100%'}}>
              {
                FaqsText.map((text) => (
                  <p key={text} style={{...styles.pText, width: isMobile ? '100%' : '100%'}}>
                    {text}
                  </p>
                ))
              }
            </span>
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


export default Faqs;
