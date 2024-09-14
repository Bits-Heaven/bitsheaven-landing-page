import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BitsHeavenLogo from './components/BitsHeavenLogo';

const data = [
  { name: 'Ethereum', apy: 3 },
  { name: 'Gnosis', apy: 11.2 },
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <BitsHeavenLogo className="w-16 h-16 mr-3" />
          <h1 className="text-3xl font-bold">Bits Heaven Staking</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="#" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Stake Your Crypto, Earn Rewards</h2>
          <p className="text-xl">Join Bits Heaven Staking and maximize your crypto holdings with our secure staking services.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {['Ethereum', 'Gnosis', 'Penumbra'].map((coin) => (
            <div key={coin} className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">{coin} Staking</h3>
                {coin !== 'Penumbra' ? (
                  <>
                    <p>Earn rewards by staking your {coin} with us. Secure, reliable, and hassle-free.</p>
                    <p className="mt-2 font-bold">
                      Current APY: {coin === 'Ethereum' ? '3%' : '11.2%'}
                    </p>
                  </>
                ) : (
                  <p>Penumbra staking is coming soon! Stay tuned for updates.</p>
                )}
              </div>
              <div className="mt-4">
                {coin !== 'Penumbra' ? (
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Stake {coin}
                  </button>
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
          <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Bits Heaven Staking?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "99.9% Uptime", description: "Our robust infrastructure ensures your staking rewards are maximized with minimal downtime." },
              { title: "24/7 On-Call Support", description: "Expert support available round the clock to address any concerns or questions." },
              { title: "Private Data Centers", description: "Your assets are secured in state-of-the-art, privately owned data centers." },
              { title: "Enterprise-Grade Security", description: "Multi-layered security protocols to safeguard your investments at all times." }
            ].map((advantage, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">{advantage.title}</h4>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Current APY Rates</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
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
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg">
            Get Started Now
          </button>
        </section>
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;