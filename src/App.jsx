import React, { useState, useEffect } from 'react';
import StepperComponent from './components/Froms/Stepper/Stepper';
import Dashboard from './components/Dashboard/Home'
import { Routes, Route ,Navigate} from "react-router-dom"
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#282D2D]">
      {isLoading ? (
        <div className="w-full h-screen bg-black flex flex-col justify-center items-center space-y-4">
          <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
            <svg className="h-20 w-20 animate-spin stroke-white" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
            </svg>
            <span className="text-4xl font-medium text-white">Loading...</span>
          </div>
          <h1 className="text-4xl font-bold text-white">Welcome to stepper app</h1>
          <p className="text-lg text-white">Please fill the form to complete steps..</p>
        </div>
      ) : (
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/form" element={<StepperComponent/>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
