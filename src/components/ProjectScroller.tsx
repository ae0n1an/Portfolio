import React, { useState } from 'react';
import qwirkle from '../assets/images/qwirkle.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
}

const ProjectScroller: React.FC = () => {
  // Sample project data with images and descriptions
  const [projects] = useState<Project[]>([
    {
      image: qwirkle,
      title: 'Qwirkle',
      link: 'https://qwirkle-3uvo.onrender.com',
      description: 'Board game using React and Socket IO',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Research Dock',
      link: 'https://qwirkle-3uvo.onrender.com',
      description: 'Platform for research collaboration',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Compatible',
      link: 'https://qwirkle-3uvo.onrender.com',
      description: 'Mobile dating application',
    }
  ]);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        <button onClick={prevProject} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-2">
          <BsChevronLeft className="text-lg" />
        </button>
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-2 text-lg font-bold text-center w-64">{projects[currentProjectIndex].title}</h2>
          <img src={projects[currentProjectIndex].image} alt={`Project ${currentProjectIndex + 1}`} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
          <p className="mt-2 text-sm text-center w-64">{projects[currentProjectIndex].description}</p>
        </div>
        <button onClick={nextProject} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
          <BsChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProjectScroller;