import { Collapse } from 'antd';
import Image from 'next/image';
import CarouselComponent from './CarouselComponent';

const Description = () => {
  // Collapse items data
  const collapseItems = [
    {
      key: '1',
      label: 'Our Mission',
      children: 'Description of our mission...'
    },
    {
      key: '2',
      label: 'Our Values',
      children: 'Description of our values...'
    },
    {
      key: '3',
      label: 'Our Impact',
      children: 'Description of our impact...'
    }
  ];

  // Images for slideshow
  const images = [
    '/bg-nous.jpg',
    '/bg-nous1.jpeg',
    '/bg-nous2.JPG',
    '/himaya.jpg',
    '/rayhana.jpeg'
  ];

  return (
    <div className="bg-green-200 p-10 min-h-screen">
      <h2 className="text-green-600 text-center mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left column with collapse */}
        <div className="flex-1">
          <p className="text-black text-base mb-8">
            At the assalam foundation for social development Casablanca anfa, we believe in a world where everyone, no matter where they live, has access to the resources they need to thrive. Our projects, rooted in the most remote rural areas, aim to provide sustainable solutions and create a tangible impact on the most vulnerable communities. Discover how we work every day to build brighter futures.
          </p>
          <Collapse accordion className="bg-blue-200" items={collapseItems} />
        </div>
        <div className="flex-1">
          <CarouselComponent images={images}/> 
        </div>
      </div>
    </div>
  );
};

export default Description;
