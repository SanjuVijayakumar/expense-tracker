import React, { useState } from "react";

const TransactionForm = ({ setTransations }) => {
    console.log(setTransations, "settransaction hits here");
    
  const [type, setType] = useState("expense");

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "expense",
  });

  console.log(formData, "formdata hits here");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
        id: Date.now(),
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date,
        type: formData.type,
    };
    setTransactions((prevTransactions) => [
        ...prevTransactions,
        newTransaction,
        ]);

        setFormData({
        title: "",
        amount: "",
        category: "",
        date: "",
        type: "expense",
        });

        setType("expense");

  }
  

  return (
    <section className="max-w-7xl mx-auto px-6 pb-6">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Add Transaction
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Record your income or expense
          </p>
        </div>

        {/* Transaction Type */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            onClick={() => {
                setType("expense");
                setFormData({
                    ...formData,
                    type: "expense",
                });
            }}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
              type === "expense"
                ? "bg-red-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Expense
          </button>

          <button
            type="button"
            onClick={() => {
                setType("income");
                setFormData({
                    ...formData,
                    type: "income",
                });
            }}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
              type === "income"
                ? "bg-green-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Income
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <input
                type="text"
                placeholder="e.g. Grocery shopping"
                value={formData.title}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    title: e.target.value,
                    })
                }
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Amount
            </label>
            <input
                type="number"
                placeholder="₹ 0.00"
                value={formData.amount}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    amount: e.target.value,
                    })
                }
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Category
            </label>
            <select
                value={formData.category}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    category: e.target.value,
                    })
                }
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="shopping">Shopping</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Date
            </label>
            <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    date: e.target.value,
                    })
                }
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 lg:col-span-4 flex justify-end">
            <button
            //   onSubmit={handleSubmit}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition"
            >
              Add Transaction
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default TransactionForm;