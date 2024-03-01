import React from 'react';
import Header from '../components/Header';
import ProjectScroller from '../components/ProjectScroller';
import { Link } from 'react-router-dom';

const Experience: React.FC = () => {
  const headerHeight = 4;
  return (
    <div>
      <Header/>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
        <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
          <div className="lg:flex justify-center lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm">Hi, my name is</p>
              <h1 className="text-4xl font-bold mb-2">Max Verhoef</h1>
              <p className="text-lg mb-4">
                I am a Software Test Engineer at Infosys, currently completing my Bachelor of Software Engineering at Monash University.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link to="/about" className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  About
                </Link>
                <Link to="/experience" className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Experience
                </Link>
                <Link to="/projects" className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Projects
                </Link>
                <Link to="/contact" className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;