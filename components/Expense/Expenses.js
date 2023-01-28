import React,{ useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {

    const [filteredYear,setFilteredYear] = useState('2021');
    console.log('Expense.js --- recived expenses array as parameter---filteredYear set using useState(2020)');
    const updateYearHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
        console.log('Expense.js --- get selected year from ExpenseFilter.js and updated');
        //= selectedYear;

    }

    const filteredExpense = props.items.filter(expense =>{
        console.log('Expense.js--- Filtering Expense By Year saved to new Array');
        return expense.date.getFullYear().toString() === filteredYear;
    })


    

    return(
        <div>
        <Card className="expenses"> 
        <ExpensesFilter selectYear={filteredYear} onUpdate={updateYearHandler}/>
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
        
        </Card>
        </div>
    )

}

export default Expense;