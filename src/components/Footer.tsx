import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">&copy; 2024 Indian Income Tax Calculator. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <a href="https://incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">
            Official Income Tax Department Website
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;