'use client';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const projects = [
  { id: 1, title: "Project 1", description: "Helping children with education.", img: "/bg-nous.jpg" },
  { id: 2, title: "Project 2", description: "Providing food aid to families.", img: "/bg-nous.jpg" },
  { id: 3, title: "Project 3", description: "Medical assistance for those in need.", img: "/bg-nous.jpg" },
  { id: 4, title: "Project 4", description: "Empowering women through training.", img: "/bg-nous.jpg" },
];

export default function Story() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    },3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
            index === currentProject ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center text-white">
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg mb-6">{project.description}</p>
            <Button type="primary" size="large" onClick={nextProject}>Next Project <DownOutlined /></Button>
          </div>
        </div>
      ))}
    </div>
  );
}
