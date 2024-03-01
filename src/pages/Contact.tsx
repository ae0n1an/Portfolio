import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact: React.FC = () => {
  const headerHeight = 4;

  // Replace these with your actual LinkedIn and GitHub links
  const linkedinLink = "https://www.linkedin.com/in/max-verhoef-524342202/";
  const githubLink = "https://github.com/ae0n1an";

  // Replace these with your actual phone number and email
  const phoneNumber = "+0411883102";
  const emailAddress = "max.verhoef0@gmail.com";

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center bg-gradient-to-b from-blue-300 to-blue-500 text-white" style={{ minHeight: `calc(100vh - ${headerHeight}rem)` }}>
        <div className="flex flex-col lg:w-2/3 p-8 mx-auto">
          <div className="lg:flex justify-center lg:items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
              <p className="text-lg mb-4">
                Have a question or want to work together? Feel free to reach out!
              </p>
              <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex items-center space-x-4">
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl hover:text-gray-600 transition duration-300" />
                  </a>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl hover:text-gray-600 transition duration-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <div>
                  <FaPhoneAlt className="text-4xl"/>
                </div>
                <div>
                  <p>{phoneNumber}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <div>
                  <IoIosMail className="text-4xl"/>
                </div>
                <div>
                  <p>{emailAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;