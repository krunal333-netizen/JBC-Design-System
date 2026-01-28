import React from 'react';

const Implementation: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 group overflow-hidden">
          <div className="absolute top-4 right-4 text-xs font-mono text-[#8B949E] uppercase tracking-widest">Semantic Layer</div>
          <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-[#E6EDF3]">
            <code>
              <span className="text-[#8B949E] italic">/* Semantic Variable Tokens (Source of Truth) */</span><br/>
              <span className="text-[#FF7B72]">:root</span> {'{'}<br/>
              {'  '}<span className="text-[#79C0FF]">--jbc-color-bg</span>: <span className="text-[#A5D6FF]">#0B0E14</span>;<br/>
              {'  '}<span className="text-[#79C0FF]">--jbc-color-surface</span>: <span className="text-[#A5D6FF]">#161B22</span>;<br/>
              {'  '}<span className="text-[#79C0FF]">--jbc-color-action</span>: <span className="text-[#A5D6FF]">#03FDDA</span>;<br/>
              {'}'}<br/><br/>
              <span className="text-[#8B949E] italic">/* Interaction Tokens (Cross-Platform) */</span><br/>
              <span className="text-[#FF7B72]">.jbc-app</span> {'{'}<br/>
              {'  '}<span className="text-[#79C0FF]">--jbc-touch-target</span>: <span className="text-[#A5D6FF]">44px</span>;<br/>
              {'  '}<span className="text-[#79C0FF]">--jbc-scale-active</span>: <span className="text-[#A5D6FF]">0.96</span>;<br/>
              {'}'}
            </code>
          </pre>
        </div>

        <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 group overflow-hidden">
          <div className="absolute top-4 right-4 text-xs font-mono text-[#8B949E] uppercase tracking-widest">SDK Structure</div>
          <div className="font-mono text-sm leading-relaxed text-[#E6EDF3] space-y-1">
            <div className="text-jbc-cyan">/jbc-brand-design-system</div>
            <div className="pl-4 text-white/60">├── /tokens <span className="text-[10px] bg-white/10 px-1 rounded">JSON SOURCE</span></div>
            <div className="pl-4 text-white/60">├── /web <span className="text-[10px] bg-white/10 px-1 rounded">TAILWIND</span></div>
            <div className="pl-4 text-white/60">├── /react <span className="text-[10px] bg-white/10 px-1 rounded">COMPONENTS</span></div>
            <div className="pl-4 text-white/60">├── /ios <span className="text-[10px] bg-white/10 px-1 rounded">SWIFTUI</span></div>
            <div className="pl-4 text-white/60">└── /android <span className="text-[10px] bg-white/10 px-1 rounded">COMPOSE</span></div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#161B22] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 shadow-xl transition-colors">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <i className="ri-box-3-line text-jbc-cyan"></i> Cross-Platform Usage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-jbc-cyan uppercase tracking-widest">Web (React)</h4>
            <p className="text-xs text-[#8B949E]">Import from <code>@jbc/react</code>. Styled with Tailwind extended theme.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-jbc-cyan uppercase tracking-widest">iOS (SwiftUI)</h4>
            <p className="text-xs text-[#8B949E]">Use <code>JBCButton</code> with native <code>JBCColor</code> enum.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-jbc-cyan uppercase tracking-widest">Android (Compose)</h4>
            <p className="text-xs text-[#8B949E]">Leverage <code>JBCTheme</code> and <code>composable</code> elements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;