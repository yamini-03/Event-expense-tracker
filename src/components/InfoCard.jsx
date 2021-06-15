import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Pocket Money ' : 'Expense '} 
      for {isIncome ? '₹100 ' : '₹50 '}  
      in Category {isIncome ? 'Savings ' : 'Traveling '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;
