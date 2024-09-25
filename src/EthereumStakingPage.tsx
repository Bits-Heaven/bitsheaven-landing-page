import React from 'react';
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
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About</a></li>
            <li><a href="/ethereum-staking" className="hover:text-blue-300">Ethereum Staking</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Ethereum Staking Services</h2>
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Lido SSV DVT Provider</h3>
            <p>
              We are preparing to become a Lido SSV (Secret Shared Validators) Distributed Validator Technology (DVT) provider. 
              This cutting-edge technology enhances the security and decentralization of Ethereum staking.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">SafeStake DVT Staking</h3>
            <p>
              BitsHeaven Staking offers DVT staking on SafeStake, providing an additional layer of security and reliability 
              for your Ethereum staking operations.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Custom Staking Solutions</h3>
            <p>
              We offer tailored staking options for both individuals and businesses. Our custom solutions are designed to 
              meet your specific needs, whether you're a small-scale investor or a large enterprise.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Why Choose BitsHeaven for Ethereum Staking?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced security measures using Distributed Validator Technology</li>
              <li>Flexible staking options to suit your needs</li>
              <li>Expert team with deep knowledge of Ethereum and staking technologies</li>
              <li>Transparent operations and clear communication</li>
              <li>Commitment to maximizing your staking rewards</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EthereumStakingPage;
