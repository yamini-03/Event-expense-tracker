import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ }]


export const ExpenseTrackerContext = createContext(initialState);

export const ProviderB = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const transactions1 = useReducer();
  const completedTransaction = (id) => {
    dispatch({ type: 'COMPLETED_TRANSACTION', payload: id });
    
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    
  };

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

  return (
    <ExpenseTrackerContext.Provider value={{
      transactions,
      balance,
      completedTransaction,
      addTransaction,
      transactions1,
      
    }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};




// import React, { useReducer, createContext } from 'react';

// import contextReducer from './contextReducer';

// const initialState = JSON.parse(localStorage.getItem('events')) || [{ category: 'Exam', subject:'Dbms', date: '2020-11-16', id: '1' }]

// export const ExpenseTrackerContext = createContext(initialState);

// export const ProviderB = ({ children }) => {
//   const [events, dispatch] = useReducer(contextReducer, initialState);
//   const doneevents = useReducer();
  
//   const completedEvent = (id) => {
//     dispatch({ type: 'COMPLETED_EVENT', payload: id });
//   };

//   const addEvent = (Currevent) => {
//     dispatch({ type: 'ADD_EVENT', payload: Currevent });
//   };
// //   const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

//   return (
//     <ExpenseTrackerContext.Provider value={{
      
//         completedEvent,
//         addEvent,
//         events,
//         doneevents,
//     }}
//     >
//       {children}
//     </ExpenseTrackerContext.Provider>
//   );
// };
