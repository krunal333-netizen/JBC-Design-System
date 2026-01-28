import React from 'react';
import { PLATFORM_COLOR_TOKENS, TASK_COLOR_TOKENS } from '../constants';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';
import { JBCIcon } from '../react/Icon';

const SemanticEntityColors: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Semantic Entity Color System</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          Our semantic system standardizes color association for external platforms and specific engagement tasks. This ensures cross-platform visual consistency while maintaining accessibility and brand safety.
        </p>
      </JBCCard>

      {/* Adaptive Logic Section */}
      <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-indigo-500/5 border-indigo-500/10'}`}>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="ri-sun-moon-line text-indigo-400"></i> Adaptive Semantic Entity Colors
        </h3>
        <p className="text-sm opacity-70 leading-relaxed mb-6">
          To ensure optimal accessibility and brand presence across both Light and Dark themes, all semantic entity colors are theme-adaptive. While the "Dark" value often represents the pure brand hex, the "Light" value is calibrated for high contrast on white surfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Architectural Logic</span>
              <ul className="text-xs space-y-2 opacity-60">
                 <li>• <strong>Brand Preservation:</strong> Meaning is preserved through hue consistency.</li>
                 <li>• <strong>Contrast Calibration:</strong> Light mode values shift to darker or more saturated tones to meet WCAG AA standards.</li>
                 <li>• <strong>CSS Bridge:</strong> Logical variables like <code className="jbc-keep-token">--jbc-entity-youtube</code> automatically flip based on theme.</li>
              </ul>
           </div>
           <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Implementation Pattern</span>
              <div className={`p-4 rounded-xl font-mono text-[10px] leading-relaxed ${theme === 'dark' ? 'bg-black/40' : 'bg-black/5'}`}>
                 .light {"{"}<br/>
                 &nbsp;&nbsp;--jbc-entity-youtube: #E53935; <span className="opacity-40">// Calibrated Red</span><br/>
                 {"}"}<br/>
                 :root {"{"}<br/>
                 &nbsp;&nbsp;--jbc-entity-youtube: #FF0000; <span className="opacity-40">// Pure Brand Red</span><br/>
                 {"}"}
              </div>
           </div>
        </div>
      </div>

      {/* Figma Sync Protocol Block */}
      <div className={`p-8 rounded-2xl border border-dashed ${theme === 'dark' ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <i className="ri-figma-line text-[#F24E1E]"></i> Figma Style Synchronization
          </h3>
          <JBCBadge variant="primary">TOKEN-SYNC ENABLED</JBCBadge>
        </div>
        <div className="space-y-4 mb-8">
          <p className="text-xs opacity-70 leading-relaxed">
            Semantic Entity Colors adapt per theme. Designers must use <strong>Entity/*</strong> styles only. No flat hex values or orphan colors are permitted in production files.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl font-mono text-[11px] ${theme === 'dark' ? 'bg-black/40' : 'bg-white shadow-sm border border-black/5'}`}>
              <div className="text-jbc-cyan mb-2">// Dark Mode Frames</div>
              <span className="text-white dark:text-white">Style:</span> Entity / YouTube / <span className="text-jbc-gold">Dark</span>
            </div>
            <div className={`p-4 rounded-xl font-mono text-[11px] ${theme === 'dark' ? 'bg-black/40' : 'bg-white shadow-sm border border-black/5'}`}>
              <div className="text-jbc-cyan mb-2">// Light Mode Frames</div>
              <span className="text-white dark:text-white">Style:</span> Entity / YouTube / <span className="text-jbc-gold">Light</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold opacity-40 uppercase tracking-tighter">
          <span className="flex items-center gap-1"><i className="ri-checkbox-circle-line text-jbc-success"></i> Both variants exists</span>
          <span className="flex items-center gap-1"><i className="ri-checkbox-circle-line text-jbc-success"></i> No orphan hex</span>
          <span className="flex items-center gap-1"><i className="ri-checkbox-circle-line text-jbc-success"></i> SDK parity</span>
        </div>
      </div>

      {/* Platform Colors */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Platform Color Tokens</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PLATFORM_COLOR_TOKENS.map((token) => (
            <div key={token.id} className={`p-5 rounded-2xl border transition-all group ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors"
                  style={{ backgroundColor: theme === 'dark' ? token.bg.dark : token.bg.light }}
                >
                  <JBCIcon name={token.icon} size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold">{token.label}</div>
                  <div className="text-[9px] font-mono opacity-40 uppercase tracking-tighter">
                    {theme === 'dark' ? token.bg.dark : token.bg.light}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                 <div 
                  className="px-2 py-1 rounded text-[9px] font-bold uppercase border transition-colors" 
                  style={{ 
                    borderColor: theme === 'dark' ? token.bg.dark : token.bg.light, 
                    color: theme === 'dark' ? (token.darkVariant || token.bg.dark) : (token.lightVariant || token.bg.light) 
                  }}
                 >
                  Figma / Entity / {token.label}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Colors */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Task Engagement Tokens</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TASK_COLOR_TOKENS.map((token) => {
            const currentBg = theme === 'dark' ? token.bg.dark : token.bg.light;
            return (
              <div key={token.id} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <JBCIcon name={token.icon} size={20} color={currentBg} />
                  <span className="text-sm font-bold uppercase tracking-widest">{token.label}</span>
                </div>
                <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                  <div className="flex flex-col gap-3">
                     <div className="flex justify-between items-center">
                       <span className="text-[10px] opacity-40 font-mono">Style</span>
                       <JBCBadge variant="neutral" className="!bg-opacity-20 text-[8px]">{token.id} / {theme}</JBCBadge>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-[10px] opacity-40 font-mono">Contrast</span>
                       <span className="text-[10px] font-bold">PASS (AA)</span>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Auto Color Assignment Logic */}
      <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-cyan/5 border-jbc-cyan/20' : 'bg-[#00BFA5]/5 border-[#00BFA5]/20'}`}>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="ri-magic-line text-jbc-gold"></i> Auto Color Assignment Rule
        </h3>
        <p className="text-sm leading-relaxed mb-6 opacity-70">
          For dynamic content where a platform or task is not explicitly defined, the system employs a contrast-aware deterministic color hashing algorithm. This ensures every entity receives a stable color signature that is optimized for legibility against the active background.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
             <div className="text-[10px] font-mono uppercase tracking-widest opacity-40">Hashing Safety Logic</div>
             <div className={`p-4 rounded-xl font-mono text-[11px] leading-relaxed ${theme === 'dark' ? 'bg-black/40' : 'bg-black/5'}`}>
                hash = stringToHash(entityName);<br/>
                baseColor = deterministicPalette[hash % palette.length];<br/>
                <span className="text-jbc-cyan">// Safety Verification</span><br/>
                while (contrast(baseColor, bgToken) &lt; 3:1) {"{"}<br/>
                &nbsp;&nbsp;baseColor = shiftHue(baseColor, 15deg);<br/>
                {"}"}
             </div>
          </div>
          <div className="space-y-4">
             <div className="text-[10px] font-mono uppercase tracking-widest opacity-40">Consistency Guarantee</div>
             <ul className="text-xs space-y-2 opacity-60">
                <li>• Same name always produces the same hue.</li>
                <li>• Hue shifting only occurs if contrast fails.</li>
                <li>• Never generates near-white or near-black tones.</li>
                <li>• Supports full system-sync theme flipping.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemanticEntityColors;