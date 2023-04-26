/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styles from '../Screens/PropertyStyle';
import {Button} from './Button';
import {useHistory} from 'react-router-dom';
import Slider from './Slider/Slider';


export const ContentBlock = ({title, isSlider, sliderData={}, bodyText, photo}) => {
  const [windowSize] = useState(window.innerWidth);
  const isMobile = windowSize < 850;
  const history = useHistory();
  return (
    <div style={{...styles.textContainer, width: isMobile ? '85%' : '60%'}}>
      <div style={{display: 'flex', width: '100%', margin: '20px 0px', flexDirection: isMobile ? 'column' : 'row'}}>
        <span style={{...styles.bodyText, width: isMobile ? '100%' : '50%'}}>
          <h2 style={{color: '#000'}}>
            {title}
          </h2>
          {
            bodyText.map((text) => (
              <p key={text} style={{...styles.pText, width: isMobile ? '100%' : '80%'}}>
                {text}
              </p>
            ))
          }
        </span>
        { isSlider ?
            (
                <div style={{width: isMobile ? null : '50%', marginTop: '20px'}}>
                  <Slider sliderData={sliderData} autoPlay={true}/>
                </div>
            ) :
            (
                <img src={photo} style={{width: isMobile ? '100%' : '50%', marginTop: '30px', borderRadius: '12px'}}/>
            )
        }
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
