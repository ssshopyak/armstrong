/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styles from '../Screens/PropertyStyle';
import {Button} from './Button';
import {useHistory} from 'react-router-dom';
import Slider from './Slider/Slider';


export const ContentBlock = ({title, isSlider, sliderData={}, bodyText, photo}) => {
  const [windowSize] = useState(window.innerWidth);
  const isMobile = windowSize <= 1280;
  const history = useHistory();
  return (
    <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
      <div style={{display: 'flex', width: '100%', margin: '10px 0px', flexDirection: 'column'}}>
        <h2 style={{color: '#000', textAlign: 'center'}}>
          {title}
        </h2>
        { isSlider ?
            (
                <div style={{width: isMobile ? null : '100%', marginTop: '20px'}}>
                  <Slider sliderData={sliderData} autoPlay={true}/>
                </div>
            ) :
            (
                <img src={photo} style={{width: isMobile ? '100%' : '100%', marginTop: '20px', borderRadius: '12px'}}/>
            )
        }
        <span style={{...styles.bodyText, width: isMobile ? '100%' : '100%'}}>
          {
            bodyText.map((text) => (
              <p key={text} style={{...styles.pText, width: isMobile ? '100%' : '100%'}}>
                {text}
              </p>
            ))
          }
        </span>
      </div>
      <Button
        onClick={()=>{
          history.push('/Contact');
        }}
        title='Get started'
        backgroundColor={'#fff'}
        color={'#000'}
      />
    </div>
  );
};


{/*         */}
