import React from 'react';
import theme from '../../theme';



export default function BookButton({ text='Book Now!', fontSize='1rem', width='100%', height='100%', margin='5 auto', href='/', onClick}) {
  return (
    <a
      href={href}
      target='_blank'
    >
      <button
        style={{ 
          width: width, 
          height: height, 
          margin: margin,
          fontSize: fontSize,
          fontWeight: 'bold',
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.primary.contrastText,
        }} 
        onMouseOver={(e) => e.target.style.backgroundColor = theme.palette.secondary.main}
        onMouseOut={(e) => e.target.style.backgroundColor = theme.palette.secondary.dark}
        onClick={() => onClick}
      >
      {text}
      </button>

    </a>


  );
}