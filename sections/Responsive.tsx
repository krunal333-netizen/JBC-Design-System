
import React from 'react';

const Responsive: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="bg-white dark:bg-[#161B22] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 shadow-xl transition-colors duration-300">
        <h3 className="text-xl font-bold mb-8 transition-colors">Breakpoint System</h3>
        <div className="flex h-16 rounded-xl overflow-hidden shadow-2xl border border-black/5 dark:border-transparent transition-colors">
          <div className="flex-1 bg-black/5 dark:bg-[#21262D] border-r border-black/10 dark:border-black/20 flex items-center justify-center text-xs font-bold text-[#57606A] dark:text-[#8B949E] group cursor-help transition-all hover:flex-[1.5]">
             <i className="ri-smartphone-line mr-2"></i> MOBILE
          </div>
          <div className="flex-[1.5] bg-black/10 dark:bg-[#30363D] border-r border-black/10 dark:border-black/20 flex items-center justify-center text-xs font-bold text-[#1C2128] dark:text-white group cursor-help transition-all hover:flex-[2]">
             <i className="ri-tablet-line mr-2"></i> TABLET
          </div>
          <div className="flex-[2.5] bg-black/20 dark:bg-black/40 flex items-center justify-center text-xs font-bold text-[#03FDDA] group cursor-help transition-all hover:flex-[3]">
             <i className="ri-computer-line mr-2"></i> DESKTOP
          </div>
        </div>
      </div>

      <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 group overflow-hidden">
        <div className="absolute top-4 right-4 text-xs font-mono text-[#8B949E] uppercase tracking-widest">Tailwind Configuration</div>
        <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-[#E6EDF3]">
          <code>
            <span className="text-[#FF7B72]">module.exports</span> = {'{'}<br/>
            {'  '}<span className="text-[#79C0FF]">darkMode</span>: <span className="text-[#A5D6FF]">'class'</span>,<br/>
            {'  '}<span className="text-[#79C0FF]">theme</span>: {'{'}<br/>
            {'    '}<span className="text-[#79C0FF]">extend</span>: {'{'}<br/>
            {'      '}<span className="text-[#79C0FF]">colors</span>: {'{'}<br/>
            {'        '}<span className="text-[#A5D6FF]">'jbc-bg'</span>: <span className="text-[#A5D6FF]">'#0B0E14'</span>,<br/>
            {'        '}<span className="text-[#A5D6FF]">'jbc-light-bg'</span>: <span className="text-[#A5D6FF]">'#F8F9FA'</span>,<br/>
            {'      '}{'}'},<br/>
            {'    '}{'}'},<br/>
            {'  '}{'}'},<br/>
            {'}'}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Responsive;
