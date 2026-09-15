import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import TransactionForm from './components/transactionForm/TransactionForm';
import TransactionList from './components/transactionList/TransactionList';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      return JSON.parse(saved);
    }
    // Opening balance transaction
    return [
      {
        id: Date.now(),
        title: "Opening Balance",
        amount: 10000,
        category: "initial",
        date: new Date().toISOString().split("T")[0],
        type: "income",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Summary transactions= {transactions} />
        <TransactionForm setTransactions= {setTransactions} />
        <TransactionList transactions={transactions} setTransactions= {setTransactions} />
      </main>
    </>
  )
}

export default App
