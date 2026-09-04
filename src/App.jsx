import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import TransactionForm from './components/transactionForm/TransactionForm';
import TransactionList from './components/transactionList/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Summary transactions= {transactions} />
        <TransactionForm setTransations= {setTransactions} />
        <TransactionList transactions={transactions} setTransactions= {setTransactions} />
      </main>
    </>
  )
}

export default App
