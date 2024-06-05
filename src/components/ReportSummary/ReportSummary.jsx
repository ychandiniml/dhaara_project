import React, { useState } from 'react';

const ReportSummary = () => {
  const reportData = [
    { startDate: '01/10/2021', endDate: '02/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '02/10/2021', endDate: '03/10/2021', startTime: '11:51:28', endTime: '12:17:32', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '03/10/2021', endDate: '04/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '04/10/2021', endDate: '05/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '05/10/2021', endDate: '06/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '06/10/2021', endDate: '07/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '07/10/2021', endDate: '08/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '08/10/2021', endDate: '09/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '09/10/2021', endDate: '10/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '01/10/2021', endDate: '02/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '02/10/2021', endDate: '03/10/2021', startTime: '11:51:28', endTime: '12:17:32', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '03/10/2021', endDate: '04/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '04/10/2021', endDate: '05/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '05/10/2021', endDate: '06/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '06/10/2021', endDate: '07/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '07/10/2021', endDate: '08/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '08/10/2021', endDate: '09/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '09/10/2021', endDate: '10/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '01/10/2021', endDate: '02/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '02/10/2021', endDate: '03/10/2021', startTime: '11:51:28', endTime: '12:17:32', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '03/10/2021', endDate: '04/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '04/10/2021', endDate: '05/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '05/10/2021', endDate: '06/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '06/10/2021', endDate: '07/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '07/10/2021', endDate: '08/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '08/10/2021', endDate: '09/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '09/10/2021', endDate: '10/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '01/10/2021', endDate: '02/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '02/10/2021', endDate: '03/10/2021', startTime: '11:51:28', endTime: '12:17:32', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '03/10/2021', endDate: '04/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '04/10/2021', endDate: '05/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '05/10/2021', endDate: '06/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '06/10/2021', endDate: '07/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '07/10/2021', endDate: '08/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '08/10/2021', endDate: '09/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' },
    { startDate: '09/10/2021', endDate: '10/10/2021', startTime: '11:55:28', endTime: '12:36:44', workHours: '1 Hr 21 Mins', flowRate: '137968', forwardFlow: '813', reverseFlow: '1.42', consumption: '6.71' }


  ];

  const itemsPerPage = 10;
  const totalItems = reportData.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="p-4 rounded-lg shadow-sm">
      <h2 className="text- font-semibold mb-4">Report Summary</h2>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                        Start - End Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Start - End Time
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Work Hours
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Flow Rate(M³/S)
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Forward Flow (L)
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Reverse Flow (L)
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Consumption (KL)
                      </th>
                  </tr>
              </thead>
              <tbody>

              {reportData.slice(startIndex, endIndex).map((entry, index) => (
                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{`${entry.startDate} - ${entry.endDate}`}</td>
                  <td class="px-6 py-4">{`${entry.startTime} - ${entry.endTime}`}</td>
                  <td class="px-6 py-4">{entry.workHours}</td>
                  <td class="px-6 py-4">{entry.flowRate}</td>
                  <td class="px-6 py-4">{entry.forwardFlow}</td>
                  <td class="px-6 py-4">{entry.reverseFlow}</td>
                  <td class="px-6 py-4">{entry.consumption}</td>
                </tr>
              ))}
                  
              </tbody>
          </table>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          Showing {((currentPage - 1) * itemsPerPage) + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}

            <span className='ml-4'>
            {currentPage > 1 && (
              <button className='bg-slate-300 px-3 py-1 mx-1 cursor-pointer' onClick={() => handlePageChange(currentPage - 1)}> &lt;</button>
            )}
            {currentPage < totalPages && (
              <button className='bg-slate-300 px-3 py-1 mx-1 cursor-pointer' onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
            )}    
          </span>

        </div>    
      </div>
    </div>
  );
};

export default ReportSummary;
