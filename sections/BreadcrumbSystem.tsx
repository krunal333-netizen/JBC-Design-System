import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCBreadcrumb } from '../react/JBCBreadcrumb';
import { JBCIcon } from '../react/Icon';

const BreadcrumbSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const exampleItems = [
    { label: 'Home', href: '#', icon: 'ri-home-4-line' },
    { label: 'Settings', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'API Keys', href: '#' },
  ];

  const deepItems = [
    { label: 'Protocol', href: '#' },
    { label: 'Vaults', href: '#' },
    { label: 'ETH/JBC LP', href: '#' },
    { label: 'Staking', href: '#' },
    { label: 'Reward History', href: '#' },
  ];

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Navigation / Breadcrumbs</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          Breadcrumbs allow users to keep track of their location within the JBC application hierarchy. 
          They are particularly useful in deep configuration menus, sub-protocol dashboards, 
          and multi-step financial flows where the parent context needs to remain visible.
        </p>
      </JBCCard>

      {/* Live Examples */}
      <div className="space-y-12">
        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Standard Hierarchy</h4>
          <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            <JBCBreadcrumb items={exampleItems} />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Deep/Truncated Path</h4>
          <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            <JBCBreadcrumb items={deepItems} />
          </div>
          <p className="text-[10px] opacity-40 italic">Note: Shrink your browser window to see the middle items collapse into a "..." on mobile view.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Usage Rules</h4>
          <div className="space-y-4 text-xs opacity-70">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="ri-checkbox-circle-line text-jbc-success mt-0.5" />
                <div>
                  <span className="font-bold block text-black dark:text-white">When to Use</span>
                  Recommended for page hierarchies deeper than 2 levels. Use when navigating from a list view to an entity view (e.g., Vaults > ETH Vault).
                </div>
              </li>
              <li className="flex gap-3">
                <i className="ri-close-circle-line text-jbc-error mt-0.5" />
                <div>
                  <span className="font-bold block text-black dark:text-white">When NOT to Use</span>
                  Do not use for primary global navigation. Avoid in single-level applications where Sidebar/Tabs are sufficient.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Accessibility & UX</h4>
          <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <JBCIcon name="ri-user-smile-line" size={20} className="text-jbc-cyan" />
              <span className="text-xs font-bold uppercase tracking-widest">A11Y Checklist</span>
            </div>
            <ul className="text-xs opacity-60 space-y-3">
              <li>• <code className="text-jbc-cyan">aria-label="Breadcrumb"</code>: Standardized for assistive tech.</li>
              <li>• <code className="text-jbc-cyan">aria-current="page"</code>: Applied to the final non-link element.</li>
              <li>• <code className="text-jbc-cyan">Truncation</code>: Prevents line-wrapping on narrow screens while keeping the origin and destination visible.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code Usage */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Implementation Guide</h4>
        <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 group overflow-hidden">
          <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-[#E6EDF3]">
            <code>
              <span className="text-[#8B949E] italic">// Define your items array</span><br/>
              <span className="text-[#FF7B72]">const</span> path = [<br/>
              &nbsp;&nbsp;{'{'} label: <span className="text-[#A5D6FF]">'Dashboard'</span>, href: <span className="text-[#A5D6FF]">'/home'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} label: <span className="text-[#A5D6FF]">'Vaults'</span>, href: <span className="text-[#A5D6FF]">'/vaults'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} label: <span className="text-[#A5D6FF]">'ETH Vault'</span>, href: <span className="text-[#A5D6FF]">'/vaults/eth'</span> {'}'},<br/>
              ];<br/><br/>
              <span className="text-[#8B949E] italic">// Render the component</span><br/>
              &lt;JBCBreadcrumb items={'{'}path{'}'} /&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSystem;