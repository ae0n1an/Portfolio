import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const headerHeight = 4;
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
        <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
          <div className="lg:flex justify-center lg:items-center">
            <div className="text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl font-bold mb-2">About</h1>
                <p className="text-lg mb-4">
                Hi my name is Max Verhoef. I am currently working as a software test engineer at Infosys and completing my final year of studying software engineering at Monash University. 
                </p>
                <p className="text-lg mb-4"> 
                In my free time I love Ultimate Frisbee, tennis, running, programming and using technology.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;