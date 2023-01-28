
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {

    console.log('ExpenseList.js --- new filterd expense array mapped to ExpenseItem.js'); 
    if(props.items.length === 0){
        return <h1 className="expenses-list__fallback">No Expense found.</h1>;
            
    }
    return(
        <ul className="expenses-list">
          {props.items.map((item) => <ExpenseItem 
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}></ExpenseItem>)}
            
    </ul>)
}

export default ExpenseList;