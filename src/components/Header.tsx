import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Your Name</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;