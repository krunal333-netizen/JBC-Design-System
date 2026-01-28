import React from 'react';
import { ICON_GOVERNANCE_SPEC } from '../constants';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';

const IconGovernance: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16">
      {/* Overview Card */}
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Governed Icon System</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          A formal system for unified visual dialect across the JBC ecosystem. All icons adhere to a strict geometry and export pipeline to ensure backward compatibility and cross-platform fidelity.
        </p>
      </JBCCard>

      {/* Geometry Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Geometry & Grid</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="text-[10px] opacity-40 mb-1">Grid Size</div>
              <div className="text-lg font-bold">{ICON_GOVERNANCE_SPEC.grid}</div>
            </div>
            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="text-[10px] opacity-40 mb-1">Stroke Placement</div>
              <div className="text-lg font-bold">{ICON_GOVERNANCE_SPEC.strokePlacement}</div>
            </div>
            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="text-[10px] opacity-40 mb-1">Caps & Joins</div>
              <div className="text-lg font-bold">{ICON_GOVERNANCE_SPEC.capsAndJoins}</div>
            </div>
            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="text-[10px] opacity-40 mb-1">Corner Radius</div>
              <div className="text-lg font-bold">{ICON_GOVERNANCE_SPEC.cornerRadius}</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">External Normalization</h4>
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-[#DA3633]/5 border-[#DA3633]/20' : 'bg-[#DA3633]/5 border-[#DA3633]/10'}`}>
             <div className="flex items-center gap-2 mb-4">
                <i className="ri-error-warning-line text-jbc-error"></i>
                <span className="text-xs font-bold uppercase tracking-widest">Utility Rules</span>
             </div>
             <ul className="space-y-3">
               {ICON_GOVERNANCE_SPEC.externalNormalization.rules.map((rule, idx) => (
                 <li key={idx} className="text-[11px] flex gap-2">
                   <span className="text-jbc-cyan font-bold">•</span>
                   <span className="opacity-70">{rule}</span>
                 </li>
               ))}
             </ul>
             <div className="mt-6 pt-4 border-t border-jbc-error/10">
                <p className="text-[10px] italic text-jbc-error">{ICON_GOVERNANCE_SPEC.externalNormalization.usageWarning}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Style Variants & Motion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        <div className="space-y-6">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Style Variants</h4>
          <div className="flex flex-wrap gap-2">
            {ICON_GOVERNANCE_SPEC.variants.map(variant => (
              <JBCBadge key={variant} variant="primary" className="px-4 py-2 capitalize">{variant}</JBCBadge>
            ))}
          </div>
          <p className="text-xs opacity-60 leading-relaxed">
            All variants are bound exclusively to JBC color tokens. Direct hex overrides are prohibited in the production SDK.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Animation Timing</h4>
          <div className="grid grid-cols-3 gap-4">
            {ICON_GOVERNANCE_SPEC.timing.map(timing => (
              <div key={timing.id} className="text-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5">
                <div className="text-[10px] opacity-40 mb-1">{timing.label}</div>
                <div className="text-sm font-bold text-jbc-gold">{timing.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Pipeline */}
      <div className="pt-12 border-t border-black/5 dark:border-white/5">
        <h4 className="text-lg font-bold mb-8">Figma-to-SVG Pipeline</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {ICON_GOVERNANCE_SPEC.pipeline.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-jbc-cyan/10 flex items-center justify-center text-[10px] font-bold text-jbc-cyan shrink-0">{idx + 1}</div>
                <span className="text-sm opacity-80">{step}</span>
              </div>
            ))}
          </div>
          <JBCCard elevation="mid" className="bg-[#0D1117] border-white/5 p-6">
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-4">CDN Structure</div>
            <code className="text-jbc-cyan text-xs break-all">
              {ICON_GOVERNANCE_SPEC.cdnStructure}
            </code>
            <div className="mt-6 flex items-center gap-3">
              <i className="ri-cloud-line text-jbc-gold"></i>
              <span className="text-[10px] font-bold opacity-60">PRODUCTION ASSET RESOLVER</span>
            </div>
          </JBCCard>
        </div>
      </div>
    </div>
  );
};

export default IconGovernance;