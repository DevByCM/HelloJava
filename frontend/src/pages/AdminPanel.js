import React from 'react';

const AdminPanel = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Total Users</p>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Premium Subs</p>
          <p className="text-2xl font-bold">456</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Win Rate</p>
          <p className="text-2xl font-bold text-green-400">72.4%</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">ROI</p>
          <p className="text-2xl font-bold text-blue-400">+18.2%</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
