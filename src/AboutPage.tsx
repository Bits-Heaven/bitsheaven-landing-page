import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About BitsHeaven Staking - Our Mission and Team</title>
        <meta name="description" content="Learn about BitsHeaven Staking, our mission, core values, and the team behind our secure cryptocurrency staking platform." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">About BitsHeaven Staking</h1>
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
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🛡️ Security: Your assets' safety is our top priority.</li>
            <li>🔍 Transparency: We believe in clear communication and open operations.</li>
            <li>💡 Innovation: We continuously improve our services to stay ahead in the fast-paced crypto world.</li>
            <li>👥 User-Centric: Our platform is designed with our users' needs and experiences in mind.</li>
            <li>🌐 Community: We foster a strong, supportive community of stakers and crypto enthusiasts.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Our Team</h2>
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
      </div>
    </>
  );
};

export default AboutPage;
