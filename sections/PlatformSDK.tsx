import React from 'react';
import { BUTTON_SPEC, DROPDOWN_SPEC, ICON_PLATFORM_MAP } from '../constants';

const PlatformSDK: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16">
      <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
        <div className="mb-12">
          <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>Native Code Mappings</h3>
          <p className="text-sm" style={{ color: secondaryTextColor }}>Ensuring logic parity across Web, iOS, and Android platforms.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* iOS Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <i className="ri-apple-fill text-2xl"></i>
              <h4 className="text-lg font-bold">iOS (SwiftUI / HIG)</h4>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#0D1117] border border-white/5 font-mono text-[11px] shadow-inner space-y-3">
                <div className="text-jbc-gold uppercase font-bold tracking-widest text-[10px]">Button Primary</div>
                <code className="block text-white/90 leading-relaxed">{BUTTON_SPEC.platformMapping.ios.swiftUI}</code>
              </div>
              <div className="p-5 rounded-xl bg-[#0D1117] border border-white/5 font-mono text-[11px] shadow-inner space-y-3">
                <div className="text-jbc-gold uppercase font-bold tracking-widest text-[10px]">Dropdown Menu</div>
                <code className="block text-white/90 leading-relaxed">{DROPDOWN_SPEC.platformMapping.ios.swiftUI}</code>
              </div>
              <div className="p-5 rounded-xl bg-[#0D1117] border border-white/5 font-mono text-[11px] shadow-inner space-y-3">
                <div className="text-jbc-gold uppercase font-bold tracking-widest text-[10px]">Symbol Mapping</div>
                <div className="space-y-2">
                  {/* Explicitly typed entries to resolve unknown property access */}
                  {(Object.entries(ICON_PLATFORM_MAP) as [string, { ios: string, android: string }][]).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center group">
                      <span className="text-white/40 group-hover:text-white/60 transition-colors">{key}</span>
                      <span className="text-jbc-cyan font-bold">→ {val.ios}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Android Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <i className="ri-android-fill text-2xl"></i>
              <h4 className="text-lg font-bold">Android (Compose / M3)</h4>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#0D1117] border border-white/5 font-mono text-[11px] shadow-inner space-y-3">
                <div className="text-jbc-cyan uppercase font-bold tracking-widest text-[10px]">Button Primary</div>
                <code className="block text-white/90 leading-relaxed">{BUTTON_SPEC.platformMapping.android.material3}</code>
              </div>
              <div className="p-5 rounded-xl bg-[#0D1117] border border-white/5 font-mono text-[11px] shadow-inner space-y-3">
                <div className="text-jbc-cyan uppercase font-bold tracking-widest text-[10px]">Dropdown Box</div>
                <code className="block text-white/90 leading-relaxed">{DROPDOWN_SPEC.platformMapping.android.material3}</code>
              </div>
              <div className="p-5 rounded-xl bg-[#0D1117] border border-white/5 font-mono text-[11px] shadow-inner space-y-3">
                <div className="text-jbc-cyan uppercase font-bold tracking-widest text-[10px]">Vector Mapping</div>
                <div className="space-y-2">
                  {/* Explicitly typed entries to resolve unknown property access */}
                  {(Object.entries(ICON_PLATFORM_MAP) as [string, { ios: string, android: string }][]).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center group">
                      <span className="text-white/40 group-hover:text-white/60 transition-colors">{key}</span>
                      <span className="text-jbc-gold font-bold">→ {val.android}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Token Export Node */}
      <div className={`p-8 rounded-2xl border transition-all flex flex-col items-center text-center ${theme === 'dark' ? 'bg-jbc-cyan/5 border-jbc-cyan/20' : 'bg-[#00BFA5]/5 border-[#00BFA5]/20'}`}>
         <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-jbc-cyan' : 'text-[#00BFA5]'}`}>
           <i className="ri-node-tree"></i> Centralized Token Registry
         </h3>
         <p className="text-sm max-w-2xl opacity-70 mb-8">All platform primitives consume a single source of truth: our <code>tokens.json</code> engine. This guarantees brand fidelity across the entire ecosystem.</p>
         <div className="flex gap-4">
            <button className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-current transition-all hover:bg-current hover:text-white dark:hover:text-black ${theme === 'dark' ? 'text-jbc-cyan' : 'text-[#00BFA5]'}`}>View JSON Source</button>
            <button className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-current transition-all hover:bg-current hover:text-white dark:hover:text-black ${theme === 'dark' ? 'text-jbc-cyan' : 'text-[#00BFA5]'}`}>Access Figma API</button>
         </div>
      </div>
    </div>
  );
};

export default PlatformSDK;