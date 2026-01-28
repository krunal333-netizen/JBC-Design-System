
import React from 'react';
import { TYPO_SCALE } from '../constants';

const Typography: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="bg-white dark:bg-[#161B22] border border-black/10 dark:border-[#30363D] rounded-2xl p-5 sm:p-8 overflow-hidden shadow-xl transition-colors duration-300">
        <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-black/5 dark:border-[#30363D] pb-4">
          <span className="text-base sm:text-lg font-bold">Scale & Hierarchy</span>
          <span className="bg-[#F6F8FA] dark:bg-[#21262D] text-[#57606A] dark:text-[#8B949E] text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded transition-colors">Plus Jakarta Sans</span>
        </div>

        <div className="space-y-0">
          {TYPO_SCALE.map((typo, idx) => (
            <div key={idx} className="flex flex-col py-6 sm:py-8 border-b border-black/5 dark:border-[#30363D]/50 gap-3 sm:gap-4 last:border-0 transition-colors">
              <div className="w-full font-mono text-[10px] sm:text-sm text-jbc-cyan uppercase tracking-wider">{typo.label}</div>
              <div className={`flex-1 transition-colors break-words ${typo.className}`}>{typo.previewText}</div>
              <div className="w-full text-left font-mono text-[9px] sm:text-xs text-[#57606A] dark:text-[#8B949E]">{typo.details}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-6 sm:p-8 group overflow-hidden">
        <div className="absolute top-4 right-4 text-[10px] font-mono text-[#8B949E] uppercase tracking-widest hidden sm:block">SCSS Implementation</div>
        <pre className="font-mono text-[11px] sm:text-sm leading-relaxed overflow-x-auto text-[#E6EDF3]">
          <code>
            <span className="text-[#8B949E] italic">// Typography Utility Classes</span><br/>
            <span className="text-[#FF7B72]">:root</span> {'{'}<br/>
            {'  '}<span className="text-[#79C0FF]">--font-main</span>: <span className="text-[#A5D6FF]">'Plus Jakarta Sans'</span>;<br/>
            {'}'}<br/><br/>
            <span className="text-[#FF7B72]">.text-display-h1</span> {'{'}<br/>
            {'  '}<span className="text-[#79C0FF]">font-size</span>: <span className="text-[#A5D6FF]">clamp(2.5rem, 5vw, 4rem)</span>;<br/>
            {'  '}<span className="text-[#79C0FF]">font-weight</span>: <span className="text-[#A5D6FF]">700</span>;<br/>
            {'}'}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Typography;
