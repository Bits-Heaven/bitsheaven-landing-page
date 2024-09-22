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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Zhe Li",
              role: "Founder",
              description: "Blockchain expert with 10+ years of experience in fintech.",
              image: zheImage,
              imagePosition: "object-right-top",
              x: "https://x.com/linuxcity",
              github: "https://github.com/zheli",
            },
            {
              name: "Cangjin Zhao",
              role: "Co-Founder / Business Developer",
              description: "Experienced business developer with a focus on blockchain and cryptocurrency projects.",
              image: placeholderImage,
              imagePosition: "object-center",
              linkedin: "https://www.linkedin.com/in/cangjin-zhao-0290a758",
            },
            {
              name: "Petra Beczi",
              role: "Developer",
              description: "Developer with game development background. Passionate about exploring the intersection of blockchain and gaming.",
              image: placeholderImage,
              imagePosition: "object-center",
              linkedin: "https://www.linkedin.com/in/petrabeczi/",
            },
          ].map((person, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className={`w-full h-full object-cover ${person.imagePosition}`}
                />
              </div>
              <h4 className="text-xl font-bold">{person.name}</h4>
              <p className="text-blue-300">{person.role}</p>
              <p className="mt-2">{person.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {person.linkedin && (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                    LinkedIn
                  </a>
                )}
                {person.x && (
                  <a href={person.x} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                    X
                  </a>
                )}
                {person.github && (
                  <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold mt-12 mb-6">Our Advisor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Hongchao Liu",
              role: "Advisor",
              description: "Hongchao is a blockchain researcher and a core developer of Alephium, a leading UTXO-based blockchain focus on scalability.",
              image: hongchaoImage,
              imagePosition: "object-center",
              x: "https://x.com/hongchao",
              github: "https://github.com/h0ngcha0",
            },
          ].map((person, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className={`w-full h-full object-cover ${person.imagePosition}`}
                />
              </div>
              <h4 className="text-xl font-bold">{person.name}</h4>
              <p className="text-blue-300">{person.role}</p>
              <p className="mt-2">{person.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {person.x && (
                  <a href={person.x} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                    X
                  </a>
                )}
                {person.github && (
                  <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black bg-opacity-30 py-6 text-center">
        <p>&copy; 2024 Bit Dynamics AB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;