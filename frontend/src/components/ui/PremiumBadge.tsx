import React from 'react';
import { Shield } from 'lucide-react';

const PremiumBadge = () => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-premium/20 text-premium border border-premium/30">
    <Shield size={10} className="fill-premium" />
    PREMIUM
  </span>
);

export default PremiumBadge;
