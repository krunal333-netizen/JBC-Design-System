import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCIcon } from '../react/Icon';
import { Z_INDEX } from '../zIndex';

const AutomationSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16">
      {/* 1. Icon Normalization Automation */}
      <div className="space-y-8">
        <JBCCard elevation="low" className="p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <i className="ri-magic-line text-jbc-cyan"></i> Icon Normalization Automation
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
            To prevent visual drift when using external utility libraries (Lucide, Tabler, Phosphor), the <code className="jbc-keep-token">JBCIcon</code> component automatically normalizes stroke weights based on the requested size. This removes developer-error risk and ensures brand parity across all icon types.
          </p>
        </JBCCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Automation Logic Mapping</h4>
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
              <table className="w-full text-left border-collapse font-mono text-[11px]">
                <thead className="bg-black/5 dark:bg-white/5">
                  <tr>
                    <th className="p-4 opacity-40 uppercase">Icon Size</th>
                    <th className="p-4 text-jbc-cyan uppercase">Auto Stroke</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  <tr><td className="p-4">16px / 20px</td><td className="p-4 text-jbc-gold font-bold">1.25px</td></tr>
                  <tr><td className="p-4">24px (Baseline)</td><td className="p-4 text-jbc-gold font-bold">1.50px</td></tr>
                  <tr><td className="p-4">32px / 48px</td><td className="p-4 text-jbc-gold font-bold">1.75px</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Safe Usage Rules</h4>
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-gold/5 border-jbc-gold/20' : 'bg-black/5 border-black/10'} space-y-4`}>
               <ul className="text-xs space-y-3 opacity-70">
                 <li className="flex gap-3"><span className="text-jbc-cyan font-bold">01</span> Automation applies only to <code className="jbc-keep-token">source !== "jbc"</code>.</li>
                 <li className="flex gap-3"><span className="text-jbc-cyan font-bold">02</span> Manual <code className="jbc-keep-token">strokeWidth</code> prop always takes priority.</li>
                 <li className="flex gap-3"><span className="text-jbc-cyan font-bold">03</span> Filled icons (<code className="jbc-keep-token">variant="filled"</code>) bypass normalization.</li>
                 <li className="flex gap-3"><span className="text-jbc-cyan font-bold">04</span> JBC brand icons use the global CSS variable for styling.</li>
               </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Z-Index Registry */}
      <div className="space-y-8">
        <JBCCard elevation="low" className="p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <i className="ri-stack-line text-jbc-gold"></i> Centralized Z-Index Registry
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
            A formal registry to manage layering and prevent overlay collision. All interactive layers (modals, toasts, tooltips) <strong>must</strong> reference these tokens rather than using hardcoded values to ensure platform-wide consistency and prevent visual drift.
          </p>
        </JBCCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Registry Tokens</h4>
            <div className="space-y-3">
              {(Object.entries(Z_INDEX) as [string, number][]).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5 group hover:border-jbc-cyan/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-jbc-cyan/10 flex items-center justify-center text-[10px] font-bold text-jbc-cyan">{value}</div>
                    <span className="text-sm font-bold uppercase tracking-widest">{key}</span>
                  </div>
                  <code className="text-[10px] opacity-40 jbc-keep-token">z-jbc-{key}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 print:hidden">
            <h4 className="text-lg font-bold">Implementation Reference</h4>
            <div className="space-y-4">
               <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/5 font-mono text-[11px] leading-relaxed text-white/70">
                  <div className="text-white/40 mb-3">// Tailwind Utility Mapping (Recommended)</div>
                  .z-jbc-dropdown {"{"} z-index: var(--jbc-z-dropdown); {"}"}<br/>
                  .z-jbc-modal {"{"} z-index: var(--jbc-z-modal); {"}"}<br/>
                  .z-jbc-tooltip {"{"} z-index: var(--jbc-z-tooltip); {"}"}<br/>
                  .z-jbc-toast {"{"} z-index: var(--jbc-z-toast); {"}"}<br/><br/>
                  <div className="text-white/40 mb-3">// React Implementation</div>
                  &lt;div className="z-jbc-modal"&gt; ... &lt;/div&gt;
               </div>
               <div className="p-6 rounded-xl border-2 border-dashed border-jbc-error/20 bg-jbc-error/5">
                  <h5 className="text-[10px] font-bold text-jbc-error uppercase tracking-widest mb-2">Governance Requirement</h5>
                  <p className="text-[11px] opacity-60">Manual z-index overrides (e.g. z-[999]) are prohibited. If an intermediate layer is required, update the centralized registry to ensure global alignment.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationSystem;