import React from 'react';
import BitsHeavenLogo from './components/BitsHeavenLogo';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <BitsHeavenLogo className="w-16 h-16 mr-3" />
          <h1 className="text-3xl font-bold">Bits Heaven Staking</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">About Bits Heaven Staking</h2>
        <div className="space-y-6">
          <p>
            Bits Heaven Staking is a cutting-edge cryptocurrency staking platform, dedicated to providing secure, efficient, and rewarding staking services for crypto enthusiasts and investors.
          </p>
          <p>
            Founded in 2023, our team of blockchain experts and financial technology professionals has been working tirelessly to create a user-friendly platform that maximizes your crypto holdings while ensuring the highest levels of security and transparency.
          </p>
          <p>
            Our mission is to democratize access to cryptocurrency staking, allowing users of all experience levels to participate in network validation and earn rewards on their digital assets.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Our Core Values</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Security: Your assets' safety is our top priority.</li>
            <li>Transparency: We believe in clear communication and open operations.</li>
            <li>Innovation: We continuously improve our services to stay ahead in the fast-paced crypto world.</li>
            <li>User-Centric: Our platform is designed with our users' needs and experiences in mind.</li>
            <li>Community: We foster a strong, supportive community of stakers and crypto enthusiasts.</li>
          </ul>
        </div>
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;