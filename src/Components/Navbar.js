import React, {useState, useRef} from 'react';
import styles from './NavbarStyle';
import {motion} from 'framer-motion/dist/framer-motion';
import logo from '../images/Logo.png';
import {Link, useHistory} from 'react-router-dom';
import down from '../images/down.png';
import menu from '../images/menu.svg';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export const Navbar = () => {
  const history = useHistory();
  const links = ['About us', 'Services', 'FAQs'];
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const isMobile = windowSize.current[0] < 850;
  const [isOpenService, setIsOpenService] = useState(false);
  const [
    isOpenCleaningSubService,
    setIsOpenCleaningSubService,
  ] = useState(false);
  const [isOpenOutdoorSubService, setIsOpenOutdoorSubService] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenCleaningService = () => {
    setIsOpenCleaningSubService(!isOpenCleaningSubService);
  };

  const handleOpenOutdoorService = () => {
    setIsOpenOutdoorSubService(!isOpenOutdoorSubService);
  };

  const toggleDrawer = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleOpenService = () => {
    setIsOpenService(!isOpenService);
  };

  const list = {
    visible: {
      clipPath: 'inset(0% 0% 0% 0% round 10px)',
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
        staggerChildren: 0.001,
      },
    },
    hidden: {
      clipPath: 'inset(10% 50% 90% 50% round 10px)',
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.05,
      },
    },
  };

  const item = {
    visible: {opacity: 1, x: 0, scale: 1, transition: {duration: 0.5}},
    hidden: {opacity: 0, x: 0, scale: 0.1},
  };

  return (

    <><div style={styles.navbarContainer}>
      <div style={styles.navbarParts}>
        <Link to='/'>
          <img src={logo} alt='Armstrong'style={{height: '80px'}} />
        </Link>
      </div>
      {isMobile ?
                (
                    <>
                      <img src={menu} alt='=' onClick={toggleDrawer} />
                    </>
                ) :
                (
                    <>
                      <div style={styles.alignItemsCenter}>
                        {links.map((link) => {
                          return (
                            <div key={link} style={styles.flexDirectionRow}>
                              <Link
                                to={`/${link === 'About us' ? 'About' : link}`}
                                style={styles.alignItemsCenter}>
                                <span
                                  className='linkHover'
                                  style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                  }}
                                >
                                  {link}
                                </span>
                              </Link>
                              {link === 'Services' ?
                                (
                                    <img
                                      src={down}
                                      alt='v'
                                      style={{
                                        height: '24px',
                                        transition: 'transform .5s',
                                        transform: isOpenService ? 'rotate(180deg)' : 'rotate(0deg)',
                                      }}
                                      onClick={handleOpenService} />
                                ) : null}
                              {link === 'Services' & isOpenService ?
                                (
                                    <motion.div
                                      initial="hidden"
                                      animate="visible"
                                      variants={list}
                                      style={styles.serviceContainer}>
                                      <motion.span
                                        variants={item}
                                        className='linkHover'
                                        onClick={()=>{
                                          history.push('/Property');
                                        }}
                                        style={{...styles.services, marginTop: '-10px'}}>
                                        {'Property preservation maintenance and inspections'}
                                      </motion.span>
                                      <motion.hr variants={item} />
                                      <motion.span
                                        variants={item}
                                        className='linkHover'
                                        onClick={()=>{
                                          history.push('/Christmas');
                                        }}
                                        style={styles.services}>
                                        {'Christmas and holiday lighting decoration services'}
                                      </motion.span>
                                      <motion.hr variants={item} />
                                      <motion.span variants={item} className='linkHover' style={styles.services}>
                                        <span>{'Outdoor services & landscaping services'}</span>
                                        <img
                                          src={down}
                                          alt='v'
                                          style={{
                                            height: '18px',
                                            marginLeft: '5px',
                                            transition: 'transform .5s',
                                            transform: isOpenOutdoorSubService ? 'rotate(180deg)' : 'rotate(0deg)',
                                          }}
                                          onClick={handleOpenOutdoorService} />
                                      </motion.span>
                                      <motion.hr variants={item} />
                                      {isOpenOutdoorSubService ?
                                            (
                                                <div style={styles.subServices}>
                                                  <span style={styles.subService}>{'Pawer washing'}</span>
                                                  <span style={styles.subService}>{'Window washing'}</span>
                                                  <span style={styles.subService}>{'Gutter services'}</span>
                                                  <span style={styles.subService}>{'Landscaping services'}</span>
                                                </div>
                                            ) : null}
                                      <motion.span variants={item} className='linkHover' style={styles.services}>
                                        <span>{'House Cleaning services'}</span>
                                        <img
                                          src={down}
                                          alt='v'
                                          style={{
                                            height: '18px',
                                            marginLeft: '5px',
                                            transition: 'transform .5s',
                                            transform: isOpenCleaningSubService ? 'rotate(180deg)' : 'rotate(0deg)',
                                          }}
                                          onClick={handleOpenCleaningService} />
                                      </motion.span>
                                      <motion.hr variants={item} />
                                      {isOpenCleaningSubService ?
                                            (
                                                <div style={styles.subServices}>
                                                  <span
                                                    style={styles.subService}>
                                                    {'House Cleaning & Sanitizing'}
                                                  </span>
                                                  <span
                                                    style={styles.subService}>
                                                    {'Apartment Cleaning & Sanitizing'}
                                                  </span>
                                                  <span
                                                    style={styles.subService}>
                                                    {'Move In/Move Out Cleaning'}
                                                  </span>
                                                  <span
                                                    style={styles.subService}>
                                                    {'One-Time Cleans'}
                                                  </span>
                                                </div>
                                            ) : null}
                                    </motion.div>
                                ) : null}
                            </div>
                          );
                        })}
                      </div>
                      <div style={styles.navbarParts}>
                        <Link to='/'><span className='linkHover'>Contact us</span></Link>
                      </div>
                    </>
                )}
    </div>
    <Drawer
      open={isMenuOpen}
      onClose={toggleDrawer}
      direction='right'
      style={{backgroundColor: '#F4F4F4', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <div style={{...styles.alignItemsCenter, flexDirection: 'column'}}>
        {links.map((link) => {
          return (
            <div key={link} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={styles.flexDirectionRow}>
                <Link to={`/${link === 'About us' ? 'About' : link}`} style={styles.alignItemsCenter}>
                  <span className='linkHover' style={{marginLeft: '10px', marginRight: '10px'}}>{link}</span>
                </Link>
                {
                    link === 'Services' ?
                        (
                            <img
                              src={down}
                              alt='v'
                              style={{
                                height: '24px',
                                transition: 'transform .5s',
                                transform: isOpenService ? 'rotate(180deg)' : 'rotate(0deg)',
                              }}
                              onClick={handleOpenService} />
                        ) : null
                }
              </div>
              {link === 'Services' & isOpenService ?
                (
                    <div style={{padding: '10px'}}>
                      <span
                        className='linkHover'
                        onClick={()=>{
                          history.push('/Property');
                        }}
                        style={{...styles.services, marginTop: '-10px'}}
                      >
                        {'Property preservation maintenance and inspections'}
                      </span>
                      <hr />
                      <span
                        className='linkHover'
                        onClick={()=>{
                          history.push('/Christmas');
                        }}
                        style={styles.services}
                      >
                        {'Christmas and holiday lighting decoration services'}
                      </span>
                      <hr />
                      <span className='linkHover' style={styles.services}>
                        <span>{'Outdoor services & landscaping services'}</span>
                        <img
                          src={down}
                          alt='v'
                          style={{
                            height: '18px',
                            marginLeft: '5px',
                            transition: 'transform .5s',
                            transform: isOpenOutdoorSubService ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          onClick={handleOpenOutdoorService} />
                      </span>
                      <hr />
                      {isOpenOutdoorSubService ?
                            (
                                <div style={styles.subServices}>
                                  <span style={styles.subService}>{'Pawer washing'}</span>
                                  <span style={styles.subService}>{'Window washing'}</span>
                                  <span style={styles.subService}>{'Gutter services'}</span>
                                  <span style={styles.subService}>{'Landscaping services'}</span>
                                </div>
                            ) : null}
                      <span className='linkHover' style={styles.services}>
                        <span>{'House Cleaning services'}</span>
                        <img
                          src={down}
                          alt='v'
                          style={{
                            height: '18px',
                            marginLeft: '5px',
                            transition: 'transform .5s',
                            transform: isOpenCleaningSubService ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          onClick={handleOpenCleaningService} />
                      </span>
                      <hr />
                      {isOpenCleaningSubService ?
                            (
                                <div style={styles.subServices}>
                                  <span style={styles.subService}>{'House Cleaning & Sanitizing'}</span>
                                  <span style={styles.subService}>{'Apartment Cleaning & Sanitizing'}</span>
                                  <span style={styles.subService}>{'Move In/Move Out Cleaning'}</span>
                                  <span style={styles.subService}>{'One-Time Cleans'}</span>
                                </div>
                            ) : null}
                    </div>
                ) : null}
            </div>
          );
        })}
      </div>
      <div style={styles.navbarParts}>
        <Link to='/'><span className='linkHover'>Contact us</span></Link>
      </div>
    </Drawer>
    </>
  );
};
