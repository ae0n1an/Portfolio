import React, { useState } from 'react';
import qwirkle from '../assets/images/qwirkle.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Project {
  image: string;
  description: string;
}

const ProjectScroller: React.FC = () => {
  // Sample project data with images and descriptions
  const [projects] = useState<Project[]>([
    {
      image: qwirkle,
      description: 'Qwirkle: Board game using React and Socket IO',
    },
    {
      image: 'https://via.placeholder.com/150',
      description: 'Research Dock: Platform for research Collaboration',
    },
    {
      image: 'https://via.placeholder.com/150',
      description: 'Compatible: Mobile Dating application',
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
          <img src={projects[currentProjectIndex].image} alt={`Project ${currentProjectIndex + 1}`} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
          <p className="mt-2 text-sm text-center">{projects[currentProjectIndex].description}</p>
        </div>
        <button onClick={nextProject} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
          <BsChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProjectScroller;