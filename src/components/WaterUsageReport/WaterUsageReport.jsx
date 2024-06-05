import React from 'react';
import Plot from 'react-plotly.js';

const WaterUsageReport = () => {
  const data = [
    {
      x: ['1 Mar', '2 Mar', '3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar', '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar','21 Mar', '22 Mar','23 Mar', '24 Mar','25 Mar', '26 Mar','27 Mar', '28 Mar','29 Mar', '30 Mar'],
      y: [30, 60, 90, 120, 50, 70, 60, 80, 40, 90, 100, 60, 80, 70, 90, 100, 60, 80, 90, 70, 80, 70, 50, 30, 70, 90, 100, 120, 60, 40],
      type: 'bar',
      marker: { color: ['blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red', 'blue', 'yellow', 'red'] },
    },
  ];

  const layout = {
    title: '',
    xaxis: {
      title: '',
      tickangle: -45,
      tickvals: ['1 Mar', '2 Mar', '3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar', '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar','21 Mar', '22 Mar','23 Mar', '24 Mar','25 Mar', '26 Mar','27 Mar', '28 Mar','29 Mar', '30 Mar'],
      ticktext: ['1 Mar', '2 Mar', '3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar', '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar','21 Mar', '22 Mar','23 Mar', '24 Mar','25 Mar', '26 Mar','27 Mar', '28 Mar','29 Mar', '30 Mar'],
      tickfont: {
        size: 12,
      },
    },    
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className=" p-4 text-xl font-bold">Water Usage Report</h2>
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded p-2">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>
      <Plot
        data={data}
        layout={layout}
        style={{ width: '100%', height: '100%' }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default WaterUsageReport;

