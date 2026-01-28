import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCIcon } from '../react/Icon';
import { JBCBadge } from '../react/Badge';

const DesignSync: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8 border-l-4 border-jbc-gold bg-jbc-gold/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
          <i className="ri-sync-line text-jbc-gold"></i> Governance / Design Sync
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          To maintain a single source of truth, JBC Finance employs a one-way synchronization pipeline from Figma to the Design System SDK. This automation ensures that documentation, tokens, and metadata are never manually duplicated, reducing the risk of visual and logical drift.
        </p>
      </JBCCard>

      {/* Pipeline Diagram */}
      <div className="space-y-8">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Synchronization Pipeline</h4>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-10 rounded-3xl bg-black/5 dark:bg-white/5 border border-white/5">
          <div className="flex flex-col items-center text-center space-y-3 w-48">
            <div className="w-16 h-16 rounded-2xl bg-[#F24E1E]/10 flex items-center justify-center text-[#F24E1E]">
              <i className="ri-figma-line text-3xl"></i>
            </div>
            <span className="text-xs font-bold">Figma Workspace</span>
            <p className="text-[10px] opacity-40">Styles & Components defined by Design Ops</p>
          </div>

          <div className="hidden lg:block text-jbc-cyan animate-pulse">
            <i className="ri-arrow-right-line text-2xl"></i>
          </div>
          <div className="lg:hidden text-jbc-cyan">
            <i className="ri-arrow-down-line text-2xl"></i>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 w-48">
            <div className="w-16 h-16 rounded-2xl bg-jbc-cyan/10 flex items-center justify-center text-jbc-cyan">
              <i className="ri-file-code-line text-3xl"></i>
            </div>
            <span className="text-xs font-bold">manifest.json</span>
            <p className="text-[10px] opacity-40">Automated export of tokens and node IDs</p>
          </div>

          <div className="hidden lg:block text-jbc-cyan animate-pulse">
            <i className="ri-arrow-right-line text-2xl"></i>
          </div>
          <div className="lg:hidden text-jbc-cyan">
            <i className="ri-arrow-down-line text-2xl"></i>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 w-48">
            <div className="w-16 h-16 rounded-2xl bg-jbc-gold/10 flex items-center justify-center text-jbc-gold">
              <i className="ri-book-read-line text-3xl"></i>
            </div>
            <span className="text-xs font-bold">Live Documentation</span>
            <p className="text-[10px] opacity-40">Auto-generated tables and parity audits</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Metadata Schema</h4>
          <div className="relative bg-[#0D1117] border border-white/10 rounded-2xl p-8 group overflow-hidden">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#8B949E] uppercase tracking-widest">Example manifest.json</div>
            <pre className="font-mono text-[11px] leading-relaxed overflow-x-auto text-[#E6EDF3]">
              <code>
{`{
  "system": "JBC Finance",
  "version": "1.0.0",
  "figma": {
    "file_key": "abc123xyz",
    "last_sync": "2026-02-01T12:00:00Z"
  },
  "entities": {
    "naming": "Entity / {name} / {theme}",
    "binding": "semantic-entities.json"
  },
  "components": {
    "JBCButton": {
      "node_id": "104:12",
      "doc_url": "https://figma.com/...",
      "status": "production",
      "tokens": ["--jbc-cyan", "--jbc-space-4"]
    }
  }
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg font-bold">Sync Governance Rules</h4>
          <div className="space-y-4">
            {[
              { title: 'Adaptive Entities', desc: 'Every semantic entity style must be created as a variant pair (Dark/Light) in the "Entity /" Figma page.' },
              { title: 'Atomic PRs', desc: 'Every Figma style update must trigger a single GitHub PR containing the generated JSON tokens.' },
              { title: 'Version Tagging', desc: 'Figma file versions must match the SDK semantic version (SemVer) to ensure historical parity.' },
              { title: 'Validation Hook', desc: 'The build pipeline fails if the manifest.json contains node IDs not present in the current Figma file.' }
            ].map(rule => (
              <div key={rule.title} className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                <span className="text-xs font-bold text-jbc-cyan block mb-1 uppercase tracking-wider">{rule.title}</span>
                <p className="text-[11px] opacity-60 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roles & Ownership */}
      <div className="pt-16 border-t border-white/5">
        <h4 className="text-lg font-bold mb-8">Ownership Roles</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JBCCard elevation="mid" className="p-6 border-l-4 border-[#F24E1E]">
            <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
              <i className="ri-palette-line"></i> Design Ops (Figma Owner)
            </h5>
            <p className="text-xs opacity-60 leading-relaxed">Responsible for maintaining the master Figma library, naming conventions (Entity/Name/Theme), and triggering the initial token export through the JBC Plugin.</p>
          </JBCCard>
          <JBCCard elevation="mid" className="p-6 border-l-4 border-jbc-cyan">
            <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
              <i className="ri-terminal-box-line"></i> SDK Architect (Code Owner)
            </h5>
            <p className="text-xs opacity-60 leading-relaxed">Responsible for the ingestion script, token mapping logic, and ensuring the auto-generated documentation renders correctly across all platforms.</p>
          </JBCCard>
        </div>
      </div>
    </div>
  );
};

export default DesignSync;