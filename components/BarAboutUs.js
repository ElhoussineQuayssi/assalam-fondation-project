import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPencil, faGraduationCap, faBrain } from '@fortawesome/free-solid-svg-icons';

const cards = [
  { icon: faBook, text: "Academic Excellence" },
  { icon: faPencil, text: "Continuous Learning" },
  { icon: faGraduationCap, text: "Professional Development" },
  { icon: faBrain, text: "Critical Thinking" }
];

const BarAboutUs = () => {
  return (
    <div className="bar-about-us bg-light-blue p-5 max-w-7xl mx-auto">
      <h2 className="text-blue-500 text-center">Our Discipline</h2>
      <div className="cards flex justify-around flex-wrap">
        {cards.map((card, index) => (
          <div key={index} className="card flex-1 basis-48 m-2.5 text-center rounded-lg p-5 bg-white transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50" 
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 255, 0.5)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
            <div className="icon text-3xl text-green-300">
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <p className="text-blue-900">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarAboutUs;
