import React from 'react';
import Header from '../components/Header';
import ProjectScroller from '../components/ProjectScroller';

const Home: React.FC = () => {
  const headerHeight = 4;
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
        <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
          <div className="lg:flex justify-center lg:items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <p className="text-sm">Hi, my name is</p>
              <h1 className="text-4xl font-bold mb-2">Max Verhoef</h1>
              <p className="text-lg mb-4">
                I am a Software Test Engineer at Infosys, currently completing my Bachelor of Software Engineering at Monash University.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  About
                </button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Experience
                </button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Projects
                </button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Contact
                </button>
              </div>
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

export default Home;