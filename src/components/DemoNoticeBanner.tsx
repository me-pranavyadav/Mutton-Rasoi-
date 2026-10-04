import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#1A1816] border-b border-[#C98A4B]/20 py-2 px-4 text-xs text-[#EDE8DF] relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <Sparkles className="w-3.5 h-3.5 text-[#C98A4B] shrink-0" />
          <span className="truncate">
            <span className="text-[#C98A4B] font-semibold">Demo Presentation Website</span> for MUTTON RASOI · Operating from Ayachi Gram, Baharia & Serving Muzaffarpur
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[#C8C2B7] hover:text-[#FAF8F5] p-1 shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
