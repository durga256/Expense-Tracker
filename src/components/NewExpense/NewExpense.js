import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = (props) => {
  const expenseHandler = (event) => {
    props.onSaveHandler(event);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitHandler={expenseHandler}/>
    </div>
  );
};

export default NewExpense;
