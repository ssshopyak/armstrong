import React from 'react';
import styles from './HomeStyle';
import {Navbar} from '../Components/Navbar';
import {Footer} from '../Components/Footer';
const Services = () => {
  return (
    <div style={styles.conatiner}>
      <Navbar />
      <div style={{marginTop: '100px', zIndex: '1'}}>
                Services
      </div>
      <Footer/>
    </div>
  );
};


export default Services;
