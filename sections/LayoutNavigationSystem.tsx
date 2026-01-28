import React from 'react';
import { LAYOUT_SPEC, NAVIGATION_RULES, THEME_FOUNDATION_RULES } from '../constants';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';

const LayoutNavigationSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-20 animate-in fade-in duration-700">
      {/* 1. Layout Tokens */}
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">01. Layout Tokens</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <JBCCard elevation="low" className="p-8">
            <h5 className="text-sm font-bold mb-6 opacity-60 uppercase tracking-widest flex items-center gap-2">
              <i className="ri-layout-masonry-line text-jbc-cyan"></i> Container Width
            </h5>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5 group hover:border-jbc-cyan/30 transition-all">
                <div>
                  <div className="text-xs font-mono text-jbc-cyan mb-1">layout.container.boxed</div>
                  <div className="text-[10px] opacity-40 uppercase font-bold">Recommended for Marketing & Content</div>
                </div>
                <JBCBadge variant="primary">{LAYOUT_SPEC.container.boxed}</JBCBadge>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5 group hover:border-jbc-cyan/30 transition-all">
                <div>
                  <div className="text-xs font-mono text-jbc-cyan mb-1">layout.container.fluid</div>
                  <div className="text-[10px] opacity-40 uppercase font-bold">Recommended for Dashboards</div>
                </div>
                <JBCBadge variant="neutral">{LAYOUT_SPEC.container.fluid}</JBCBadge>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-jbc-cyan/5 border-l-4 border-jbc-cyan">
              <p className="text-[11px] leading-relaxed italic opacity-70">
                "Fluid containers scale to fill 100% of the viewport with a responsive margin (16px to 32px), ideal for information-dense trading interfaces."
              </p>
            </div>
          </JBCCard>

          <JBCCard elevation="low" className="p-8">
            <h5 className="text-sm font-bold mb-6 opacity-60 uppercase tracking-widest flex items-center gap-2">
              <i className="ri-focus-3-line text-jbc-gold"></i> Density Modes
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 text-center transition-all hover:scale-[1.02]">
                <div className="text-lg font-bold mb-1">Comfortable</div>
                <div className="text-[10px] opacity-40 uppercase tracking-widest mb-4">Baseline</div>
                <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded flex items-center justify-center overflow-hidden">
                   <div className="h-full w-1/2 bg-jbc-cyan/20"></div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-2 border-jbc-cyan bg-jbc-cyan/5 text-center shadow-lg shadow-jbc-cyan/5">
                <div className="text-lg font-bold mb-1 text-jbc-cyan">Compact</div>
                <div className="text-[10px] opacity-40 uppercase tracking-widest mb-4">High-Density</div>
                <div className="grid grid-cols-4 gap-1 h-2 w-full">
                   {[1,2,3,4].map(i => <div key={i} className="bg-jbc-cyan rounded-sm"></div>)}
                </div>
              </div>
            </div>
            <p className="text-[11px] opacity-60 leading-relaxed">
              Spacing tokens automatically reduce by shifting values in <code className="jbc-keep-token">.density-compact</code> mode. <code className="jbc-keep-token">jbc-md (16px)</code> becomes <code className="jbc-keep-token">12px</code>.
            </p>
          </JBCCard>
        </div>

        {/* CSS Implementation Classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:hidden">
          <div className="space-y-4">
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40">Container Utility Usage</h5>
            <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/5 font-mono text-[11px] leading-relaxed text-white/70">
              <span className="text-white/40">// Center content with 1200px max-width</span><br/>
              &lt;div className="<span className="text-jbc-cyan">jbc-container-boxed</span>"&gt; ... &lt;/div&gt;<br/><br/>
              <span className="text-white/40">// Edge-to-edge content (100% width)</span><br/>
              &lt;div className="<span className="text-jbc-cyan">jbc-container-fluid</span>"&gt; ... &lt;/div&gt;
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40">Density Utility Usage</h5>
            <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/5 font-mono text-[11px] leading-relaxed text-white/70">
              <span className="text-white/40">// Opt-in to tighter spacing for data-heavy views</span><br/>
              &lt;div className="<span className="text-jbc-gold">density-compact</span>"&gt;<br/>
              &nbsp;&nbsp;&lt;JBCTable /&gt;<br/>
              &lt;/div&gt;<br/><br/>
              <span className="text-white/40 italic">Note: Only affects tokens inside the container.</span>
            </div>
          </div>
        </div>

        {/* Spacing & Grid System */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-6">
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40">Spacing Scale (4pt Base)</h5>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {LAYOUT_SPEC.spacing.map(token => (
                <div key={token.id} className="p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 flex flex-col items-center group hover:bg-jbc-cyan transition-all">
                  <div className="font-mono text-sm mb-4 group-hover:text-black">{token.id}</div>
                  <div className="h-6 bg-jbc-cyan rounded shadow-lg group-hover:bg-white" style={{ width: token.value }}></div>
                  <div className="mt-4 text-[10px] font-bold opacity-40 group-hover:text-black/60">{token.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <JBCCard elevation="mid" className="p-8 bg-[#0D1117] dark:bg-[#0D1117] border-white/5 print:bg-white print:border-black/10">
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40 mb-6">Grid Columns</h5>
            <div className="space-y-4">
              {LAYOUT_SPEC.breakpoints.map(bp => (
                <div key={bp.name} className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase">{bp.name}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: bp.columns }).map((_, i) => (
                      <div key={i} className="w-1.5 h-3 bg-jbc-cyan rounded-sm opacity-60"></div>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono opacity-40">{bp.columns} COL</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
               <div className="flex justify-between items-center text-[10px] font-bold opacity-40">
                  <span>GUTTER TOKEN</span>
                  <span className="text-jbc-gold">{LAYOUT_SPEC.gutter}</span>
               </div>
            </div>
          </JBCCard>
        </div>
      </div>

      {/* 2. Navigation Rules */}
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">02. Navigation Rules</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <JBCCard elevation="low" className="p-8 border-t-4 border-jbc-cyan">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-jbc-cyan/10 flex items-center justify-center text-jbc-cyan">
                <i className="ri-layout-top-line text-xl"></i>
              </div>
              <h5 className="font-bold">Horizontal Nav</h5>
            </div>
            <p className="text-xs opacity-70 mb-4">{NAVIGATION_RULES.horizontal.behavior}</p>
            <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-white/5 text-[10px] font-mono">
               <span className="text-jbc-cyan">align:</span> {NAVIGATION_RULES.horizontal.alignment}
            </div>
          </JBCCard>

          <JBCCard elevation="low" className="p-8 border-t-4 border-jbc-gold">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-jbc-gold/10 flex items-center justify-center text-jbc-gold">
                <i className="ri-layout-left-line text-xl"></i>
              </div>
              <h5 className="font-bold">Vertical Nav</h5>
            </div>
            <p className="text-xs opacity-70 mb-4">{NAVIGATION_RULES.vertical.behavior}</p>
            <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-white/5 text-[10px] font-mono">
               <span className="text-jbc-gold">width:</span> {NAVIGATION_RULES.vertical.width}
            </div>
          </JBCCard>

          <JBCCard elevation="low" className="p-8 border-t-4 border-jbc-success">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-jbc-success/10 flex items-center justify-center text-jbc-success">
                <i className="ri-smartphone-line text-xl"></i>
              </div>
              <h5 className="font-bold">Mobile Nav</h5>
            </div>
            <p className="text-xs opacity-70 mb-4">{NAVIGATION_RULES.mobile.behavior}</p>
            <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-white/5 text-[10px] font-mono">
               <span className="text-jbc-success">max_actions:</span> {NAVIGATION_RULES.mobile.maxActions}
            </div>
          </JBCCard>
        </div>

        {/* RTL Governance */}
        <div className={`p-10 rounded-3xl border-2 border-dashed ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                 <h5 className="text-xl font-bold flex items-center gap-3">
                    <i className="ri-translate-2 text-jbc-cyan"></i> RTL Rules (Mirroring)
                 </h5>
                 <p className="text-sm opacity-60 leading-relaxed">
                    JBC platforms must support Right-to-Left languages by horizontally mirroring the layout interface.
                 </p>
                 <ul className="space-y-3">
                    {NAVIGATION_RULES.rtl.rules.map((rule, idx) => (
                       <li key={idx} className="text-xs flex gap-3">
                          <span className="text-jbc-cyan font-bold">0{idx + 1}</span>
                          <span className="opacity-80">{rule}</span>
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="w-full max-w-[340px] aspect-video bg-black/40 rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                 <div className="z-10 text-center">
                    <div className="w-48 h-2 bg-jbc-cyan/20 rounded-full mb-2"></div>
                    <div className="w-32 h-2 bg-jbc-cyan/10 rounded-full mx-auto"></div>
                    <div className="mt-6 flex justify-center gap-2">
                       <div className="w-4 h-4 rounded bg-jbc-gold"></div>
                       <div className="w-4 h-4 rounded bg-white/20"></div>
                       <div className="w-4 h-4 rounded bg-white/10"></div>
                    </div>
                 </div>
                 <div className="absolute bottom-2 right-4 text-[8px] font-mono opacity-30 tracking-widest uppercase">Mirror Logic Enabled</div>
              </div>
           </div>
        </div>
      </div>

      {/* 3. Theme Foundation */}
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">03. Theme Rules</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {THEME_FOUNDATION_RULES.modes.map(mode => (
                    <div key={mode.id} className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                       <div className="font-bold text-xs mb-2 uppercase tracking-wider">{mode.label}</div>
                       <p className="text-[10px] opacity-50 leading-relaxed">{mode.desc}</p>
                    </div>
                 ))}
              </div>
              <div className="p-6 rounded-2xl bg-jbc-cyan/5 border border-jbc-cyan/20">
                 <h5 className="text-[10px] font-bold uppercase tracking-widest mb-3">System Integration</h5>
                 <p className="text-xs opacity-70 leading-relaxed">{THEME_FOUNDATION_RULES.sync}</p>
              </div>
           </div>

           <div className="space-y-8 print:hidden">
              <div className="p-8 rounded-3xl bg-[#0D1117] border border-white/5 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <i className="ri-tailwind-css-fill text-4xl text-jbc-cyan"></i>
                 </div>
                 <h5 className="text-[10px] font-mono text-jbc-gold uppercase font-bold mb-6 tracking-[0.2em]">Tailwind SDK Mapping</h5>
                 <code className="text-xs text-white/70 block font-mono leading-relaxed">
                    <span className="text-white/40">// tailwind.config.js</span><br/>
                    theme: {'{'}<br/>
                    &nbsp;&nbsp;extend: {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;spacing: {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'jbc-xs': '4px',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'jbc-md': '16px',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'jbc-xl': '32px',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;gridTemplateColumns: {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'jbc-12': 'repeat(12, minmax(0, 1fr))',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'}'}
                 </code>
              </div>
           </div>
        </div>
      </div>

      {/* 4. Figma Documentation Architecture */}
      <div className="pt-16 border-t border-black/5 dark:border-white/5">
        <h4 className="text-lg font-bold mb-10 flex items-center gap-3">
           <i className="ri-quill-pen-line text-jbc-gold"></i> Figma Page Structure (Layout)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className={`p-8 rounded-3xl border transition-all ${theme === 'dark' ? 'bg-black/40 border-white/5 hover:border-jbc-cyan/40' : 'bg-black/5 border-black/10 hover:border-jbc-cyan'}`}>
              <div className="text-jbc-cyan font-bold text-xs mb-6 uppercase tracking-widest">Layout / Tokens</div>
              <ul className={`text-[11px] space-y-3 font-mono ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                 <li>├── Grid_Overlay (12/8/4)</li>
                 <li>├── Spacing_System_Vertical</li>
                 <li>├── Spacing_System_Horizontal</li>
                 <li>└── Margin_Guidelines</li>
              </ul>
           </div>
           <div className={`p-8 rounded-3xl border transition-all ${theme === 'dark' ? 'bg-black/40 border-white/5 hover:border-jbc-gold/40' : 'bg-black/5 border-black/10 hover:border-jbc-gold'}`}>
              <div className="text-jbc-gold font-bold text-xs mb-6 uppercase tracking-widest">Layout / Navigation</div>
              <ul className={`text-[11px] space-y-3 font-mono ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                 <li>├── Shell_Desktop_Top</li>
                 <li>├── Shell_Desktop_Sidebar</li>
                 <li>├── Shell_Mobile_Bottom</li>
                 <li>└── Drawer_Overlay_Spec</li>
              </ul>
           </div>
           <div className={`p-8 rounded-3xl border transition-all ${theme === 'dark' ? 'bg-black/40 border-white/5 hover:border-jbc-cyan/40' : 'bg-black/5 border-black/10 hover:border-jbc-cyan'}`}>
              <div className="text-jbc-cyan font-bold text-xs mb-6 uppercase tracking-widest">Layout / Responsive</div>
              <ul className={`text-[11px] space-y-3 font-mono ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                 <li>├── Mobile_First_Templates</li>
                 <li>├── Tablet_Reflow_Rules</li>
                 <li>└── Ultra_Wide_Constraints</li>
              </ul>
           </div>
        </div>
      </div>

      {/* Responsive Usage Examples */}
      <div className={`p-10 rounded-3xl border ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
         <h5 className="text-sm font-bold uppercase tracking-widest mb-10 text-center opacity-60">Mobile-First Strategy Example</h5>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
               <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5">
                  <div className="text-[10px] font-bold text-jbc-cyan mb-2">CSS IMPLEMENTATION</div>
                  <code className="text-[10px] opacity-60 break-all leading-relaxed jbc-keep-token">
                     .container {'{'}
                     &nbsp;&nbsp;padding: var(--jbc-space-4);
                     &nbsp;&nbsp;@media (min-width: 1024px) {'{'}
                     &nbsp;&nbsp;&nbsp;&nbsp;padding: var(--jbc-space-8);
                     &nbsp;&nbsp;&nbsp;&nbsp;max-width: var(--jbc-layout-boxed);
                     &nbsp;&nbsp;{'}'}
                     {'}'}
                  </code>
               </div>
            </div>
            <div className="text-xs opacity-70 space-y-4">
               <p><strong>Mobile:</strong> Content is single-column, padding is tight (md/16px), and actions are thumb-centered.</p>
               <p><strong>Desktop:</strong> Content utilizes full 12-column grid, padding expands (xl/32px), and navigation shifts to persistent horizontal or vertical shells.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LayoutNavigationSystem;