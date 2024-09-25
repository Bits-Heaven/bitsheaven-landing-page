import React from 'react';
import { Link } from 'react-router-dom';
import BitsHeavenLogo from './components/BitsHeavenLogo';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <BitsHeavenLogo className="w-16 h-16 mr-3" />
          <h1 className="text-3xl font-bold">BitsHeaven Staking</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl font-bold mb-6">404</h2>
        <h3 className="text-4xl font-bold mb-6">Page Not Found</h3>
        <p className="mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go Back Home
        </Link>
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;