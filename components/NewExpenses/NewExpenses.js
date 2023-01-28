import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

    const saveExpenseDataHandler = (newExpenseData) =>{
        console.log('NewExpenses.js --- recieved new added data from ExpenseForm.js')
        const newData = {
            ...newExpenseData,
            id : Math.random().toString()
        }
        console.log('NewExpenses.js --- created new data = recived data + id --- before newData send to App.js')
        props.addExpense(newData);
        console.log('NewExpenses.js --- after newdata send to App.js ---');
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

        </div>
        
    )

}

export default NewExpenses;