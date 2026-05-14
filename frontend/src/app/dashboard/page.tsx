'use client';

import React, { useState } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Clock, LayoutDashboard, Database, Settings } from 'lucide-react';
import MatchCard from '@/components/ui/MatchCard';
import { Match, Prediction } from '@/types';

const MOCK_MATCHES: Match[] = [
  { id: 1, external_id: '1', home_team: 'Arsenal', away_team: 'Brentford', league: 'Premier League', match_date: new Date().toISOString(), status: 'TIMED' },
  { id: 2, external_id: '2', home_team: 'Real Madrid', away_team: 'RB Leipzig', league: 'Champions League', match_date: new Date().toISOString(), status: 'TIMED' },
  { id: 3, external_id: '3', home_team: 'Man City', away_team: 'Man Utd', league: 'Premier League', match_date: new Date().toISOString(), status: 'TIMED' },
  { id: 4, external_id: '4', home_team: 'Bayern', away_team: 'Lazio', league: 'Champions League', match_date: new Date().toISOString(), status: 'TIMED' },
];

const MOCK_PREDICTIONS: Record<number, Prediction> = {
  1: { id: 101, match_id: 1, market: '1X2', prediction_value: 'Home Win + Over 1.5', confidence_score: 91, probabilities: {} },
  2: { id: 102, match_id: 2, market: '1X2', prediction_value: 'Home Win', confidence_score: 84, probabilities: {} },
};

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('predictions');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-20 lg:w-64 border-r border-slate-800 bg-brand-dark flex flex-col p-4">
        <div className="flex items-center gap-3 px-2 mb-12">
          <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl">B</div>
          <span className="hidden lg:block font-black text-lg tracking-tight">BET INTEL</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: 'predictions', label: 'Predictions', icon: LayoutDashboard },
            { id: 'analytics', label: 'ROI Analytics', icon: BarChart3 },
            { id: 'data', label: 'Data Lab', icon: Database },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition font-medium ${activeTab === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'}`}
            >
              <item.icon size={20} />
              <span className="hidden lg:block">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-3 py-3 text-slate-500 hover:text-slate-300 transition mt-auto">
          <Settings size={20} />
          <span className="hidden lg:block">Settings</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#0a0c10] p-4 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
             <h1 className="text-2xl font-black">Match Intelligence Hub</h1>
             <p className="text-slate-500 text-sm">Aggregating real-time data from 14 global feeds</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col text-right">
               <p className="text-xs font-bold text-slate-400">Subscription Status</p>
               <p className="text-xs font-black text-premium">PREMIUM ACTIVE</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700" />
          </div>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="glass-card p-6 bg-gradient-to-br from-blue-600/10 to-transparent border-blue-500/20">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Model Confidence (AVG)</p>
              <p className="text-3xl font-black text-blue-400">88.4%</p>
           </div>
           <div className="glass-card p-6 bg-gradient-to-br from-emerald-600/10 to-transparent border-emerald-500/20">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Accuracy (L7 Days)</p>
              <p className="text-3xl font-black text-emerald-400">76.2%</p>
           </div>
           <div className="glass-card p-6 bg-gradient-to-br from-premium/10 to-transparent border-premium/20">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Active Tickets</p>
              <p className="text-3xl font-black text-premium">2 VIP</p>
           </div>
        </div>

        {/* Predictions Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
           {MOCK_MATCHES.map((match) => (
             <MatchCard
                key={match.id}
                match={match}
                prediction={MOCK_PREDICTIONS[match.id]}
                isLocked={match.id > 2}
             />
           ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
