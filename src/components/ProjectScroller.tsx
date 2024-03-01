import React, { useState } from 'react';
import qwirkle from '../assets/images/qwirkle.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Project {
    image: string;
    githubLink: string;
    title: string;
    projectLink: string;
    techStack: string[];
    description: string;
} 

interface ProjectScrollerProps {
    projects: Project[];
    selectedProjectIndex: number;
    setSelectedProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectScroller: React.FC<ProjectScrollerProps> = ({ projects, selectedProjectIndex, setSelectedProjectIndex }) => {

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex: number) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));  
  };

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex: number) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center p-5">
        <button onClick={prevProject} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-2">
          <BsChevronLeft className="text-lg" />
        </button>
        <div className="flex flex-col items-center justify-center">
          <img src={projects[selectedProjectIndex].image} alt={`Project ${selectedProjectIndex + 1}`} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        </div>
        <button onClick={nextProject} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
          <BsChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProjectScroller;