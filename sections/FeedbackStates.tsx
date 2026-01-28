import React from 'react';
import { JBCSkeleton } from '../react/Skeleton';
import { JBCEmptyState } from '../react/EmptyState';
import { JBCCard } from '../react/Card';
import { ENTERPRISE_SPEC } from '../constants';

const FeedbackStates: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Feedback & Placeholders</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          Predictive loading states and empty data handlers ensure the user never faces a broken interface. Skeletons mirror the final content geometry to prevent layout shifts during async fetching.
        </p>
      </JBCCard>

      {/* Skeleton / Loading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Skeleton Library</h4>
             <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="space-y-6 p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            <div className="space-y-2">
               <div className="text-[10px] font-bold opacity-40">Card Loading Variant</div>
               <JBCSkeleton variant="card" />
            </div>
            <div className="space-y-2">
               <div className="text-[10px] font-bold opacity-40">Grid Loading Variant</div>
               <JBCSkeleton variant="table" />
            </div>
            <div className="pt-4 border-t border-white/5">
               <h5 className="text-[10px] font-bold text-jbc-cyan uppercase mb-2">Shimmer Logic</h5>
               <p className="text-[11px] opacity-40 leading-relaxed">
                 Uses a CSS linear-gradient background moving on a 2s infinite loop. The opacity is locked to JBC Neutral tokens to maintain subtle motion that doesn't trigger vestibular sensitivity.
               </p>
            </div>
          </div>
        </div>

        {/* Empty States */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Blank Canvas Scenarios</h4>
             <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <JBCEmptyState 
            title="Empty History" 
            description="No transactions detected on this chain. Link your cold wallet or execute a swap to populate this dashboard." 
            action={{ label: 'Start Trading', onClick: () => {} }}
          />
          <div className="grid grid-cols-2 gap-4">
             <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-[#0D1117] border-white/5' : 'bg-black/5 border-black/10'}`}>
                <div className="text-[10px] font-bold text-jbc-gold mb-1 uppercase">iOS Equivalent</div>
                <div className="text-[10px] opacity-50">{ENTERPRISE_SPEC.platformMapping.ios.error}</div>
             </div>
             <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-[#0D1117] border-white/5' : 'bg-black/5 border-black/10'}`}>
                <div className="text-[10px] font-bold text-jbc-cyan mb-1 uppercase">Figma Page</div>
                <div className="text-[10px] opacity-50">Components / Empty States</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStates;