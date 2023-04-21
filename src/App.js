import React, {useState} from 'react';
// import ExpenseTracker from './components/ExpenseTracker';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!category || !name || !date || !amount) {
      alert("Please fill out all fields");
      return;
    }

    setExpenses([...expenses, { category, name, date, amount }]);
    setName('');
    setDate('');
    setAmount('');
    setCategory('');
  }

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  function handleRemoveExpense(index) {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Date:
          <input type="text" value={date} onChange={handleDateChange} />
        </label>
        <label>
          Amount:
          <input type="text" value={amount} onChange={handleAmountChange} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={handleCategoryChange} />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: {expense.name} ({expense.date}): ${expense.amount}
            <button onClick={() => handleRemoveExpense(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total expenses: £{totalExpenses}</p>
    </div>
  );
}

export default App;

