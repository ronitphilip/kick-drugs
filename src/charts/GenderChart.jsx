import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const GenderChart = () => {
  const data = [
    { name: 'Men', value: 19512, color: '#00C853', percentage: '61.6%' },
    { name: 'Women', value: 10452, color: '#FFC107', percentage: '38.2%' },
    { name: 'Others', value: 81, color: '#5C6BC0', percentage: '0.2%' }
  ];

  const COLORS = data.map(item => item.color);

  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Gender Details</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
              label={({ name, value }) => `${name}\n${value}`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
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

export default GenderChart;