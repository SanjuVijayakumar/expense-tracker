import React from 'react'

const Summary = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Total Balance */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Balance
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-2">
            ₹25,000
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Available balance
          </p>
        </div>

        {/* Total Income */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Income
          </p>

          <h2 className="text-2xl font-bold text-green-600 mt-2">
            ₹40,000
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            This month
          </p>
        </div>

        {/* Total Expenses */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Expenses
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-2">
            ₹15,000
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            This month
          </p>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Summary
