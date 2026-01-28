import React from 'react';
import { COLORS } from '../constants';

interface ColorsProps {
  theme: 'light' | 'dark';
}

const Colors: React.FC<ColorsProps> = ({ theme }) => {
  return (
    <div className="space-y-12">
      {/* Brand Gradient Section */}
      <div className="mb-14">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50 mb-4">Brand Gradients</h3>
        <div className="space-y-4">
          <div className={`h-14 w-full rounded-2xl bg-gradient-to-r border transition-all duration-500 shadow-xl overflow-hidden ${
            theme === 'dark' 
            ? 'from-[#0B0E14] via-jbc-cyan to-jbc-gold border-white/10' 
            : 'from-[#1C2128] via-jbc-cyan to-jbc-gold border-black/10'
          }`}>
            <div className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex justify-between px-1 font-mono text-[10px] uppercase tracking-[0.1em] opacity-40 font-bold">
            <span>0% Dark</span>
            <span>50% Cyan</span>
            <span>100% Gold</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {COLORS.map((color, index) => {
          const currentHex = theme === 'dark' ? color.darkHex : color.lightHex;
          
          return (
            <div key={index} className="group cursor-pointer">
              <div 
                className={`h-36 rounded-2xl mb-4 shadow-lg border border-black/10 dark:border-[#30363D]/50 transition-transform group-hover:-translate-y-2 relative overflow-hidden`}
                style={{ backgroundColor: currentHex }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <span className="bg-white/90 text-black px-3 py-1 rounded-full text-[10px] font-bold shadow-xl uppercase tracking-wider">Copy {currentHex}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-start gap-2">
                  <h4 className={`text-lg font-bold transition-colors leading-tight ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>
                    {color.name}
                  </h4>
                  <span className={`text-[8px] px-1.5 py-0.5 rounded border font-mono transition-colors uppercase font-bold shrink-0 mt-1 ${
                    theme === 'dark' 
                    ? 'bg-white/5 border-white/10 text-[#8B949E]' 
                    : 'bg-black/5 border-black/10 text-[#57606A]'
                  }`}>
                    {color.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-sm transition-colors uppercase font-medium ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>
                    {currentHex}
                  </span>
                </div>
                <p className={`text-xs transition-colors opacity-70 leading-normal ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>
                  {color.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`p-8 rounded-2xl border shadow-sm transition-colors ${theme === 'dark' ? 'bg-jbc-cyan/5 border-jbc-cyan/20' : 'bg-[#00BFA5]/5 border-[#00BFA5]/20'}`}>
         <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-jbc-cyan' : 'text-[#00BFA5]'}`}>
           <i className="ri-focus-3-line"></i> Adaptive Primary Note
         </h3>
         <p className={`text-sm leading-relaxed transition-colors ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>
           The JBC Cyan primary is dynamic. In <strong className={theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}>Dark Mode</strong>, we use neon <code className={`${theme === 'dark' ? 'bg-black/30' : 'bg-black/10'} px-1 rounded jbc-keep-token`}>#03FDDA</code> for visibility. In <strong className={theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}>Light Mode</strong>, the color automatically shifts to <code className={`${theme === 'dark' ? 'bg-black/30' : 'bg-black/10'} px-1 rounded jbc-keep-token`}>#00BFA5</code> to maintain brand consistency while optimized for the light theme surface.
         </p>
      </div>
    </div>
  );
};

export default Colors;