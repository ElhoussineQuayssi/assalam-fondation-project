import React, { useState } from 'react';

const BureauNational = () => {
  const members = [
    { image: '/fondateurs/F1.jpeg', name: 'Name 1', job: 'Job 1' },
    { image: '/fondateurs/F2.jpeg', name: 'Name 2', job: 'Job 2' },
    { image: '/fondateurs/F3.jpeg', name: 'Name 3', job: 'Job 3' },
    { image: '/fondateurs/F5.jpeg', name: 'Name 4', job: 'Job 4' },
    { image: '/fondateurs/F6.jpeg', name: 'Name 5', job: 'Job 5' },
    { image: '/fondateurs/F8.jpeg', name: 'Name 6', job: 'Job 6' },
    { image: '/fondateurs/F11.jpeg', name: 'Name 7', job: 'Job 7' },
    { image: '/fondateurs/F12.jpeg', name: 'Name 8', job: 'Job 8' },
    { image: '/fondateurs/F1.jpeg', name: 'Name 9', job: 'Job 9' },
    { image: '/fondateurs/F2.jpeg', name: 'Name 10', job: 'Job 10' },
    { image: '/fondateurs/F3.jpeg', name: 'Name 11', job: 'Job 11' },
    { image: '/fondateurs/F5.jpeg', name: 'Name 12', job: 'Job 12' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-4/5 mx-auto bg-lightblue">
      <h2 className="text-center">Bureau National</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500  ${index % 2 === 0 ? 'bg-lightblue' : 'bg-lightgreen'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img alt={member.name} src={member.image} className="w-full h-auto " />
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 transform ${hoveredIndex === index ? 'translate-x-0' : '-translate-x-full'}`}>
              <h3 className={`text-white ${hoveredIndex === index ? 'text-base md:text-lg' : 'text-sm'}`}>{hoveredIndex === index ? member.name : ''}</h3>
              <p className={`text-white ${hoveredIndex === index ? 'text-sm md:text-base' : 'text-xs'}`}>{hoveredIndex === index ? member.job : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BureauNational;
