import React from 'react'
import styles from './HomeStyle'
import { Navbar } from '../Components/Navbar'
import Slider from '../Components/Slider/Slider'
import aboutus from '../images/aboutus.jpg'
import { Footer } from '../Components/Footer'
const Home = () => {
    return (
        <div style={styles.conatiner}>
            <Navbar />
            <div style={{marginTop:'100px', zIndex:'1'}}>
                <Slider/>
            </div>
            <div>
                <div style={{display:'flex', marginTop:'25px', justifyContent:'space-around', alignItems:'center'}}>
                    <img src={aboutus} alt='aboutus' style={{borderRadius:'24px', marginLeft:'50px'}}/>
                    <span style={{whiteSpace: 'pre-line',textAlign:'right', fontSize:'18px'}}>
                        <span style={{fontSize:'48px', fontWeight:'bold', justifyContent:'end', width:'100%', display:'flex', marginBottom:'20px', color:'#F58220', textAlign:'right'}}>About Us</span>
                        {`Armstrong Housing LLC is a property management company \n
                        that specifies in Property preservation and Repairs.\n
                        Our history and knowledge of HUD and REO requirements of property securing,\n
                        maintenance and repairs make us an ideal partner for asset protection.\n
                        We are dedicated to providing quality services\n
                        that are supported by a best-in-class customer service experience\n
                        that is evident through our long-tenured relationships\n
                        with many of the largest financial institutions in the industry.`}
                    </span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Home
