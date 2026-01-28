import React, { useState } from 'react';
import { JBCCard } from '../react/Card';
import { JBCIcon } from '../react/Icon';
import { JBCButton } from '../react/Button';

const RTLSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [isRTLEnabled, setIsRTLEnabled] = useState(false);

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Internationalization / RTL Support</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          The JBC Design System is hardened for multi-lingual scalability. By utilizing <strong>CSS Logical Properties</strong>, 
          we ensure that layouts mirror horizontally when Right-to-Left (RTL) mode is enabled, 
          providing a first-class experience for Arabic, Hebrew, and Persian markets.
        </p>
      </JBCCard>

      {/* RTL Mirror Preview */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Interactive Mirror Preview</h4>
          <JBCButton size="sm" variant="outlined" onClick={() => setIsRTLEnabled(!isRTLEnabled)}>
            {isRTLEnabled ? 'Switch to LTR' : 'Switch to RTL'}
          </JBCButton>
        </div>
        
        <div 
          dir={isRTLEnabled ? 'rtl' : 'ltr'} 
          className={`p-10 rounded-2xl border transition-all duration-500 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}
        >
          <div className="flex flex-col gap-8">
            {/* Nav Simulation */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
              <div className="w-10 h-10 rounded-xl bg-jbc-cyan/20 flex items-center justify-center text-jbc-cyan">
                <i className="ri-shield-user-line text-xl"></i>
              </div>
              <div className="flex-1">
                <h5 className="font-bold">Account Profile</h5>
                <p className="text-xs opacity-40">Manage your institutional wallet</p>
              </div>
              <div className="jbc-rtl-flip">
                <JBCIcon name="ri-arrow-right-s-line" size={24} className="opacity-40" />
              </div>
            </div>

            {/* List Simulation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 flex items-center gap-4">
                <JBCIcon name="ri-coins-line" className="text-jbc-gold" />
                <div className="text-start">
                   <div className="text-xs font-bold">Total Staked</div>
                   <div className="text-sm font-mono text-jbc-cyan">12,450.00 JBC</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 flex items-center gap-4">
                <JBCIcon name="ri-line-chart-line" className="text-jbc-cyan" />
                <div className="text-start">
                   <div className="text-xs font-bold">24h Volume</div>
                   <div className="text-sm font-mono text-jbc-gold">$1.2M USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-center opacity-30 uppercase tracking-widest">
            {isRTLEnabled ? 'Right-to-Left Mode Active' : 'Left-to-Right Mode Active'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Logical Properties</h4>
          <div className="space-y-4 text-xs opacity-70">
            <p>Instead of hardcoding "left" or "right", use logical equivalents that adapt to text direction.</p>
            <div className="overflow-hidden rounded-xl border border-white/5">
              <table className="w-full text-left border-collapse font-mono text-[10px]">
                <thead className="bg-black/20">
                  <tr>
                    <th className="p-3 opacity-40">Physical</th>
                    <th className="p-3 text-jbc-cyan">Logical (JBC)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="p-3">margin-left</td><td className="p-3 text-jbc-gold">margin-inline-start (.ms-*)</td></tr>
                  <tr><td className="p-3">padding-right</td><td className="p-3 text-jbc-gold">padding-inline-end (.pe-*)</td></tr>
                  <tr><td className="p-3">left: 0</td><td className="p-3 text-jbc-gold">inset-inline-start (.start-0)</td></tr>
                  <tr><td className="p-3">text-align: left</td><td className="p-3 text-jbc-gold">text-align: start (.text-start)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Directional Icon Logic</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-6">
            <div className="flex gap-8 items-center justify-center">
              <div className="text-center space-y-2">
                 <div className="p-4 rounded-xl bg-jbc-cyan/10 text-jbc-cyan mb-2">
                   <JBCIcon name="ri-arrow-right-line" size={32} />
                 </div>
                 <div className="text-[10px] font-bold opacity-40 uppercase">LTR Arrow</div>
              </div>
              <div className="text-jbc-gold text-2xl">→</div>
              <div className="text-center space-y-2">
                 <div className="p-4 rounded-xl bg-jbc-cyan/10 text-jbc-cyan mb-2">
                   <JBCIcon name="ri-arrow-right-line" size={32} className="jbc-rtl-flip" />
                 </div>
                 <div className="text-[10px] font-bold opacity-40 uppercase">RTL Mirrored</div>
              </div>
            </div>
            <p className="text-xs opacity-60 text-center italic">
              "Directional icons (arrows, chevrons, carets) must use the <code>.jbc-rtl-flip</code> class to maintain semantic meaning."
            </p>
          </div>
        </div>
      </div>

      {/* Safety Rules */}
      <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-gold/5 border-jbc-gold/20' : 'bg-jbc-gold/5 border-jbc-gold/10'}`}>
        <h4 className="text-sm font-bold mb-4 uppercase tracking-widest flex items-center gap-2">
           <i className="ri-shield-check-line text-jbc-gold"></i> RTL Safety Requirements
        </h4>
        <ul className="text-xs space-y-3 opacity-70">
          <li className="flex gap-3"><span className="text-jbc-cyan font-bold">Rule 01:</span> Numbers and currency (e.g. $10.00) usually remain LTR even in RTL contexts for financial clarity.</li>
          <li className="flex gap-3"><span className="text-jbc-cyan font-bold">Rule 02:</span> Brand logos and fixed non-directional status icons (check, info, warning) should NOT flip.</li>
          <li className="flex gap-3"><span className="text-jbc-cyan font-bold">Rule 03:</span> Secondary navigation order must reverse (e.g. Breadcrumbs flow from Right-to-Left).</li>
        </ul>
      </div>
    </div>
  );
};

export default RTLSystem;