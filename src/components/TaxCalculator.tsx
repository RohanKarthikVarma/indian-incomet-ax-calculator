import React, { useState } from 'react';

interface TaxInput {
  annualIncome: string;
  age: string;
  hra: string;
  investments80C: string;
  npsContributions: string;
  healthInsurance: string;
}

const TaxCalculator: React.FC = () => {
  const [taxInput, setTaxInput] = useState<TaxInput>({
    annualIncome: '',
    age: '',
    hra: '',
    investments80C: '',
    npsContributions: '',
    healthInsurance: '',
  });
  const [taxResult, setTaxResult] = useState<{ old: number; new: number } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Allow only numbers and empty string
    if (value === '' || /^\d+$/.test(value)) {
      setTaxInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const calculateTax = () => {
    const income = parseInt(taxInput.annualIncome) || 0;
    const age = parseInt(taxInput.age) || 0;
    const hra = parseInt(taxInput.hra) || 0;
    const investments80C = parseInt(taxInput.investments80C) || 0;
    const npsContributions = parseInt(taxInput.npsContributions) || 0;
    const healthInsurance = parseInt(taxInput.healthInsurance) || 0;

    // Simple tax calculation (for demonstration purposes)
    const oldRegimeTax = Math.max(0, income - hra - investments80C - npsContributions - healthInsurance) * 0.2;
    const newRegimeTax = income * 0.15;

    setTaxResult({
      old: oldRegimeTax,
      new: newRegimeTax,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Income Tax Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Enter Your Details</h3>
          <div className="space-y-4">
            {Object.entries(taxInput).map(([key, value]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} {key !== 'age' && '(₹)'}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter ${key !== 'age' ? 'amount' : 'age'}`}
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={calculateTax}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Calculate Tax
            </button>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Tax Calculation Results</h3>
          {taxResult ? (
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-700">Old Regime Tax:</h4>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">₹{taxResult.old.toFixed(2)}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-700">New Regime Tax:</h4>
                <p className="text-xl sm:text-2xl font-bold text-green-600">₹{taxResult.new.toFixed(2)}</p>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <h4 className="text-md font-medium text-yellow-800 mb-2">Recommendation:</h4>
                <p className="text-sm text-yellow-700">
                  {taxResult.old < taxResult.new
                    ? "The Old Regime appears to be more beneficial for you. Consider opting for the Old Regime to potentially save on taxes."
                    : "The New Regime appears to be more beneficial for you. Consider opting for the New Regime to potentially save on taxes."}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Enter your details and click "Calculate Tax" to see the results.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;