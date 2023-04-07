import React from 'react';
import '../index.css';
import customer from '../images/support.png';
import location from '../images/location.png';
import email from '../images/email.png';
import delivery from '../images/tracking.png';
import guaranteed from '../images/guarantee.png';
import wallet from '../images/wallet.png';
import {Link} from 'react-router-dom';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainers'>
        <h2 style={{color: '#f16a28'}}>Contact Information</h2>
        <div className='shopInfo'>
          <div>
            <img style={{width: '50px', color: '#fff', padding: '5px'}}src={customer} alt={'not found'}/>
          </div>
          <div style={{color: '#fff', display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
            <span style={{color: '#fff'}}>Call Customer Services</span>
            <span>
              <a
                className='linkFotterHover'
                style={{color: '#fff'}}
                href="tel:+1-516-721-1119"
              >
                516-721-1119 Roman
              </a>
            </span>
            <span>
              <a
                className='linkFotterHover'
                style={{color: '#fff'}}
                href="tel:+1-630-796-8289"
              >
                630-796-8289 Andry
              </a>
            </span>
          </div>
        </div>
        <div className='shopInfo'>
          <div>
            <img style={{width: '50px', color: '#fff', padding: '5px'}}src={location} alt={'not found'}/>
          </div>
          <div style={{color: '#fff', display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
            <span style={{color: '#fff'}}>Address</span>
            <span style={{color: '#fff'}}>1631 Sunflower Ct, Romeoville, IL, 60446</span>
          </div>
        </div>
        <div className='shopInfo'>
          <div>
            <img style={{width: '50px', color: '#fff', padding: '5px'}}src={email} alt={'not found'}/>
          </div>
          <div style={{color: '#fff', display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
            <span style={{color: '#fff'}}>Email</span>
            <span style={{color: '#fff'}}>Info@Armstrong.com</span>
          </div>
        </div>
      </div>
      <div className='footerContainers'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2 style={{color: '#f16a28'}}>Information</h2>
          <Link
            to="/"
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}
          >
            About us
          </Link>
          <Link
            to="/regulation"
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}
          >
            Store Regulations
          </Link>
        </div>
      </div>
      <div className='footerContainers'>
        <h2 style={{color: '#f16a28'}} className='footerTag'>Services</h2>
        <span style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/category',
              state: {Category: 'Kenworth', SubCategory: null, Model: null, KeyWord: null},
            }}
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
                        Property preservation maintenance and inspections
          </Link>
        </span>
        <span style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/category',
              state: {Category: 'Peterbilt', SubCategory: null, Model: null, KeyWord: null},
            }}
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
                        Christmas and holiday lighting decoration services
          </Link>
        </span>
        <span style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/category',
              state: {Category: 'Freightliner', SubCategory: null, Model: null, KeyWord: null},
            }}
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
            {`Outdoor services & landscaping services`}
          </Link>
        </span>
        <span style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/category',
              state: {Category: 'DearGuards', SubCategory: null, Model: null, KeyWord: null},
            }}
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
                        Professional property maintenance
          </Link>
        </span>
        <span style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/category',
              state: {Category: 'Volvo', SubCategory: null, Model: null, KeyWord: null},
            }}
            className='linkFotterHover'
            style={{color: '#fff', marginTop: '5px', marginBottom: '5px'}}>
                        House Cleaning services
          </Link>
        </span>
      </div>
      <div className='footerContainers'>
        <h2 style={{color: '#f16a28'}}>Our Advantages</h2>
        <div className='shopInfo'>
          <div>
            <img style={{width: '50px', color: '#fff', padding: '5px'}}src={wallet} alt={'not found'}/>
          </div>
          <div style={{color: '#fff', display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
            <span style={{color: '#fff'}}>We provide a bonus discounts program for our customers</span>
          </div>
        </div>
        <div className='shopInfo'>
          <div>
            <img style={{width: '50px', color: '#fff', padding: '5px'}}src={guaranteed} alt={'not found'}/>
          </div>
          <div style={{color: '#fff', display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
            <span style={{color: '#fff'}}>A guarantee of high quality or a full refund</span>
          </div>
        </div>
        <div className='shopInfo'>
          <div>
            <img style={{width: '50px', color: '#fff', padding: '5px'}}src={delivery} alt={'not found'}/>
          </div>
          <div style={{color: '#fff', display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
            <span style={{color: '#fff'}}>Quick arrival at destination</span>
          </div>
        </div>
      </div>
    </div>
  );
};
