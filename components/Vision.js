import React from 'react';
import CarouselComponent from './CarouselComponent';

const Vision = () => {
  const images = [
    '/bg-nous.jpg',
    '/bg-nous1.jpeg',
    '/bg-nous2.JPG',
    '/himaya.jpg',
    '/rayhana.jpeg'
  ];

  return (
    <div className="bg-light-blue-200 p-10 min-h-screen flex flex-col md:flex-row">
      <div className="flex-1">
        <CarouselComponent images={images} />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-base mb-8">
          Our vision is to empower communities and create sustainable solutions for a better future.
        </p>
      </div>
    </div>
  );
};

export default Vision;
