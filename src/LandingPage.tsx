import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ethereum', apy: 5.2 },
  { name: 'Gnosis', apy: 7.8 },
  { name: 'Penumbra', apy: 9.5 },
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bits Heaven Staking</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300">About</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
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
            <div key={coin} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{coin} Staking</h3>
              <p>Earn rewards by staking your {coin} with us. Secure, reliable, and hassle-free.</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Stake {coin}
              </button>
            </div>
          ))}
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
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Staking?</h3>
          <p className="mb-6">Join thousands of satisfied users and start earning rewards today!</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg">
            Get Started Now
          </button>
        </section>
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bits Heaven Staking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;