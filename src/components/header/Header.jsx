import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">$</span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Expense Tracker
              </h1>
              <p className="text-xs text-slate-500">
                Manage your finances
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#dashboard"
              className="text-sm font-medium text-blue-600"
            >
              Dashboard
            </a>

            <a
              href="#expenses"
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition"
            >
              Expenses
            </a>

            <a
              href="#reports"
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition"
            >
              Reports
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            <button
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-sm"
            >
              <span className="text-lg leading-none">+</span>
              Add Expense
            </button>

            {/* Profile */}
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
              <span className="text-sm font-semibold text-slate-600">
                SV
              </span>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;