import React from 'react';
import styles from './HomeStyle';
import {Navbar} from '../Components/Navbar';
import {Footer} from '../Components/Footer';
const Faqs = () => {
  return (
    <div style={styles.conatiner}>
      <Navbar />
      <div style={{marginTop: '100px', zIndex: '1'}}>
                Faqs
      </div>
      <Footer/>
    </div>
  );
};


export default Faqs;
