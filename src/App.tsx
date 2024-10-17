import React, { useState } from 'react';
import { Calculator, HelpCircle, Home } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TaxCalculator from './components/TaxCalculator';
import FAQs from './components/FAQs';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <li className="mb-2 sm:mb-0">
              <button
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                  activePage === 'home' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => setActivePage('home')}
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            </li>
            <li className="mb-2 sm:mb-0">
              <button
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                  activePage === 'calculator' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => setActivePage('calculator')}
              >
                <Calculator size={16} />
                <span>Calculator</span>
              </button>
            </li>
            <li className="mb-2 sm:mb-0">
              <button
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                  activePage === 'faqs' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => setActivePage('faqs')}
              >
                <HelpCircle size={16} />
                <span>FAQs</span>
              </button>
            </li>
          </ul>
        </nav>
        {activePage === 'home' && <HomePage />}
        {activePage === 'calculator' && <TaxCalculator />}
        {activePage === 'faqs' && <FAQs />}
      </main>
      <Footer />
    </div>
  );
}

export default App;