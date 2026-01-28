import React from 'react';
import { JBCEmptyState } from '../react/EmptyState';
import { JBCCard } from '../react/Card';

const ErrorPages: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">System Resilience (Error Pages)</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          Formalized full-page templates for system failures, permission issues, and maintenance windows. These components provide clear resolution paths and maintain JBC brand trust during downtime.
        </p>
      </JBCCard>

      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Type: 404 Not Found</h4>
                <code className="text-[10px] text-jbc-error">FIGMA_SYNC</code>
              </div>
              <JBCEmptyState 
                variant="error"
                icon="ri-map-pin-user-line"
                title="Endpoint Not Resolved"
                description="The requested dashboard or smart contract path does not exist on this network chain. Verify the URL and try again."
                action={{ label: 'Return to Hub', onClick: () => {} }}
              />
           </div>
           
           <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Type: 403 Access Denied</h4>
                <code className="text-[10px] text-jbc-error">FIGMA_SYNC</code>
              </div>
              <JBCEmptyState 
                variant="error"
                icon="ri-lock-password-line"
                title="Vault Restricted"
                description="Your current KYC tier or LP governance weight is insufficient for this pool. Contact treasury for upgrades."
                action={{ label: 'Check Eligibility', onClick: () => {} }}
              />
           </div>
        </div>

        <div className="p-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-dashed border-white/20">
           <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center">
                <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">Type: 503 Maintenance Mode</h4>
                <JBCEmptyState 
                  icon="ri-settings-5-line"
                  title="Network Optimization"
                  description="JBC Finance is currently undergoing scheduled smart contract maintenance. RPC services will resume in 45 minutes."
                />
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
         <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Tailwind Library</span>
            <p className="text-xs opacity-60"><code>.jbc-error-page { "{" } min-h-screen flex items-center { "}" }</code></p>
         </div>
         <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Figma Path</span>
            <p className="text-xs opacity-60">Pages / System / Error Templates</p>
         </div>
         <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Logic Rule</span>
            <p className="text-xs opacity-60">Always provide exactly one Primary Action for resolution.</p>
         </div>
      </div>
    </div>
  );
};

export default ErrorPages;