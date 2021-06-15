const pocketmoneyColors = ['#123123', '#154731', '#165f40'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const pocketmoneyCategories = [
  { type: 'Balance', amount: 0, color: pocketmoneyColors[0] },
  { type: 'Savings', amount: 0, color: pocketmoneyColors[1] },
  { type: 'Gifts', amount: 0, color: pocketmoneyColors[2] },
];

export const expenseCategories = [
  { type: 'Stationary', amount: 0, color: expenseColors[0] },
  { type: 'Food', amount: 0, color: expenseColors[1] },
  { type: 'Travelling', amount: 0, color: expenseColors[2] },
  { type: 'Mobile recharge', amount: 0, color: expenseColors[3] },
  { type: 'Shopping', amount: 0, color: expenseColors[4] },
  { type: 'Entertainment', amount: 0, color: expenseColors[5] },
  { type: 'Other', amount: 0, color: expenseColors[6] },
];

export const resetCategories = () => {
  pocketmoneyCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
  eventCategories.forEach((c) => c.amount = 0);
  eventSubject.forEach((c) => c.amount = 0);
};

export const eventCategories = [
  { type: 'Assignment' },
  { type: 'Exam' },
  { type: 'Project Submission'},
];

export const eventSubject = [
  { type: 'Physics' },
  { type: 'Chemistry' },
  { type: 'Biology'},
  { type: 'Mathematics' },
  { type: 'Economics' },
  { type: 'Accountancy'},
  { type: 'Informatics Practices' },
  { type: 'Business studies' },
  { type: 'Entrepreneurship'},
  { type: 'History' },
  { type: 'Political Science'},
  { type: 'Sociology' },
  { type: 'Geography' },
  { type: 'Psychology'},
  { type: 'Computer Architecture and Organization' },
  { type: 'Database Systems' },
  { type: 'Operating Systems'},
  { type: 'Electronics' },
  { type: 'Computer Networks' },
  { type: 'Foundations of Computer Systems'},
  { type: 'Java Programming and Website Design' },
  { type: 'Design and Analysis of Algorithms' },
  { type:'Software Engineering'},
  { type:'Database Management Systems'},
  { type:'E - Commerce & ERP'},
  { type: 'Multimedia Applications' },
  { type: 'Object Oriented Programming' },
  { type: 'Data Structures' },
  { type: 'Data Warehousing and Data Mining' },
  { type: 'Engineering Mathematics' },
  { type: 'Microprocessor' },
  { type: 'Computer Software' },
  { type: 'Database Management System' },
  { type: 'Mobile Communications' },
  { type: 'Cryptography and Network Security' },
  { type: 'Performance Evaluation' },
];

// export const pocketmoneyCategories = [
//   { type: 'Balance', amount: 0, color: pocketmoneyColors[0] },
//   { type: 'Savings', amount: 0, color: pocketmoneyColors[1] },
//   { type: 'Gifts', amount: 0, color: pocketmoneyColors[2] },
// ];