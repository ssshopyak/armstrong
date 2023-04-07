/* eslint-disable react/prop-types */
import React from 'react';

export const Button = ({onClick, title, color, backgroundColor, fontSize='16px', border='hidden', type=''}) => {
  const mystyle = {
    transition: 'all 0.3s ease-in-out',
    WebkitBoxShadow: '0px 2px 20px 0px rgba(0,0,0,0.5)',
    MozBoxShadow: '0px 2px 20px 0px rgba(0,0,0,0.5)',
    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.5)',
    height: '50px',
    width: '100px', // top, right, bottom, left
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: '6px',
    fontSize: fontSize,
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'Raleway',
    border: border,
  };
  return (
    <button className='button' type={type} onClick={onClick} style={mystyle}>{title}</button>
  );
};
