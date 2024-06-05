import React from 'react';
import Header from './components/Header/Header';
import WaterConsumptionSummary from './components/WaterConsumptionSummary/WaterConsumptionSummary';
import WaterUsageReport from './components/WaterUsageReport/WaterUsageReport';
import Hero from './components/Hero/Hero';
import ReportSummary from './components/ReportSummary/ReportSummary';
import load from './assets/load.png'; 
import dots from './assets/dots.png'; 

function App() {
  return (
    <div>
      <Header />

      <main className="p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between items-center mb-4 space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold mb-4">Welcome to Dhaara Live Dashboard!</h1>
          <div className="flex space-x-4 items-center">
            <div className="border p-2 rounded-lg ">
              <p>Download User Manual</p>
            </div>
            <div className="border p-2 rounded-lg ">
              <img src={load} alt="Example 2" className="w-6 h-6 object-cover" />
            </div>
            <div className="border p-2 rounded-lg">
              <img src={dots} alt="Example 3" className="w-6 h-6 object-cover" />
            </div>
          </div>
          </div>

          <Hero />
          <WaterConsumptionSummary />
          <WaterUsageReport />
          <ReportSummary />
        </div>
      </main>
    </div>
  );
}

export default App;
