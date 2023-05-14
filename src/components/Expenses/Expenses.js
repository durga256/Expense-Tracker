import {useState} from 'react';
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}