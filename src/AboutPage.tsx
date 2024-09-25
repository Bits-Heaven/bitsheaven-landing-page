import React from 'react';
import BitsHeavenLogo from './components/BitsHeavenLogo';
import placeholderImage from './assets/placeholder.png';
import zheImage from './assets/zhe.png';
import hongchaoImage from './assets/hongchao.jpg';

const AboutPage: React.FC = () => {
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
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">About BitsHeaven Staking</h2>
        <div className="space-y-6">
          <p>
            BitsHeaven Staking is a cutting-edge cryptocurrency staking service launched by Bit Dynamics AB in 2023. We are dedicated to providing secure, efficient, and rewarding staking solutions for crypto enthusiasts and investors.
          </p>
          <p>
            As a service of Bit Dynamics AB, we leverage our parent company's expertise in blockchain technology and financial innovation to create a user-friendly platform that maximizes your crypto holdings while ensuring the highest levels of security and transparency.
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
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
