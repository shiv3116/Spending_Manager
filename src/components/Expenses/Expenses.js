import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedyear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => {
          if (filteredYear === expense.date.getFullYear().toString())
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          return "";
        })}
      </Card>
    </div>
  );
}

export default Expenses;
