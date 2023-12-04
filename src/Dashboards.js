// src/Dashboard.js
import React, { useState } from 'react';
import { getQuarterData } from './server';

const quarters = ['Options','Quarter 1 (Dec 22)', 'Quarter 2 (Mar 23)', 'Quarter 3 (Jun 23)', 'Quarter 4 (Sep 23)'];

const Dashboard = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(quarters[0]);
  const [quarterData, setQuarterData] = useState(1);

  const handleQuarterChange = async (quarter) => {
    const data = await getQuarterData(quarter);
    setQuarterData(data);
    setSelectedQuarter(quarter);
  };

  return (
    <div className='main'>
      <h1>SBI Dashboard</h1>

      <div className='search'>
        <label>Select Quarter:</label>
        <select onChange={(e) => handleQuarterChange(e.target.value)} value={selectedQuarter}>
            
        {quarters.map((quarter) => (
          <option key={quarter} value={quarter}>
            {quarter}
          </option>
        ))}
    
        </select>
      </div>

      {quarterData && (
        <div className='info'>
          <div>Revenue: {quarterData.revenue}</div>
          <div>Net Income: {quarterData.netIncome}</div>
          <div>Net Profit: {quarterData.netProfit}</div>
          <div>Operating Income: {quarterData.operatingIncome}</div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


