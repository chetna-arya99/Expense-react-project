import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
       // console.log('ExpenseForm.js');
        setEnteredTitle(event.target.value);
        

    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log('ExpenseForm.js --- submit button pressed --- before data is retieved from from');

        const newAmount = {
            title : enteredTitle,
            amount : enteredPrice,
            date : new Date(enteredDate)
        };
        console.log('ExpenseForm.js --- after newAmount created from form --- before sending data as parameter to NewExpense.js');
        console.log('Done by leveling up state , calling attribute onSaveExpenseData of ExpenseForm declared in NewExpense.js jsx');
       //console.log('ExpenseForm.js/afterSubmitionOfForm/sendToNewExpenses.js');
        props.onSaveExpenseData(newAmount);
        console.log('ExpenseForm.js --- after newAmount send to NewExpense.js --- Form labels back to empty string');
        setEnteredTitle("");
        setEnteredPrice("");
        setEnteredDate("");


    };

    return(
        <form onSubmit= {submitHandler} >
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number"
                      min="0.01"
                      step="0.01" 
                      value = {enteredPrice} 
                      onChange={priceChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" 
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
           </div>
           <div className="new-expense__actions">  
                <button type="submit">Add Expense</button>
           </div>
        </form>
    )

}

export default ExpenseForm;