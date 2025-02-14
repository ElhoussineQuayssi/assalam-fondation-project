import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: 'auto',
  color: '#fff',
  lineHeight: 'normal',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselComponent = ({ images }) => (
    <div style={{ width: '100%', borderRadius: '8px' }}>

    <Carousel arrows dotPosition="right" style={{borderRadius: '8px'}}>
      {images.map((image, index) => (
        <div key={index} style={{height:'100%'}}>
          <h3 style={{ ...contentStyle, height: '100%' }}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'fill',borderRadius: '8px' }} />
          </h3>
        </div>
      ))}
    </Carousel>
  </div>
);

export default CarouselComponent;
