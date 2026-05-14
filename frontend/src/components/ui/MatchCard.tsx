import React from 'react';
import { Match, Prediction } from '@/types';
import PremiumBadge from './PremiumBadge';
import { Zap } from 'lucide-react';

interface MatchCardProps {
  match: Match;
  prediction?: Prediction;
  isLocked?: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, prediction, isLocked }) => {
  return (
    <div className="glass-card overflow-hidden group hover:border-blue-500/50 transition duration-300">
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
           <span>{match.league}</span>
           <span>{new Date(match.match_date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="flex-1 flex flex-col items-center">
            <div className="h-12 w-12 bg-slate-800 rounded-full mb-2 border border-slate-700 group-hover:border-blue-500/30 transition" />
            <p className="font-bold text-sm">{match.home_team}</p>
          </div>
          <div className="px-4 text-slate-600 font-black italic">VS</div>
          <div className="flex-1 flex flex-col items-center">
            <div className="h-12 w-12 bg-slate-800 rounded-full mb-2 border border-slate-700 group-hover:border-blue-500/30 transition" />
            <p className="font-bold text-sm text-right">{match.away_team}</p>
          </div>
        </div>

        {isLocked ? (
          <div className="mt-2 pt-4 border-t border-slate-700/50 filter blur-sm select-none">
             <div className="flex justify-between items-center">
                <div className="h-4 w-32 bg-slate-800 rounded" />
                <div className="h-4 w-16 bg-slate-800 rounded" />
             </div>
          </div>
        ) : (
          <div className="mt-2 pt-4 border-t border-slate-700/50">
             <div className="flex justify-between items-end">
               <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">AI Recommendation</p>
                  <p className="text-blue-400 font-bold">{prediction?.prediction_value || 'Analyzing...'}</p>
               </div>
               <div className="text-right">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold text-sm">
                    <Zap size={14} className="fill-emerald-400" />
                    {prediction?.confidence_score}%
                  </div>
               </div>
             </div>
          </div>
        )}
      </div>

      {isLocked && (
        <div className="absolute inset-x-0 bottom-0 top-1/2 flex items-center justify-center bg-brand-dark/20 backdrop-blur-[2px]">
           <div className="flex flex-col items-center">
              <PremiumBadge />
              <button className="mt-2 text-[10px] font-bold text-blue-400 hover:underline">Unlock Analysis</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
