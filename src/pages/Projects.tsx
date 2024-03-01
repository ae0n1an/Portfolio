import React, { useState } from 'react';
import Header from '../components/Header';
import ProjectScroller from '../components/ProjectScroller';
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from "react-icons/gr";
import qwirkle from '../assets/images/qwirkle.png'

interface Project {
    image: string;
    githubLink: string;
    title: string;
    projectLink: string;
    techStack: string[];
    description: string;
}
  
const Projects: React.FC = () => {
  const headerHeight = 4;

  const [projects] = useState<Project[]>([
    {
      image: qwirkle,
      githubLink: "https://github.com/ae0n1an/qwirkle",
      projectLink: 'https://qwirkle-3uvo.onrender.com',
      techStack: ["React", "Typescript", "Socket IO", "Tailwind CSS"],
      title: 'Qwirkle',
      description: 'Board game using React and Socket IO',
    },
    {
      image: 'https://via.placeholder.com/150',
      githubLink: "https://github.com/ResearchDock?tab=repositories",
      projectLink: 'https://research-dock.onrender.com/',
      techStack: ["React", "Typescript", "Tailwind CSS", "Django", "Python"],
      title: 'Research Dock',
      description: 'Platform for research collaboration',
    },
    {
      image: 'https://via.placeholder.com/150',
      githubLink: "https://github.com/compatibledating/compatible-ios",
      projectLink: '',
      techStack: ["Swift", "Figma", "XCode"],
      title: 'Compatible',
      description: 'Mobile dating application',
    }
  ]);


  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0); // Initialize with the first project

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
        <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
          <div className="lg:flex justify-center lg:items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <ProjectScroller
                projects={projects}
                selectedProjectIndex={selectedProjectIndex}
                setSelectedProjectIndex={setSelectedProjectIndex}
              />
            </div>
            <div className="text-center lg:text-left lg:w-1/2">
                <div>
                  <h2 className="text-4xl font-bold mb-4">{projects[selectedProjectIndex].title} </h2>
                  <a href={projects[selectedProjectIndex].githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 mb-4 hover:text-gray-600 transition duration-300 hover:underline">
                    <FaGithub className="text-4xl"  />
                    <p className="text-lg font-semibold hover:underline">
                    GitHub
                    </p>
                  </a>
                  <a href={projects[selectedProjectIndex].projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 mb-4 hover:text-gray-600 transition duration-300 hover:underline">
                    <GrDeploy className="text-4xl"  />
                    <p className="text-lg font-semibold hover:underline">
                    Deployed Version
                    </p>
                  </a>
                  <div className="mb-4">
                    <p className="text-lg font-semibold">Skills:</p>
                    <ul className="list-disc list-inside">
                      {projects[selectedProjectIndex].techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">Description:</p>
                    <p className="text-sm">{projects[selectedProjectIndex].description}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;