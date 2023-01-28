import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    
  console.log('ExpenseFilter.js --- take two props selectYear and onUpdate');
    const addExpenseYear = (event) => { 
    console.log('ExpenseFilter.js --- before updating and calling onUpdate property present in Expense.js');
    props.onUpdate(event.target.value);
    console.log('ExpenseFilter.js --- after calling onUpdate property in Expense.js');

    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select 
        value={props.selectYear}
        onChange={addExpenseYear}
        >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;