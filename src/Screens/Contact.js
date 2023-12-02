import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {Button} from '../Components/Button';
import ContactForm from '../Components/ContactForm';
import hello from '../images/Hello.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';

const Contact = () => {
  const history = useHistory();
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
  return (
    <div style={styles.conatiner}>
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        style={styles.bodyContainer}
      >
        <div style={{marginTop: '80px', width: isMobile ? '85%' : null}}>
          <h1 style={{fontSize: '56px'}}>Love to hear from you, Get in touch <img src={hello} alt='hello)' style={{height: '56px'}}/></h1>
        </div>
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '85%'}}>
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row'}}>
            <div
              style={{
                width: isMobile ? '100%' : '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #d9d9d9',
                borderWidth: '0px',
                borderRightWidth: isMobile ? '0px' : '2px',
                borderBottomWidth: isMobile ? '2px' : '0px',
                justifyContent: 'center'}}>
              <h3 style={{fontSize: '42px', margin: '10px 0px', textAlign: 'center'}}>
                Contact Form
              </h3>
              <p style={{fontSize: '18px', textAlign: 'center', margin: '10px 0px', width: '90%'}}>
                Tell us everything you need to know about the land on which you want a well, also share your geolocation. We will be glad to cooperate with you!
              </p>
            </div>
            <div
              style={{
                width: isMobile ? '100%' : '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #d9d9d9',
                borderWidth: '0px',
                borderRightWidth: isMobile ? '0px' : '2px',
                borderBottomWidth: isMobile ? '2px' : '0px',
                justifyContent: 'center'}}>
              <h3 style={{fontSize: '42px', margin: '10px 0px', textAlign: 'center'}}>Contact Information</h3>
              <div>
                <a style={{fontSize: '18px', display: 'flex', margin: '5px 0px'}} href="tel:+1-516-721-1119"><img src={phone} alt='hello)' style={{height: '28px'}}/>+1-516-721-1119</a>
                <a style={{fontSize: '18px', display: 'flex', margin: '5px 0px'}} href="tel:+1-630-796-8289"><img src={phone} alt='hello)' style={{height: '28px'}}/>+1-630-796-8289</a>
                <span style={{fontSize: '18px', display: 'flex', margin: '5px 0px'}}><img src={mail} alt='hello)' style={{height: '28px'}}/>armstronghousingllc@gmail.com</span>
              </div>
            </div>
            <div
              style={{
                width: isMobile ? '100%' : '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
              <ContactForm/>
              <Button
                onClick={()=>{
                  history.push('/');
                }}
                title='Send a message'
                backgroundColor={'#fff'}
                color={'#000'}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export default Contact;
