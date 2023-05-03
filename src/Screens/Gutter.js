import React, {useState} from 'react';
import styles from './PropertyStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import {ContentBlock} from '../Components/ContentBlock';
import {GutterText} from './GutterText';
import {sliderData} from './GutterData';
import repair from '../images/gutterRepair2.jpg';
import guards from '../images/gutterGuards.jpg';
import cleaning from '../images/gutterclean.jpg';

const Gutter = () => {
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
  const isMobile = windowSize <= 1280;
  const services = [
    {
      title: 'Gutter cleaning',
      image: cleaning,
      data: [
        'Our team of experts has the knowledge and experience to clean your gutters thoroughly and remove any debris, leaves, or other materials that may be clogging them. We use specialized equipment to clean your gutters safely and effectively, without causing damage to your property.',
        'Regular gutter cleaning can help extend the life of your gutters and prevent costly repairs. It can also protect your property from water damage by ensuring that water flows smoothly through the gutters and away from the foundation.',
        'Don`t let clogged gutters become a problem for your property. Contact us today to schedule an appointment with one of our experts and get your gutters cleaned professionally. We offer competitive pricing and exceptional service to ensure that your gutters are functioning properly and efficiently year-round.',
      ],
    },
    {
      title: 'Gutter repair',
      image: repair,
      data: [
        'Our team of experts has the knowledge and experience to identify and repair a wide range of gutter issues, including leaks, damaged or rusted sections, loose or misaligned gutters, and more. We use specialized equipment and techniques to make repairs quickly and effectively, while also ensuring that your property is protected from damage.',
        'We take pride in providing our clients with exceptional service and quality workmanship. We use only the best materials and equipment to ensure that your gutter repairs are long-lasting and durable, and we stand behind our work with a satisfaction guarantee.',
        'Whether you need a simple repair or a more complex fix, we are here to help. Contact us today to schedule an appointment with one of our experts and get your gutters functioning properly again. Don`t wait until it`s too late – let us help you protect your property from water damage with our comprehensive gutter repair services.',
      ],
    },
    {
      title: 'Gutter guards',
      image: guards,
      data: [
        'Our team of experts has the knowledge and experience to install a wide range of gutter guards, including screens, filters, and covers, to suit your specific needs and preferences. With our high-quality gutter guards, you can enjoy peace of mind knowing that your gutters are protected from debris and clogs, and that they will continue to function properly and efficiently.',
        'Gutter guards can also help you save time and money by reducing the need for frequent gutter cleanings and repairs. They are a cost-effective solution to ensure that your gutters remain clean and clear, and that your property remains protected from water damage.',
      ],
    },
  ];
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
          Take care of your Gutter
          </h1>
          <h1 style={{fontSize: '56px'}}>
          with Armstrong Housing LLC
          </h1>
        </div>
        <ContentBlock
          title={'Gutter services'}
          isSlider={true}
          sliderData={sliderData}
          bodyText={GutterText}
        />
        <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
          <h2 style={{color: '#000'}}>List of Services</h2>
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
                    width: isMobile ? '100%' : '80%',
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row'}}>
                    <div style={{...styles.subServicesTitleContainerGutter, width: isMobile ? '100%' : '50%'}}>
                      <h4 style={{color: '#000', textAlign: 'left', fontSize: '20px'}}>
                        {service.title}
                      </h4>
                      {
                        service.data.map((subTitle) => (
                          <span
                            key={subTitle}
                            style={{
                              marginTop: '5px',
                              marginBottom: '5px',
                              textAlign: 'left',
                              fontSize: '18px',
                            }}
                          >
                            {`${subTitle}`}
                          </span>
                        ))
                      }
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
                    </div>
                    <img src={service.image} alt='hello' style={{width: isMobile ? '100%' : '45%', borderRadius: '12px'}}/>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};


export default Gutter;

