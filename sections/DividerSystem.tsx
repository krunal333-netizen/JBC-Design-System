import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCDivider } from '../react/JBCDivider';
import { JBCIcon } from '../react/Icon';

const DividerSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Layout / Dividers</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          Dividers are structural elements that group content into manageable chunks. 
          By standardizing separation, we reduce cognitive load and prevent "visual soup" 
          in data-heavy financial dashboards.
        </p>
      </JBCCard>

      {/* Interactive Examples */}
      <div className="space-y-12">
        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Horizontal Variants</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold opacity-40 uppercase">Subtle (Default)</span>
              <JBCDivider variant="subtle" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold opacity-40 uppercase">Strong (2px)</span>
              <JBCDivider variant="strong" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold opacity-40 uppercase">Inset (Padded)</span>
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-lg">
                <JBCDivider variant="inset" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Vertical Orientation</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center gap-12 h-32">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold opacity-40 uppercase">Panel A</span>
              <div className="w-12 h-12 rounded bg-jbc-cyan/20" />
            </div>
            <JBCDivider orientation="vertical" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold opacity-40 uppercase">Panel B</span>
              <div className="w-12 h-12 rounded bg-jbc-gold/20" />
            </div>
          </div>
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
                  Use between list items, section headers, or to separate sidebars from main content.
                </div>
              </li>
              <li className="flex gap-3">
                <i className="ri-close-circle-line text-jbc-error mt-0.5" />
                <div>
                  <span className="font-bold block text-black dark:text-white">When NOT to Use</span>
                  Do not use if whitespace alone is sufficient to communicate separation. Avoid "double bordering" inside cards that already have defined boundaries.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Best Practices</h4>
          <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <JBCIcon name="ri-lightbulb-line" size={20} className="text-jbc-gold" />
              <span className="text-xs font-bold uppercase tracking-widest">Contextual Hierarchy</span>
            </div>
            <ul className="text-xs opacity-60 space-y-3">
              <li>• <code className="text-jbc-cyan">Subtle</code>: For content internal to a component (e.g. list rows).</li>
              <li>• <code className="text-jbc-cyan">Strong</code>: For separating high-level functional areas.</li>
              <li>• <code className="text-jbc-cyan">Inset</code>: For lists where items have clear horizontal margins.</li>
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
              <span className="text-[#8B949E] italic">// Simple separation</span><br/>
              &lt;JBCDivider /&gt;<br/><br/>
              <span className="text-[#8B949E] italic">// Vertical side-panel divider</span><br/>
              &lt;JBCDivider orientation=<span className="text-[#A5D6FF]">"vertical"</span> /&gt;<br/><br/>
              <span className="text-[#8B949E] italic">// Inset for lists</span><br/>
              &lt;JBCDivider variant=<span className="text-[#A5D6FF]">"inset"</span> /&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DividerSystem;
