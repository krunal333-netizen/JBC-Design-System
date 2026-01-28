import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';
import { JBCIcon } from '../react/Icon';

const VersioningSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8 border-l-4 border-jbc-cyan bg-jbc-cyan/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
          <i className="ri-history-line text-jbc-cyan"></i> Governance / Versioning
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          The JBC Design System follows <strong>Semantic Versioning (SemVer)</strong> to communicate the nature of changes to developers and designers. This ensures predictability in dependency management and prevents unintended visual or logical breaking changes in production.
        </p>
      </JBCCard>

      {/* Version Rules */}
      <div className="space-y-8">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Semantic Rules</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-jbc-error/20 bg-jbc-error/5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-jbc-error">MAJOR</span>
              <JBCBadge variant="error">X.0.0</JBCBadge>
            </div>
            <p className="text-xs opacity-60 leading-relaxed">
              <strong>Breaking Changes:</strong> Token renames, prop removal, or significant visual overhauls that require developer migration effort.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-jbc-cyan/20 bg-jbc-cyan/5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-jbc-cyan">MINOR</span>
              <JBCBadge variant="primary">0.X.0</JBCBadge>
            </div>
            <p className="text-xs opacity-60 leading-relaxed">
              <strong>New Features:</strong> Addition of new components, tokens, or documentation sections that are backward-compatible.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-jbc-gold/20 bg-jbc-gold/5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-jbc-gold">PATCH</span>
              <JBCBadge variant="warning">0.0.X</JBCBadge>
            </div>
            <p className="text-xs opacity-60 leading-relaxed">
              <strong>Bug Fixes:</strong> Internal logic adjustments, accessibility improvements, or documentation typos. No public API changes.
            </p>
          </div>
        </div>
      </div>

      {/* Release Cycle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Release Governance</h4>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Audit Parity', desc: 'Verify that Figma assets match the React and Native SDK implementations.' },
              { step: '02', title: 'A11Y Review', desc: 'Manual and automated accessibility audit for all new or changed primitives.' },
              { step: '03', title: 'Peer Approval', desc: 'Design Ops and SDK Architect sign-off required for all MINOR/MAJOR bumps.' },
              { step: '04', title: 'Publish Metadata', desc: 'Update version.json and changelog.md before merging to main branch.' }
            ].map(item => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5">
                <span className="text-xs font-mono text-jbc-cyan font-bold">{item.step}</span>
                <div>
                  <div className="text-xs font-bold uppercase mb-1">{item.title}</div>
                  <p className="text-[11px] opacity-40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Changelog Format</h4>
          <div className="relative bg-[#0D1117] border border-white/10 rounded-2xl p-8 group overflow-hidden">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#8B949E] uppercase tracking-widest">Standard Markdown</div>
            <pre className="font-mono text-[11px] leading-relaxed overflow-x-auto text-[#E6EDF3]">
              <code>
{`## [2.4.0] - 2026-02-01
### Added
- JBCValidationSummary component.
- Figma-to-Code Sync Layer.

### Fixed
- Contrast ratio on Button/Accent.
- Z-index collision in Tooltips.`}
              </code>
            </pre>
          </div>
          <div className="p-4 rounded-xl border-2 border-dashed border-white/10">
             <p className="text-[10px] opacity-50 italic">"The changelog is a human-readable journal of change. It should explain the 'Why' behind every update."</p>
          </div>
        </div>
      </div>

      {/* Component Maturity */}
      <div className="pt-16 border-t border-white/5">
        <h4 className="text-lg font-bold mb-8 text-center">Component Maturity Scale</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: 'Sandbox', color: 'bg-black/20', desc: 'Experimental, may change without notice.' },
            { label: 'Stable', color: 'bg-jbc-success/20 text-jbc-success border-jbc-success/40', desc: 'Production-ready, follows SemVer.' },
            { label: 'Legacy', color: 'bg-jbc-gold/20 text-jbc-gold border-jbc-gold/40', desc: 'Deprecated, scheduled for removal in v3.0.' }
          ].map(status => (
            <JBCCard key={status.label} elevation="flat" className={`p-6 max-w-[240px] text-center ${status.color}`}>
              <span className="text-xs font-bold uppercase tracking-widest block mb-2">{status.label}</span>
              <p className="text-[10px] opacity-70 leading-relaxed">{status.desc}</p>
            </JBCCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VersioningSystem;
