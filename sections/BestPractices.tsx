
import React from 'react';

const BestPractices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
       {/* Do */}
       <div className="bg-white dark:bg-[#161B22] border-t-4 border-[#2EA043] rounded-2xl p-8 shadow-xl transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8">
            <i className="ri-checkbox-circle-fill text-[#2EA043] text-3xl"></i>
            <h3 className="text-xl font-bold transition-colors">Do This</h3>
          </div>
          <ul className="space-y-4">
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-check-line text-[#2EA043] mt-1"></i>
               <span>Use high contrast ratios (min 4.5:1) for body text</span>
             </li>
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-check-line text-[#2EA043] mt-1"></i>
               <span>Provide a theme toggle in accessible locations</span>
             </li>
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-check-line text-[#2EA043] mt-1"></i>
               <span>Test both themes on mobile with full brightness</span>
             </li>
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-check-line text-[#2EA043] mt-1"></i>
               <span>Respect user system preferences (prefers-color-scheme)</span>
             </li>
          </ul>
       </div>

       {/* Don't */}
       <div className="bg-white dark:bg-[#161B22] border-t-4 border-[#DA3633] rounded-2xl p-8 shadow-xl transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8">
            <i className="ri-close-circle-fill text-[#DA3633] text-3xl"></i>
            <h3 className="text-xl font-bold transition-colors">Don't Do This</h3>
          </div>
          <ul className="space-y-4">
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-close-line text-[#DA3633] mt-1"></i>
               <span>Use theme-fixed color codes for interactive elements</span>
             </li>
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-close-line text-[#DA3633] mt-1"></i>
               <span>Rely solely on color to communicate state changes</span>
             </li>
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-close-line text-[#DA3633] mt-1"></i>
               <span>Hardcode dark background colors in component styles</span>
             </li>
             <li className="flex gap-3 text-[#57606A] dark:text-[#8B949E] transition-colors">
               <i className="ri-close-line text-[#DA3633] mt-1"></i>
               <span>Forget to update border colors for the light theme</span>
             </li>
          </ul>
       </div>

       {/* Pro Tips */}
       <div className="bg-white dark:bg-[#161B22] border-t-4 border-[#03FDDA] rounded-2xl p-8 shadow-xl transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8">
            <i className="ri-lightbulb-fill text-[#03FDDA] text-3xl"></i>
            <h3 className="text-xl font-bold transition-colors">Pro Tips</h3>
          </div>
          <div className="space-y-6">
            <p className="text-[#57606A] dark:text-[#8B949E] text-sm leading-relaxed transition-colors">
              When transitioning to light mode, shift from purely black shadows to tinted shadows using our primary Cyan for a more polished look.
            </p>
            <div className="p-4 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-[#30363D] font-mono text-xs transition-colors">
              <div className="text-[#03FDDA] mb-2 font-bold uppercase tracking-wider">Shadow Rule:</div>
              "In light mode, use transparency (alpha) instead of solid gray hexes."
            </div>
          </div>
       </div>
    </div>
  );
};

export default BestPractices;
