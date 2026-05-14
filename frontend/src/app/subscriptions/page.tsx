'use client';

import React from 'react';
import { Check, Shield, Zap, Globe, MessageSquare } from 'lucide-react';
import PremiumBadge from '@/components/ui/PremiumBadge';

const SubscriptionPage = () => {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
       <div className="text-center mb-16">
          <PremiumBadge />
          <h1 className="text-4xl font-black mt-4 mb-4">Elevate Your Strategy</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Access elite machine learning models, institutional-grade data feeds, and optimized VIP betting tickets.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="glass-card p-8 border-slate-800">
             <h2 className="text-xl font-bold mb-2">Standard Access</h2>
             <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">$0</span>
                <span className="text-slate-500">/mo</span>
             </div>
             <ul className="space-y-4 mb-8">
                {[
                  'Daily Public Match Analysis',
                  'Basic ROI Analytics',
                  'Match Result History',
                  'Email Support'
                ].map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check size={16} className="text-slate-600" /> {feat}
                  </li>
                ))}
             </ul>
             <button className="w-full py-4 rounded-xl font-bold border border-slate-700 hover:bg-slate-800 transition">
                Current Plan
             </button>
          </div>

          {/* Premium Tier */}
          <div className="glass-card p-8 border-blue-500/30 bg-gradient-to-br from-blue-600/5 to-transparent relative overflow-hidden">
             <div className="absolute -top-12 -right-12 h-32 w-32 bg-blue-500/10 rounded-full blur-3xl" />
             <h2 className="text-xl font-bold mb-2 text-blue-400">VIP Intelligence</h2>
             <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">$49</span>
                <span className="text-slate-500">/mo</span>
             </div>
             <ul className="space-y-4 mb-8">
                {[
                  '90%+ Confidence VIP Tickets',
                  'Real-time SHAP Explainability',
                  'Live Odds Movement Alerts',
                  'Institutional Data (xG, Deep Stats)',
                  'Early Market Predictions',
                  'Priority Telegram Signals'
                ].map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-white text-sm font-medium">
                    <Check size={16} className="text-blue-500" /> {feat}
                  </li>
                ))}
             </ul>
             <button className="w-full py-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition">
                Upgrade to VIP
             </button>
          </div>
       </div>
    </main>
  );
};

export default SubscriptionPage;
