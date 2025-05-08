import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RegistrationChart = () => {
  const data = [
    { name: 'Cat 01', value: 19512, color: '#00C853', percentage: '61.6%' },
    { name: 'Cat 02', value: 10452, color: '#FFC107', percentage: '38.2%' },
    { name: 'Cat 03', value: 681, color: '#26A69A', percentage: '0.2%' }
  ];

  const COLORS = data.map(item => item.color);

  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Registration Category</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} />
            <XAxis type="number" domain={[0, 20000]} tickCount={5} />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fontSize: 14 }}
              width={60}
            />
            <Tooltip 
              formatter={(value) => [`${value}`, 'Count']} 
              labelFormatter={(value) => `Category: ${value}`}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm text-gray-600">({item.percentage})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationChart;