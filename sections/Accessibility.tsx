
import React from 'react';

interface AccessibilityProps {
  theme: 'light' | 'dark';
}

const Accessibility: React.FC<AccessibilityProps> = ({ theme }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Contrast Check */}
      <div className="bg-white dark:bg-[#161B22] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 shadow-xl transition-colors duration-300">
        <h3 className="text-xl font-bold mb-8 transition-colors">Contrast Check</h3>
        <div className="space-y-4">
          <div className="bg-jbc-cyan text-black px-5 py-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-lg gap-2">
            <span className="font-bold">Primary Adaptive Cyan</span>
            <span className="bg-black/10 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">AA / 5.1:1 (L) / 15.6:1 (D)</span>
          </div>
          
          <div className={`px-5 py-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-lg border transition-all duration-300 gap-2 ${
            theme === 'dark' 
            ? 'bg-[#161B22] text-white border-[#30363D]' 
            : 'bg-[#FFFFFF] text-[#1C2128] border-[#D0D7DE]'
          }`}>
            <span className="font-bold">{theme === 'dark' ? 'White on Slate/Dark' : 'Dark on White Surface'}</span>
            <span className={`${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-colors`}>
              AAA / {theme === 'dark' ? '16.1:1' : '15.8:1'}
            </span>
          </div>

          <div className="bg-jbc-gold text-black px-5 py-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-lg gap-2">
            <span className="font-bold">Adaptive Gold</span>
            <span className="bg-black/10 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">AA / 4.8:1 (L) / 14.8:1 (D)</span>
          </div>
        </div>
      </div>

      {/* Touch Targets */}
      <div className="bg-white dark:bg-[#161B22] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 shadow-xl flex flex-col transition-colors duration-300">
        <h3 className="text-xl font-bold mb-8 transition-colors">Touch Targets</h3>
        <div className="flex-1 flex flex-col items-center justify-center p-10 border-2 border-dashed border-black/10 dark:border-[#30363D] rounded-2xl bg-black/5 dark:bg-black/20 transition-colors">
          <div className="w-11 h-11 bg-jbc-cyan/20 border border-jbc-cyan rounded-lg flex items-center justify-center text-jbc-cyan mb-6 relative">
            <i className="ri-fingerprint-line text-xl"></i>
            <div className="absolute -bottom-10 whitespace-nowrap text-xs font-mono text-[#57606A] dark:text-[#8B949E] transition-colors uppercase tracking-tight">MIN 44 x 44 PX</div>
          </div>
        </div>
        <p className="mt-8 text-sm text-[#57606A] dark:text-[#8B949E] leading-relaxed italic transition-colors">
          Interactive elements must have a touch target size of at least 44x44 CSS pixels to accommodate for varying motor abilities.
        </p>
      </div>

      {/* Hierarchy */}
      <div className="bg-white dark:bg-[#161B22] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 shadow-xl transition-colors duration-300">
        <h3 className="text-xl font-bold mb-8 transition-colors">Visual Hierarchy</h3>
        <div className="space-y-6">
          <div className="space-y-1">
             <div className="text-3xl font-bold transition-colors">Primary Header</div>
             <div className="text-lg font-semibold text-[#57606A] dark:text-[#8B949E] transition-colors">Supporting Subtitle</div>
          </div>
          <p className="text-[#57606A] dark:text-[#8B949E] text-sm leading-relaxed border-l-2 border-jbc-cyan pl-4 transition-colors">
            Text hierarchy uses font weight, size, and color opacity to establish a clear reading order. Primary information is always high-contrast.
          </p>
          <div className="pt-4 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-jbc-cyan"></span>
            <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-[#30363D] transition-colors"></span>
            <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-[#30363D] transition-colors"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
