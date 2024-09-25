import React from 'react';
import { Link } from 'react-router-dom';
import BitsHeavenLogo from './components/BitsHeavenLogo';

const EthereumStakingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <BitsHeavenLogo className="w-16 h-16 mr-3" />
          <h1 className="text-3xl font-bold">BitsHeaven Staking</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/ethereum" className="hover:text-blue-300">Ethereum Staking</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Ethereum Staking Options</h2>
        <p className="text-xl mb-12 text-center">Choose the staking solution that best fits your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lido SSV Box */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Lido SSV</h3>
            <p className="mb-4 flex-grow">Decentralized staking with Lido's Secure Staking Validators.</p>
            <ul className="mb-6 list-disc list-inside">
              <li>High liquidity</li>
              <li>No minimum deposit</li>
              <li>Instant staking rewards</li>
            </ul>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
              Start Staking
            </a>
          </div>

          {/* SafeStake Box */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4">SafeStake</h3>
            <p className="mb-4 flex-grow">Secure and reliable staking with advanced risk management.</p>
            <ul className="mb-6 list-disc list-inside">
              <li>Enhanced security features</li>
              <li>Competitive APY</li>
              <li>Professional management</li>
            </ul>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
              Learn More
            </a>
          </div>

          {/* Custom Staking Box */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Custom Staking</h3>
            <p className="mb-4 flex-grow">Tailored staking solutions for advanced users and institutions.</p>
            <ul className="mb-6 list-disc list-inside">
              <li>Flexible options</li>
              <li>Dedicated support</li>
              <li>Customizable rewards</li>
            </ul>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
              Contact Us
            </a>
          </div>
        </div>

        {/* Additional content can be added here */}
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EthereumStakingPage;
