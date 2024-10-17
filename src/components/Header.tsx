import React from 'react';
import { FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <FileText size={24} className="text-blue-500" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Indian Income Tax Calculator</h1>
        </div>
        <p className="text-sm text-gray-600">Financial Year 2024-2025</p>
      </div>
    </header>
  );
};

export default Header;