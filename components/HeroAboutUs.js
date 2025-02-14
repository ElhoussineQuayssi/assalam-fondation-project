import React from 'react';

const cardData = [
  { title: 'Card Title 1', description: 'Card description goes here.' },
  { title: 'Card Title 2', description: 'Card description goes here.' },
  { title: 'Card Title 3', description: 'Card description goes here.' },
  { title: 'Card Title 4', description: 'Card description goes here.' },
];

const HeroAboutUs = () => {
  return (
    <div className="hero-about-us bg-[url('/bg-nous.jpg')] bg-cover bg-top h-fit md:h-screen text-white relative p-5">
      <h1 className="z-20 m-0 text-5xl text-blue-500">About Us</h1>
      <p className="z-20 m-5 text-lg w-3/5 text-green-500">At the assalam foundation for social development Casablanca anfa, we believe in a world where everyone, no matter where they live, has access to the resources they need to thrive. Our projects, rooted in the most remote rural areas, aim to provide sustainable solutions and create a tangible impact on the most vulnerable communities. Discover how we work every day to build brighter futures.</p>
      <div className="cards w-full grid grid-cols-4 gap-2 z-20 h-1/3 p-5 absolute bottom-5 left-1/2 transform -translate-x-1/2">
      </div>
    </div>
  );
};

export default HeroAboutUs;
