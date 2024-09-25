import React from 'react';
import { Link } from 'react-router-dom';
import BitsHeavenLogo from './components/BitsHeavenLogo';
import LidoLogo from './assets/lido.svg';
import SafeStakeLogo from './assets/safestake.svg';
import { FaLock } from 'react-icons/fa';

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
            <div className="flex items-center justify-center mb-4">
              <img src={LidoLogo} alt="Lido Logo" className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Lido SSV</h3>
            <p className="mb-4 flex-grow">Decentralized staking with Lido's Secure Staking Validators.</p>
            <ul className="mb-6 list-disc list-inside">
              <li>High liquidity</li>
              <li>No minimum deposit</li>
              <li>Instant staking rewards</li>
            </ul>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
              Coming Soon
            </a>
          </div>

          {/* SafeStake Box */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center justify-center mb-4">
              <img src={SafeStakeLogo} alt="SafeStake Logo" className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">SafeStake</h3>
            <p className="mb-4 flex-grow">Secure and reliable staking with advanced risk management.</p>
            <ul className="mb-6 list-disc list-inside">
              <li>Enhanced security features</li>
              <li>Competitive APY</li>
              <li>Professional management</li>
            </ul>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
              Coming Soon
            </a>
          </div>

          {/* Custom Staking Box */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center">
                <FaLock className="w-12 h-12 text-blue-900" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Custom Staking</h3>
            <p className="mb-4 flex-grow">Tailored staking solutions for advanced users and institutions.</p>
            <ul className="mb-6 list-disc list-inside">
              <li>Flexible options</li>
              <li>Dedicated support</li>
              <li>Customizable rewards</li>
            </ul>
            <a href="https://nrsh9e881z5.typeform.com/to/oQFtgRaU" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
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
