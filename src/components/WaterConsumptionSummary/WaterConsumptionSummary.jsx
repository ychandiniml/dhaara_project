import React from 'react';

const WaterConsumptionSummary = () => {
  return (
    <div className="bg-grey-100 px-3 py-1">
      <div>
        <h2 className="text-xl font-bold my-2">Water Consumption Summary</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-md font-semibold">Daily Report</h2>
            <button
              type="button"
              className="px-3 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Success
            </button>
          </div>

          <hr className="h-0.5 border-t-0 bg-slate-300" />
          <p className="my-2 text-xs text-gray-500">
            Monday, 18 Dec 2023 | 8:00AM - Tuesday, 19 Dec 2023 | 8:00 AM
          </p>

          <div className="mt-2 flex flex-col md:flex-row justify-between">
            <div className="mb-2 md:mb-0">
              <p className="text-2xl text-blue-900 font-bold">35.9 KL</p>
              <p className="text-xs py-3 text-gray-500">9.5 KL more from Last Day</p>
            </div>

            <div className="mb-2 md:mb-0">
              <p className="text-xs text-gray-500">Pump Working Hours</p>
              <p className="text-sm text-bold">1 Hour 54 Mins</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Average Flow Rate</p>
              <p className="text-sm text-bold">1.3 M3/S</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h2 className="text-md font-semibold">Monthly Report</h2>
          <hr className="h-0.5 border-t-0 bg-slate-300" />
          <p className="my-1 text-xs text-gray-500">
            Monday, 18 Dec 2023 | 8:00AM - Tuesday, 19 Dec 2023 | 8:00 AM
          </p>

          <div className="mt-2 flex flex-col md:flex-row justify-between">
            <div className="mb-2 md:mb-0">
              <p className="text-2xl text-blue-900 font-bold">944.32 KL</p>
              <p className="text-xs py-3 text-gray-500">34.5% less from Last Month</p>
            </div>

            <div className="mb-2 md:mb-0">
              <p className="text-xs text-gray-500">Pump Working Hours</p>
              <p className="text-sm text-bold">1 Hour 54 Mins</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Average Flow Rate</p>
              <p className="text-sm text-bold">1.3 M3/S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterConsumptionSummary;


