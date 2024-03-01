import React from 'react';
import Header from '../components/Header';
import ProjectScroller from '../components/ProjectScroller';

const Projects: React.FC = () => {
  const headerHeight = 4;
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
        <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
          <div className="lg:flex justify-center lg:items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <ProjectScroller></ProjectScroller>
            </div>
            <div className="text-center lg:text-left lg:w-1/2">
              <ProjectScroller></ProjectScroller>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;