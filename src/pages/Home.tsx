import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
      <div>
        <Header />
        {/* Rest of your app content */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    );
  };

export default Home;