import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Welcome to the Indian Income Tax Calculator</h2>
      <p className="text-gray-600 mb-4">
        Our calculator helps you estimate your income tax based on the latest Indian tax laws for the financial year 2024-2025.
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Key Updates for FY 2024-2025</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2">
        <li>New tax slabs under the New Tax Regime</li>
        <li>Changes in standard deduction limits</li>
        <li>Updates to Section 80C and 80D deductions</li>
        <li>Modifications in National Pension System (NPS) contributions</li>
      </ul>
      <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">Why Use Our Calculator?</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Compare Old and New Tax Regimes</li>
          <li>Easy-to-use interface</li>
          <li>Up-to-date with the latest tax laws</li>
          <li>Personalized tax-saving suggestions</li>
        </ul>
      </div>
      <p className="mt-6 sm:mt-8 text-gray-600">
        Start by navigating to the Tax Calculator section to estimate your income tax and explore potential savings.
      </p>
    </div>
  );
};

export default HomePage;