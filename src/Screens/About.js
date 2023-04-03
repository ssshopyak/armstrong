import React from 'react'
import styles from './HomeStyle'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
const About = () => {
    return (
        <div style={styles.conatiner}>
            <Navbar />
            <div style={{marginTop:'100px', zIndex:'1'}}>
                About
            </div>
            <Footer/>
        </div>
    )
}


export default About
