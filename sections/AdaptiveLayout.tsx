import React from 'react';
import { ADAPTIVE_RULES_SPEC, ELEVATION_SPEC } from '../constants';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';

const AdaptiveLayout: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16">
      {/* Purpose & Principles */}
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Purpose</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          Formalizing cross-device parity without logic branching. Our adaptive system ensures that while UI representations may shift to accommodate hardware constraints (screen real estate, input method), the underlying data models, security protocols, and backend logic remain strictly invariant.
        </p>
      </JBCCard>

      {/* Breakpoints Visualization */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">System Breakpoints</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ADAPTIVE_RULES_SPEC.breakpoints.map((bp) => (
            <div key={bp.name} className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="text-sm font-bold mb-1" style={{ color: jbcCyan }}>{bp.name}</div>
              <div className="text-xs font-mono opacity-50 mb-3">{bp.range}</div>
              <p className="text-xs opacity-80 leading-relaxed">{bp.logic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Component Adaptation Rules */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Component Parity Rules</h4>
        <div className="overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
          <table className="w-full text-left border-collapse">
            <thead className={`${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Component</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Desktop (Pointer)</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Mobile (Touch)</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Logic Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {ADAPTIVE_RULES_SPEC.rules.map((rule) => (
                <tr key={rule.component} className="text-xs">
                  <td className="px-6 py-4 font-bold">{rule.component}</td>
                  <td className="px-6 py-4 opacity-70">{rule.desktop}</td>
                  <td className="px-6 py-4 opacity-70">{rule.mobile}</td>
                  <td className="px-6 py-4">
                    <JBCBadge variant="primary">{rule.mapping}</JBCBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interaction Mapping */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Interaction Differences</h4>
          <p className="text-sm opacity-70">Replacing pointer-based hover effects with touch-optimized haptic and visual feedback states.</p>
          <div className="space-y-3">
            {[
              { label: 'Hover States', web: 'Tooltips / Scale-up', native: 'N/A (Replaced by Active/Focus)' },
              { label: 'Context Actions', web: 'Right-click / Hover icon', native: 'Long-press / Swipe gesture' },
              { label: 'Input Focus', web: 'Outline + Glow', native: 'Input focus + System Keyboard toggle' }
            ].map(item => (
              <div key={item.label} className="p-4 rounded-xl bg-black/5 dark:bg-white/5 flex justify-between items-center text-xs">
                <span className="font-bold">{item.label}</span>
                <span className="opacity-40">{item.web} → {item.native}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Platform Mapping</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-black/5 border-black/10'}`}>
              <div className="flex items-center gap-2 mb-3 text-jbc-gold">
                <i className="ri-apple-fill"></i>
                <span className="text-[10px] font-bold uppercase tracking-widest">iOS (HIG)</span>
              </div>
              <ul className="text-[10px] space-y-2 opacity-60">
                <li>• Use <code>SwiftUI.Menu</code> for drawers</li>
                <li>• Map 44pt minimum targets</li>
                <li>• Support Haptic Engine (UIFeedback)</li>
              </ul>
            </div>
            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-black/5 border-black/10'}`}>
              <div className="flex items-center gap-2 mb-3 text-jbc-cyan">
                <i className="ri-android-fill"></i>
                <span className="text-[10px] font-bold uppercase tracking-widest">Android (M3)</span>
              </div>
              <ul className="text-[10px] space-y-2 opacity-60">
                <li>• Modal Bottom Sheets (Standard)</li>
                <li>• Map 48dp minimum targets</li>
                <li>• Use Material Elevation tokens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Governance */}
      <div className={`p-8 rounded-2xl border-2 border-dashed ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="ri-shield-user-line text-jbc-gold"></i> Governance Requirement
        </h3>
        <p className="text-xs leading-relaxed opacity-70">
          Any new component added to the JBC Design System **must** explicitly define its behavior across all three core breakpoints before being admitted to the production SDK.
        </p>
        <div className="mt-4 flex gap-3">
          {['Desktop Layout', 'Mobile Layout', 'Interaction Model', 'Touch Targets'].map(tag => (
             <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/10 dark:bg-white/10 uppercase font-bold">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdaptiveLayout;