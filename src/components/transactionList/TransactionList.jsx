import React from "react";

const transactions = [
  {
    id: 1,
    title: "Grocery Shopping",
    category: "Food",
    date: "05 Sep 2026",
    amount: 1200,
    type: "expense",
  },
  {
    id: 2,
    title: "Monthly Salary",
    category: "Salary",
    date: "01 Sep 2026",
    amount: 40000,
    type: "income",
  },
  {
    id: 3,
    title: "Uber",
    category: "Transport",
    date: "03 Sep 2026",
    amount: 450,
    type: "expense",
  },
  {
    id: 4,
    title: "Netflix",
    category: "Entertainment",
    date: "02 Sep 2026",
    amount: 649,
    type: "expense",
  },
];

const TransactionList = ({ transactions, setTransactions }) => {

    const handleDelete = (id) => {
        setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
        );
    };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Recent Transactions
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your latest income and expenses
            </p>
          </div>

          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View All
          </button>
        </div>

        {/* Transaction List */}
        <div className="divide-y divide-slate-100">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
            >

              {/* Left Side */}
              <div className="flex items-center gap-4">

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {transaction.type === "income" ? "↓" : "↑"}
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {transaction.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500">
                      {transaction.category}
                    </span>

                    <span className="text-slate-300">•</span>

                    <span className="text-xs text-slate-400">
                      {transaction.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amount + Actions */}
              <div className="flex items-center gap-5">

                <span
                  className={`text-sm font-bold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}₹
                  {transaction.amount.toLocaleString("en-IN")}
                </span>

                <button
                    onClick={() => handleDelete(transaction.id)}
                    className="text-slate-400 hover:text-red-500 transition"
                    title="Delete transaction"
                >
                  🗑
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransactionList;