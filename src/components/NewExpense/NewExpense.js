import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const formDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.newExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={formDataHandler} />
    </div>
  );
};

export default NewExpense;
