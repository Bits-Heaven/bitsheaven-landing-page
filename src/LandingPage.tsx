import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BitsHeavenLogo from './assets/bitsheavenlogo.svg';
import EthereumLogo from './assets/ethereum-logo.svg';
import GnosisLogo from './assets/gnosis-logo.svg';
import PenumbraLogo from './assets/penumbra-logo.svg';
import { ClockIcon, PhoneIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';

const data = [
  { name: 'Ethereum', apy: 3, logo: EthereumLogo },
  { name: 'Gnosis', apy: 11.2, logo: GnosisLogo },
  { name: 'Penumbra', apy: null, logo: PenumbraLogo },
];

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'about'>('home');
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
              <li><button onClick={() => setActiveSection('home')} className={`hover:text-blue-300 ${activeSection === 'home' ? 'text-blue-300' : ''}`}>Home</button></li>
              <li><Link to="/ethereum" className="hover:text-blue-300">Ethereum Staking</Link></li>
              <li><button onClick={() => setActiveSection('about')} className={`hover:text-blue-300 ${activeSection === 'about' ? 'text-blue-300' : ''}`}>About</button></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12">
          {activeSection === 'home' ? (
          <section className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Stake Your Crypto, Earn Rewards</h2>
            <p className="text-xl">Join BitsHeaven Staking and maximize your crypto holdings with our secure staking services.</p>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-12">
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
          </section>

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

          <section className="mb-12">
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
          </section>

          <section className="text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Staking?</h3>
            <p className="mb-6">Join thousands of satisfied users and start earning rewards today with our secure and reliable staking service!</p>
            <a href="https://nrsh9e881z5.typeform.com/to/oQFtgRaU" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg">
                Get Started Now
              </button>
            </a>
          </section>
          ) : (
            <>
              <h2 className="text-4xl font-bold mb-6">About BitsHeaven Staking</h2>
              <div className="space-y-6">
                <p>
                  BitsHeaven Staking is a cutting-edge cryptocurrency staking service launched by Bit Dynamics AB in 2023. We are dedicated to providing secure, efficient, and rewarding staking solutions for crypto enthusiasts and investors.
                </p>
                <p>
                  As a service of Bit Dynamics AB, we leverage our expertise in blockchain technology and financial innovation to create a user-friendly platform that maximizes your crypto holdings while ensuring the highest levels of security and transparency.
                </p>
                <p>
                  Our mission is to democratize access to cryptocurrency staking, allowing users of all experience levels to participate in network validation and earn rewards on their digital assets. With BitsHeaven Staking, you're not just using a service – you're partnering with a team of blockchain experts committed to your success in the crypto world.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Our Core Values</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>🛡️ Security: Your assets' safety is our top priority.</li>
                  <li>🔍 Transparency: We believe in clear communication and open operations.</li>
                  <li>💡 Innovation: We continuously improve our services to stay ahead in the fast-paced crypto world.</li>
                  <li>👥 User-Centric: Our platform is designed with our users' needs and experiences in mind.</li>
                  <li>🌐 Community: We foster a strong, supportive community of stakers and crypto enthusiasts.</li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold mt-12 mb-6">Our Team</h3>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="mb-4">
                  At BitsHeaven Staking, we are proud to have a team of highly skilled professionals with extensive experience in blockchain technology, cybersecurity, and financial operations. Our diverse group of experts brings together a wealth of knowledge from various fields, ensuring that we can provide the most secure, efficient, and innovative staking solutions.
                </p>
                <p className="mb-4">
                  Our team includes seasoned blockchain developers, cybersecurity specialists, and financial experts who work tirelessly to maintain the integrity and security of our staking operations. With years of combined experience in managing large-scale blockchain networks and securing digital assets, we are well-equipped to handle the complex challenges of the cryptocurrency world.
                </p>
                <p>
                  We are committed to staying at the forefront of blockchain technology and continuously enhancing our security measures to protect our users' assets. Our team's expertise in operational efficiency and risk management ensures that we can offer a reliable and trustworthy staking service to our clients.
                </p>
              </div>
            </>
          )}
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
