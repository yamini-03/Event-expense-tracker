const contextReducer = (state, action) => {
  let transactions,transactions1;

  switch (action.type) {
    case 'COMPLETED_TRANSACTION':
      transactions = state.filter((transaction) => transaction.id !== action.payload);
      transactions1 = state.filter((transaction) => transaction.id === action.payload);
      // console.log(transactions1);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      localStorage.setItem('transactions1', JSON.stringify(transactions1));

      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;


// const contextReducer = (state, action) => {
//     let events,doneevents;
  
//     switch (action.type) {
//       case 'COMPLETED_EVENT':
        
//         doneevents = state.filter((Currevent) => Currevent.id === action.payload);
//         events = state.filter((Currevent) => Currevent.id !== action.payload);

//         localStorage.setItem('doneevents', JSON.stringify(doneevents));
//         localStorage.setItem('events', JSON.stringify(events));
//         console.log(doneevents,events);
//         return events;
//       case 'ADD_EVENT':
//         events = [action.payload, ...state];
      
//             localStorage.setItem('events', JSON.stringify(events));
      
//             return events;
//       default:
//         return state;
//     }
//   };
  
//   export default contextReducer;