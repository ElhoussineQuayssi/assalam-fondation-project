import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [backgroundImage, setBackgroundImage] = useState(''); // State for background image
  const projectItems = [
    { title: 'Kafala', description: 'Description of Kafala project.',link: 'Kafala'},
    { title: 'Nadi Assalam', description: 'Description of Nadi Assalam project.',link: 'NadiAssalam'},
    { title: 'Rayahant Assalam', description: 'Description of Rayahant Assalam project.',link: "RayhanatAssalam" },
    { title: 'Imtiaz', description: 'Description of Imtiaz project.',link:"Imtiaz" },
    { title: 'Centre Himaya', description: 'Description of Centre Himaya project.',link:"centerHimaya" },
    { title: 'Fataer AlBaraka', description: 'Description of OIO project.',link:"FataerAlBaraka" },
  ];

  

  return (
    <div className="projects" style={{ backgroundImage: backgroundImage }}>
      <h2 style={{ color: 'green' }}>Our Projects</h2>
      <div className="project-cards">
        {projectItems.map((item, index) => (
          <Link href={`/projects/${item.link}`} style={{height: '100%'}} key={index}>
            <div 
              key={index} 
              className="project-card" 
              style={{ backgroundColor: 'blue', color: 'lightgreen' }}
            >
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
