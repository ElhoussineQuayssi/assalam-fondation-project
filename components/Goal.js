import React from 'react';
import CarouselComponent from './CarouselComponent';

const Goal = () => {
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
        <h2 className="text-2xl font-bold mb-4">Our Goals</h2>
        <p className="text-base mb-8">
          Our mission is to create a positive impact in the community through various initiatives and projects.
        </p>
      </div>
      <div className="flex-1">
        <CarouselComponent images={images} />
      </div>
    </div>
  );
};

export default Goal;
