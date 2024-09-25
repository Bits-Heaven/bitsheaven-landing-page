import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BitsHeavenLogo from './assets/bitsheavenlogo.svg';
import EthereumLogo from './assets/ethereum-logo.svg';
import GnosisLogo from './assets/gnosis-logo.svg';
import PenumbraLogo from './assets/penumbra-logo.svg';
import { ClockIcon, PhoneIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';
import LidoLogo from './assets/lido.svg';
import SafeStakeLogo from './assets/safestake.svg';
import { FaLock } from 'react-icons/fa';
import StakeWiseLogo from './assets/stakewise_2.svg';

const data = [
  { name: 'Ethereum', apy: 3, logo: EthereumLogo },
  { name: 'Gnosis', apy: 11.2, logo: GnosisLogo },
  { name: 'Penumbra', apy: null, logo: PenumbraLogo },
];

const LandingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>BitsHeaven Staking - Secure Cryptocurrency Staking Platform</title>
        <meta name="description" content="BitsHeaven Staking offers secure and efficient cryptocurrency staking solutions. Maximize your crypto holdings with our user-friendly platform." />
        <meta name="keywords" content="cryptocurrency, staking, blockchain, crypto investing, BitsHeaven, Ethereum Staking, Gnosis, Penumbra" />
        <meta property="og:title" content="BitsHeaven Staking - Secure Cryptocurrency Staking Platform" />
        <meta property="og:description" content="Maximize your crypto holdings with our secure and efficient staking solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bitsheaven.com" />
        <meta property="og:image" content="https://www.bitsheaven.com/og-image.jpg" />
        <link rel="canonical" href="https://www.bitsheaven.com" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={BitsHeavenLogo} alt="BitsHeaven Logo" className="w-16 h-16 mr-3" />
            <h1 className="text-3xl font-bold">BitsHeaven Staking</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Stake Your Crypto, Earn Rewards</h2>
            <p className="text-xl">Join BitsHeaven Staking and maximize your crypto holdings with our secure staking services.</p>
          </section>

          {/* <section className="grid md:grid-cols-3 gap-8 mb-12">
            {data.map((coin) => (
              <div key={coin.name} className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-4">
                    <img src={coin.logo} alt={`${coin.name} logo`} className="w-10 h-10 mr-3" />
                    <h3 className="text-2xl font-bold">{coin.name} Staking</h3>
                  </div>
                  {coin.apy !== null ? (
                    <>
                      <p>Earn rewards by staking your {coin.name} with us. Secure, reliable, and hassle-free.</p>
                      <p className="mt-2 font-bold">
                        Current APY: {coin.apy}%
                      </p>
                    </>
                  ) : (
                    <p>{coin.name} staking is coming soon! Stay tuned for updates.</p>
                  )}
                </div>
                <div className="mt-4">
                  {coin.apy !== null ? (
                    // <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    //   Stake {coin.name}
                    // </button>
                    // TODO: Implement staking page and uncomment button
                    <></>
                  ) : (
                    <button className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </section> */}

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Choose BitsHeaven Staking?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "99.9% Uptime", description: "Our robust infrastructure ensures your staking rewards are maximized with minimal downtime.", icon: ClockIcon },
                { title: "24/7 On-Call Support", description: "Expert support available round the clock to address any concerns or questions.", icon: PhoneIcon },
                { title: "Private Data Centers", description: "Your assets are secured in state-of-the-art, privately owned data centers.", icon: ServerIcon },
                { title: "Enterprise-Grade Security", description: "Multi-layered security protocols to safeguard your investments at all times.", icon: ShieldCheckIcon }
              ].map((advantage, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-center text-center">
                  <advantage.icon className="w-12 h-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-bold mb-2">{advantage.title}</h4>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Current APY Rates</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.filter(coin => coin.apy !== null)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="apy" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 text-sm">* Penumbra staking coming soon</p>
          </section> */}

          {/* Ethereum Staking Options */}
          <section className="mt-16 mb-16">
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
                    <img src={EthereumLogo} alt="Ethereum Logo" className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Custom Ethereum Staking</h3>
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
          </section>

          {/* Gnosis Staking Options */}
          <section className="mt-16 mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Gnosis Staking Options</h2>
            <p className="text-xl mb-12 text-center">Explore our Gnosis staking solutions</p>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {/* StakeWise Vault Box */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    <img src={StakeWiseLogo} alt="StakeWise Logo" className="w-24 h-24" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">StakeWise Vault</h3>
                  <p className="mb-4 flex-grow">Stake your Gnosis (GNO) tokens with StakeWise for optimal returns and security.</p>
                  <ul className="mb-6 list-disc list-inside">
                    <li>High APY potential</li>
                    <li>Non-custodial staking</li>
                    <li>Liquid staking tokens</li>
                  </ul>
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
                    Coming Soon
                  </a>
                </div>

                {/* Custom Gnosis Staking Box */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    <img src={GnosisLogo} alt="Gnosis Logo" className="w-24 h-24" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Custom Gnosis Staking</h3>
                  <p className="mb-4 flex-grow">Tailored Gnosis staking solutions for institutions and large holders.</p>
                  <ul className="mb-6 list-disc list-inside">
                    <li>Customizable strategies</li>
                    <li>Advanced security</li>
                    <li>Dedicated support</li>
                  </ul>
                  <a href="https://nrsh9e881z5.typeform.com/to/oQFtgRaU" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Staking?</h3>
            <p className="mb-6">Join thousands of satisfied users and start earning rewards today with our secure and reliable staking service!</p>
            <a href="https://nrsh9e881z5.typeform.com/to/oQFtgRaU" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg">
                Get Started Now
              </button>
            </a>
          </section>
        </main>

        <footer className="bg-black bg-opacity-30 py-6 text-center">
          <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
        </footer>
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BitsHeaven Staking",
          "description": "Secure and efficient cryptocurrency staking platform",
          "url": "https://www.bitsheaven.com",
          "logo": "https://www.bitsheaven.com/logo.png"
        })}
      </script>
    </>
  );
};

export default LandingPage;
