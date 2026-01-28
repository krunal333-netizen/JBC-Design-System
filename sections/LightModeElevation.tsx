import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCIcon } from '../react/Icon';
import { JBCBadge } from '../react/Badge';

const LightModeElevation: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8 border-l-4 border-jbc-cyan bg-jbc-cyan/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
          <i className="ri-sun-line text-jbc-cyan"></i> Theme / Elevation (Light Mode)
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          To provide a more "premium" feel in light mode, the JBC system introduces <strong>Tinted Shadows</strong>. By using a subtle cyan-alpha bleed instead of pure black, components feel more integrated with the brand identity while maintaining deep visual hierarchy.
        </p>
      </JBCCard>

      {/* Comparison Grid */}
      <div className="space-y-8">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Shadow Comparison (Light Mode Active Only)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h5 className="text-sm font-bold flex items-center gap-2 opacity-50">
              <i className="ri-prohibited-line"></i> Standard Black Shadow
            </h5>
            <div className="p-12 rounded-3xl bg-white border border-black/5 flex items-center justify-center">
               <div className="w-48 h-32 bg-white rounded-2xl border border-black/5 shadow-xl flex items-center justify-center text-[10px] font-bold text-black/40">
                  BLACK-ALPHA SHADOW
               </div>
            </div>
            <p className="text-xs opacity-50 italic text-center">Standard shadows can appear "muddy" on bright surfaces.</p>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold flex items-center gap-2 text-jbc-cyan">
              <i className="ri-checkbox-circle-line"></i> JBC Tinted Shadow
            </h5>
            <div className="p-12 rounded-3xl bg-white border border-black/5 flex items-center justify-center">
               <div className="w-48 h-32 bg-white rounded-2xl border border-black/5 shadow-jbc-light-mid flex items-center justify-center text-[10px] font-bold text-[#00BFA5]">
                  CYAN-TINTED SHADOW
               </div>
            </div>
            <p className="text-xs opacity-50 italic text-center">Tinted shadows enhance brand warmth and surface clarity.</p>
          </div>
        </div>
      </div>

      {/* Token Mapping */}
      <div className="space-y-8">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">New Elevation Tokens</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { token: '--jbc-shadow-light-low', usage: 'Card items, list rows', shadow: 'shadow-jbc-light-low' },
            { token: '--jbc-shadow-light-mid', usage: 'Dropdowns, Context Menus', shadow: 'shadow-jbc-light-mid' },
            { token: '--jbc-shadow-light-high', usage: 'Modals, High-float Popovers', shadow: 'shadow-jbc-light-high' }
          ].map(item => (
            <div key={item.token} className={`p-6 rounded-2xl border bg-white border-black/5 ${item.shadow} group hover:-translate-y-1 transition-all`}>
              <div className="text-[10px] font-mono text-[#00BFA5] font-bold mb-2">{item.token}</div>
              <p className="text-xs text-[#424A53] mb-4">{item.usage}</p>
              <JBCBadge variant="primary">SUBTLE TINT</JBCBadge>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Implementation Strategy</h4>
          <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 group overflow-hidden">
            <div className="absolute top-4 right-4 text-xs font-mono text-[#8B949E] uppercase tracking-widest">React Opt-in</div>
            <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-[#E6EDF3]">
              <code>
                <span className="text-white/40">// Use the new opt-in prop on JBCCard</span><br/>
                &lt;JBCCard <br/>
                {'  '}elevation=<span className="text-jbc-gold">"mid"</span><br/>
                {'  '}<span className="text-jbc-cyan">useTintedShadow</span>={'{'}true{'}'}<br/>
                &gt;<br/>
                {'  '}&lt;Content /&gt;<br/>
                &lt;/JBCCard&gt;<br/><br/>
                <span className="text-white/40">// Or apply direct Tailwind utility</span><br/>
                &lt;div className="<span className="text-jbc-gold">shadow-jbc-light-mid</span>" /&gt;
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">When to use Tinted Shadows</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-4">
            <ul className="text-xs opacity-60 space-y-4">
              <li className="flex gap-3">
                <i className="ri-lightbulb-line text-jbc-gold shrink-0 mt-0.5" />
                <span><strong>Premium Content:</strong> Use for dashboards and account summaries where high contrast and brand fidelity are required.</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-information-line text-jbc-cyan shrink-0 mt-0.5" />
                <span><strong>Theme Safety:</strong> These tokens have zero impact in Dark Mode. They automatically gracefully degrade to <code>none</code> or <code>standard</code> if the <code>.light</code> class is missing.</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-checkbox-circle-line text-jbc-success shrink-0 mt-0.5" />
                <span><strong>Accessibility:</strong> The tint is calibrated at 8-16% alpha, ensuring it doesn't bleed into background content or affect text legibility.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightModeElevation;