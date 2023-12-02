import React from 'react';
import '../index.css';
import ua from '../images/ua.png';
import usa from '../images/usa.png';
import pl from '../images/pl.png';
import ru from '../images/ru.png';
import {Link} from 'react-router-dom';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainers'>
        <h2 style={{color: '#000'}}>Contact Information</h2>
        <div className='shopInfo'>
          <div>
            {/* <img style={{width: '50px', color: '#000', padding: '5px'}}src={customer} alt={'not found'}/> */}
          </div>
          <div style={{color: '#000', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#000', fontWeight: 'bold', marginTop: '10px'}}>Call Customer Services</span>
            <span style={{display: 'flex', alignItems: 'center'}}>
              <a
                className='linkFotterHover'
                style={{color: '#000'}}
                href="tel:+1-516-721-1119"
              >
                516-721-1119 Roman
              </a>
              <img src={usa} alt='usa' style={{height: '24px', marginLeft: '5px', marginRight: '5px'}}/>
              <img src={pl} alt='pl' style={{height: '24px', marginLeft: '5px', marginRight: '5px'}}/>
            </span>
            <span style={{display: 'flex', alignItems: 'center'}}>
              <a
                className='linkFotterHover'
                style={{color: '#000'}}
                href="tel:+1-630-796-8289"
              >
                630-796-8289 Andry
              </a>
              <img src={ua} alt='ua' style={{height: '24px', marginLeft: '5px', marginRight: '5px'}}/>
              <img src={ru} alt='ru' style={{height: '24px', marginLeft: '5px', marginRight: '5px'}}/>
            </span>
          </div>
        </div>
        <div className='shopInfo'>
          <div>
            {/* <img style={{width: '50px', color: '#000', padding: '5px'}}src={location} alt={'not found'}/> */}
          </div>
          <div style={{color: '#000', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#000', fontWeight: 'bold'}}>Address</span>
            <span style={{color: '#000'}}>1631 Sunflower Ct, Romeoville, IL, 60446</span>
          </div>
        </div>
        <div className='shopInfo'>
          <div>
            {/* <img style={{width: '50px', color: '#000', padding: '5px'}}src={email} alt={'not found'}/> */}
          </div>
          <div style={{color: '#000', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#000', fontWeight: 'bold'}}>Email</span>
            <span style={{color: '#000'}}>armstronghousingllc@gmail.com</span>
          </div>
        </div>
      </div>
      <div className='footerContainers'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2 style={{color: '#000'}}>Information</h2>
          <Link
            to="/"
            className='linkFotterHover'
            style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}
          >
            About us
          </Link>
        </div>
      </div>
      <div className='footerContainers'>
        <h2 style={{color: '#000'}} className='footerTag'>Services</h2>
        <span style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/Property',
            }}
            className='linkFotterHover'
            style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
                        Property preservation maintenance and inspections
          </Link>
        </span>
        <span style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/Christmas',
            }}
            className='linkFotterHover'
            style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
                        Christmas and holiday lighting decoration services
          </Link>
        </span>
        <span style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/Outdoor',
            }}
            className='linkFotterHover'
            style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
            {`Outdoor services & landscaping services`}
          </Link>
        </span>
        <span style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
          <Link
            to={{
              pathname: '/Houseclean',
            }}
            className='linkFotterHover'
            style={{color: '#000', marginTop: '5px', marginBottom: '5px'}}>
                        House Cleaning services
          </Link>
        </span>
      </div>
      <div className='footerContainers'>
        <h2 style={{color: '#000'}}>Our Advantages</h2>
        <div className='shopInfo' style={{margin: '15px 0px'}}>
          <div>
            {/* <img style={{width: '50px', color: '#000', padding: '5px'}}src={wallet} alt={'not found'}/> */}
          </div>
          <div style={{color: '#000', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#000'}}>We provide a bonus discounts program for our customers</span>
          </div>
        </div>
        <div className='shopInfo' style={{margin: '15px 0px'}}>
          <div>
            {/* <img style={{width: '50px', color: '#000', padding: '5px'}}src={guaranteed} alt={'not found'}/> */}
          </div>
          <div style={{color: '#000', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#000'}}>A guarantee of high quality or a full refund</span>
          </div>
        </div>
        <div className='shopInfo' style={{margin: '15px 0px'}}>
          <div>
            {/* <img style={{width: '50px', color: '#000', padding: '5px'}}src={delivery} alt={'not found'}/> */}
          </div>
          <div style={{color: '#000', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#000'}}>Quick arrival at destination</span>
          </div>
        </div>
      </div>
    </div>
  );
};
