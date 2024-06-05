import React from 'react';

const Hero = () => {
  return (
    <div className="mb-4 bg-white p-4">
      <div className="bg-white p-4 rounded-lg shadow-sm border">

        <div className='flex flex-col md:flex-row  mb-1'>
          <h2 className="text-md font-semibold mb-2 md:mb-0 md:mr-10">Select Meter</h2>
          <h2 className="text-md font-semibold">Meter Status</h2>
        </div>

        <div className='flex flex-col md:flex-row  mb-1'>
          <select className="form-select block mt-1 rounded-md border-black-300 bg-blue-500 text-white mb-2 md:mb-0 md:mr-4">
            <option>Select All</option>
            <option>FMO8989780</option>
            <option>FMO8989780</option>
          </select> 
          <div className='flex space-x-2 md:space-x-7'>
            <button type="button" className="px-3 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">12 Active</button>
            <button type="button" className="px-3 py-1 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">2 Inactive</button>
          </div>
        </div>

        <p className="mt-5 my-2 text-xs text-gray-500">Meter Details</p>
          <p className="my-2 text-xs text-gray-500">Basement Borewell 1, Basement Borewell 3, Basement Borewell 1, Basement Borewell 1, Basement Borewell 1</p>
          <p className="my-2 text-xs text-gray-500">Basement Borewell 1, Basement Borewell 3, Basement Borewell 1, Basement Borewell 1, Basement Borewell 1</p>
      </div>
    </div>
  );
}

export default Hero;
