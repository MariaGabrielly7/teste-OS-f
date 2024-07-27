import Image from 'next/image';

const Footer = () => (
  <footer className="w-full p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    <p className="text-xs md:text-sm mb-2 md:mb-0">
      © 2024 Uncrewed Warrior Foundation. All rights reserved.
    </p>
    <div className="flex justify-center md:justify-start space-x-4 md:ml-auto">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
