import React, { useState } from 'react';
import Header from '../components/Header';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample work experience data (replace with your actual data)
const experiences = [
  {
    id: 1,
    company: "Infosys",
    position: "Software Test Engineer",
    duration: "Feb 2023 - Present",
    description: `I am currently working as a software test Engineer at Infosys where I have been devlopling python scripts to make API calls to retireve data
    from LoadRunners performance centre.`,
    skills: ["LoadRunner", "Python", "RESTful APIs"],
  },
  {
    id: 2,
    company: "Coles",
    position: "Internship in Performance Testing",
    duration: "Jul 2023 - Dec 2023",
    description: `I took part in the Monash IBL program interning at Coles under their QA team. 
    My role was in performance testing where I worked with Postman, LoadRunner and JMeter to performance 
    test a variety of Coles applications. In my role I primarily tested web applications recording and 
    modifying api requests in order to test them under a simulated user load. This was done primarily in loadrunner and utilised the C language.`,
    skills: ["LoadRunner", "Python", "JMeter", "C"],
  }
];

const Experience: React.FC = () => {
    const headerHeight = 4;
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  
    const nextExperience = () => {
      setSelectedExperienceIndex(prevIndex => (prevIndex === experiences.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevExperience = () => {
      setSelectedExperienceIndex(prevIndex => (prevIndex === 0 ? experiences.length - 1 : prevIndex - 1));
    };
  
    return (
      <div>
        <Header />
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
          <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
            <div className="lg:flex justify-center lg:items-center">
              <div className="text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl font-bold mb-2">{experiences[selectedExperienceIndex].company}</h1>
                <div className="mb-4">
                  <p className="text-sm">{experiences[selectedExperienceIndex].position}</p>
                  <p className="text-sm">{experiences[selectedExperienceIndex].duration}</p>
                  <p className="text-lg mt-2">{experiences[selectedExperienceIndex].description}</p>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-semibold mb-2">Skills:</p>
                  <ul className="list-disc list-inside">
                    {experiences[selectedExperienceIndex].skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <button onClick={prevExperience} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-2">
                    <FaArrowLeft />
                  </button>
                  <button onClick={nextExperience} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;