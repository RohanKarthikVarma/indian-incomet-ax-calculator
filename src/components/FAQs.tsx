import React from 'react';

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "What is the difference between the Old and New Tax Regimes?",
      answer: "The Old Regime offers various deductions and exemptions but has higher tax rates. The New Regime has lower tax rates but fewer deductions. The choice depends on your individual financial situation."
    },
    {
      question: "What are the key changes in the tax slabs for FY 2024-2025?",
      answer: "For FY 2024-2025, the New Tax Regime has become the default option. There are changes in tax slabs and rates, particularly benefiting taxpayers in lower and middle-income brackets."
    },
    {
      question: "How accurate is this tax calculator?",
      answer: "This calculator provides an estimate based on the information you provide. For precise calculations and personalized advice, please consult a tax professional or refer to the official Income Tax Department guidelines."
    },
    {
      question: "What is Section 80C, and how does it affect my taxes?",
      answer: "Section 80C allows deductions up to ₹1.5 lakh for various investments and expenses like PPF, ELSS, life insurance premiums, etc. These deductions can significantly reduce your taxable income under the Old Regime."
    },
    {
      question: "How do HRA exemptions work?",
      answer: "HRA (House Rent Allowance) exemptions are available under the Old Regime. The exemption is the minimum of: actual HRA received, 50% of (Basic Salary + DA) for metro cities (40% for non-metros), or actual rent paid minus 10% of Basic Salary + DA."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{faq.question}</h3>
            <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Need More Information?</h3>
        <p className="text-sm sm:text-base text-blue-700">
          For the most up-to-date and detailed information on Indian income tax laws and regulations, please visit the{' '}
          <a
            href="https://incometaxindia.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            official Income Tax Department website
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FAQs;