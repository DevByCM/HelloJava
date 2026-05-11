import React, { useState, useEffect } from 'react';
import { Layout, TrendingUp, Shield, Lock } from 'lucide-react';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">AI Betting Intelligence</h1>
          <p className="text-slate-400">Professional Match Analysis & Optimized Slips</p>
        </div>
        <div className="flex gap-4">
          {!user ? (
            <button className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Login</button>
          ) : (
            <div className="text-right">
              <p className="font-bold">{user.full_name}</p>
              <p className="text-sm text-blue-400 capitalize">{user.role} Tier</p>
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Ticket Section */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-green-400" />
            <h2 className="text-xl font-bold">Standard Ticket</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
              <p className="text-sm text-slate-400">Target Odds: 2.10</p>
              <p className="text-lg font-semibold">3 Matches Analyzed</p>
            </div>
          </div>
        </div>

        {/* Premium Ticket Section */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-800 to-blue-900/20 p-6 rounded-2xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-blue-400" />
            <h2 className="text-xl font-bold text-blue-400">VIP Premium Ticket</h2>
          </div>

          {user?.role === 'premium' ? (
             <div className="space-y-4">
               {/* Premium Content would go here */}
             </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Lock size={48} className="text-slate-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Premium Content Locked</h3>
              <p className="text-slate-400 mb-6 max-w-md">Upgrade to Premium to unlock high-confidence VIP slips, early predictions, and real-time AI updates.</p>
              <button className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">Upgrade to Premium</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
