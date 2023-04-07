import React, {useRef} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {useHistory} from 'react-router-dom';
import {Navbar} from '../Components/Navbar';
import {Footer} from '../Components/Footer';
import {Button} from '../Components/Button';
import tools from '../images/tools.png';
import janitorial from '../images/janitorial.png';
import gloves from '../images/cleaning-gloves.png';
import inspection from '../images/inspection.png';
import lawnMower from '../images/lawn-mower.png';

const Property = () => {
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
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const isMobile = windowSize.current[0] < 850;
  const services = [
    {
      title: 'Construction & Repair Services',
      image: tools,
      data: [
        'Renovations',
        'Paint',
        'Carpet',
        'Framing',
        'Drywall',
        'Trim',
        'Windows',
      ],
    },
    {
      title: 'Janitorial & Disposal Services',
      image: janitorial,
      data: [
        'Cleanouts',
        'Light and Heavy Cleaning',
        'Window Cleaning',
        'Floor Waxing, Stripping, Polishing',
      ],
    },
    {
      title: 'Disaster & Emergency Clean Up',
      image: gloves,
      data: [
        'Water Extraction',
        'Mold Remediation and Removal',
        'Debris Removal',
        'Demolition',
      ],
    },
    {
      title: 'Inspections & Security',
      image: inspection,
      data: [
        'Occupancy Checks',
        'Rekey',
        'Board Up',
        'Photos and Videos',
        'Insurance Inspection',
        'Property Repair Inspection',
      ],

    },
    {
      title: 'Landscape Maintenance',
      image: lawnMower,
      data: [
        'New Installation',
        'Mowing',
        'Edging',
        'Tree Trimming and removal',
        'Fertilization',
        'Irrigation',
        'Hardscaping',
      ],
    },
  ];
  const history = useHistory();
  return (
    <div style={styles.conatiner}>
      <Navbar />
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        style={styles.bodyContainer}
      >
        <h1 className='title'>
            Property preservation maintenance and inspections
        </h1>
        <div style={styles.textContainer}>
          <h3 style={{color: '#fff'}}>
            Maintain Your Property Value with Armstrong Housing LLC
          </h3>
          <span style={styles.bodyText}>
            We are a full-service provider for REO property preservation
            and foreclosure services for banks, realtors, investors,
            and lenders. Armstrong Housing LLC is a strong and reliable company
            we are helping REO properties maintain their value.
            Know your property is in safe hands when you
            choose our professionals.
            Our services are for both Commercial and Residential REO properties.
            We handle portfolio repairs, renovations,
            portfolio maintenance programs, and much more.
            Our team handles all aspects of Property Prese
            Our team handles all aspects of Property Preservation,
            including minor and major repairs and renovations,
            so your investment is always ready to go to the market.
            We work with you to ensure your properties are preserved and
            maintained in a way that complies with
            investor and regulator guidelines and your local municipal codes.
          </span>
          <Button
            onClick={()=>{
              history.push('/');
            }}
            title='Get started'
            backgroundColor={'#fff'}
            color={'#F58220'}
          />
        </div>
        <div style={styles.textContainer}>
          <h3 style={{color: '#fff'}}>Full-Service REO Foreclosure Services</h3>
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
                    width: isMobile ? null : '30%',
                  }}
                >
                  <div style={styles.subServicesTitleContainer}>
                    <h4 style={{color: '#F58220', textAlign: 'center'}}>
                      {service.title}
                    </h4>
                    <img
                      alt='tools' src={service.image} style={{height: '48px'}}/>
                  </div>
                  {
                    service.data.map((subTitle) => (
                      <span
                        key={subTitle}
                        style={{
                          marginTop: '5px',
                          marginBottom: '5px',
                          textAlign: 'left',
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
      <Footer/>
    </div>
  );
};


export default Property;
