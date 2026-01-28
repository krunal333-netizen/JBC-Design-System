import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';
import { JBCIcon } from '../react/Icon';

const SelectPickerSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Overview & Purpose */}
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Select & Picker System</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          The JBC Select & Picker System standardizes all value-selection interfaces—including dropdowns, calendars, time selectors, and localization pickers. By unifying these components, we ensure a predictable experience for complex financial operations like scheduling transactions or selecting currency pairs across all device categories.
        </p>
      </JBCCard>

      {/* Visual Token Specification */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Visual Token Mapping</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { token: 'Field Height', value: '48px', desc: 'Baseline hit area' },
            { token: 'Item Height', value: '44px', desc: 'Menu list row height' },
            { token: 'Corner Radius', value: 'var(--jbc-radius-md)', desc: '12px standard' },
            { token: 'Max Menu Height', value: '240px', desc: 'Scrollable container limit' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
              <div className="text-[10px] font-mono text-jbc-cyan font-bold mb-1 uppercase jbc-keep-token">{item.token}</div>
              <div className="text-sm font-bold mb-1">{item.value}</div>
              <div className="text-[10px] opacity-40">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* State & Interaction Rules */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Interaction States</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
          <table className="w-full text-left border-collapse">
            <thead className={`${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">State</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Visual Rule</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Token / Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {[
                { state: 'Default', rule: 'Surface Input', behavior: 'border-default / idle' },
                { state: 'Hover', rule: '+2% Luminance', behavior: 'Desktop only pointer feedback' },
                { state: 'Focus', rule: 'Brand Cyan', behavior: '2px ring / active input' },
                { state: 'Error', rule: 'Error Red', behavior: 'border-error + helper text' },
                { state: 'Disabled', rule: '40% Opacity', behavior: 'Non-interactive / grayscale' }
              ].map((row, idx) => (
                <tr key={idx} className="text-xs">
                  <td className="px-6 py-4 font-bold">{row.state}</td>
                  <td className="px-6 py-4"><span className="font-mono text-jbc-cyan uppercase jbc-keep-token">{row.rule}</span></td>
                  <td className="px-6 py-4 opacity-70">{row.behavior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Specialized Pickers */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Standardized Pickers</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Date Picker', icon: 'ri-calendar-line', desc: 'Calendar grid for single or range selection.' },
            { name: 'Time Picker', icon: 'ri-time-line', desc: '24h or AM/PM selection for transaction scheduling.' },
            { name: 'Timezone Picker', icon: 'ri-earth-line', desc: 'Searchable world-time offset selector.' },
            { name: 'Country Picker', icon: 'ri-flag-line', desc: 'Localization selector with ISO code support.' },
            { name: 'Currency Picker', icon: 'ri-money-dollar-circle-line', desc: 'Asset pair selector for trading interfaces.' }
          ].map((picker, idx) => (
            <JBCCard key={idx} elevation="low" className="p-6 group hover:border-jbc-cyan/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-jbc-cyan/10 flex items-center justify-center text-jbc-cyan">
                  <JBCIcon name={picker.icon} size={20} />
                </div>
                <h5 className="font-bold">{picker.name}</h5>
              </div>
              <p className="text-[11px] opacity-60 leading-relaxed">{picker.desc}</p>
            </JBCCard>
          ))}
        </div>
      </div>

      {/* Platform Behavior Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Platform Behavior</h4>
          <div className="space-y-4">
            <JBCCard elevation="flat" className="p-6 border-l-4 border-jbc-cyan">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <i className="ri-computer-line text-jbc-cyan"></i> Desktop Web
              </h5>
              <p className="text-xs opacity-70 mb-4">Rich custom UI components are preferred to maximize information density and keyboard accessibility.</p>
              <ul className="text-[11px] space-y-2 opacity-60 font-mono">
                <li>• Custom Dropdown Menus (Max 240px)</li>
                <li>• Inline Calendar Grids</li>
                <li>• Full Keyboard Navigation (Enter/Esc/Arrows)</li>
              </ul>
            </JBCCard>

            <JBCCard elevation="flat" className="p-6 border-l-4 border-jbc-gold">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <i className="ri-smartphone-line text-jbc-gold"></i> Mobile (Native)
              </h5>
              <p className="text-xs opacity-70 mb-4">Leverage native OS pickers to ensure high user trust and familiar thumb-scrolling ergonomics.</p>
              <ul className="text-[11px] space-y-2 opacity-60 font-mono">
                <li>• Field maintains JBC visual styling (48px)</li>
                <li>• On-Tap: Trigger Native OS Picker (Wheel/List)</li>
                <li>• iOS: DatePicker / UIPickerView</li>
                <li>• Android: Material Date/Time Pickers</li>
              </ul>
            </JBCCard>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Accessibility & Governance</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-6">
             <div className="space-y-4">
                <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Strict Rules</h5>
                <ul className="text-xs space-y-3 opacity-80">
                   <li className="flex gap-3"><i className="ri-check-line text-jbc-success"></i> Labels must remain visible during all interaction states.</li>
                   <li className="flex gap-3"><i className="ri-check-line text-jbc-success"></i> Touch targets for menu items must be ≥ 44px.</li>
                   <li className="flex gap-3"><i className="ri-close-line text-jbc-error"></i> Do not use raw browser <code className="jbc-keep-token">&lt;select&gt;</code> tags on desktop.</li>
                   <li className="flex gap-3"><i className="ri-close-line text-jbc-error"></i> Avoid platform logos inside generic picker containers.</li>
                </ul>
             </div>
             <div className="pt-6 border-t border-white/5">
                <p className="text-[11px] italic opacity-50">"All dropdowns, calendars, time selectors, timezone selectors, and currency selectors must use the Select & Picker System on desktop and native OS pickers on mobile."</p>
             </div>
          </div>
        </div>
      </div>

      {/* Figma Component Map */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Figma Page Structure</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        <div className={`p-8 rounded-3xl border transition-all ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-black/5 border-black/10'}`}>
           <div className="text-jbc-cyan font-bold text-xs mb-8 uppercase tracking-[0.2em]">Components / Select & Picker</div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
              <div>
                 <div className="text-[10px] font-bold opacity-30 mb-4 uppercase tracking-widest">Select States</div>
                 <ul className="text-[11px] space-y-2 font-mono opacity-50">
                    <li>├── Select / Default</li>
                    <li>├── Select / Focus</li>
                    <li>├── Select / Error</li>
                    <li>└── Select / Disabled</li>
                 </ul>
              </div>
              <div>
                 <div className="text-[10px] font-bold opacity-30 mb-4 uppercase tracking-widest">Specialized Pickers</div>
                 <ul className="text-[11px] space-y-2 font-mono opacity-50">
                    <li>├── Picker / Date</li>
                    <li>├── Picker / Time</li>
                    <li>└── Picker / Timezone</li>
                 </ul>
              </div>
              <div>
                 <div className="text-[10px] font-bold opacity-30 mb-4 uppercase tracking-widest">Localization</div>
                 <ul className="text-[11px] space-y-2 font-mono opacity-50">
                    <li>├── Picker / Country</li>
                    <li>├── Picker / Currency</li>
                    <li>└── Selected_Item_Node</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>

      {/* Tailwind Reference */}
      <div className="space-y-8 print:hidden">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Tailwind Implementation (Reference)</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        <div className={`p-8 rounded-2xl border transition-all group ${theme === 'dark' ? 'bg-[#0D1117] border-white/5' : 'bg-black/5 border-black/10'}`}>
           <div className="flex justify-between items-start mb-6">
              <h5 className="text-[10px] font-mono text-jbc-gold uppercase font-bold tracking-[0.2em]">Select & Menu Tokens</h5>
              <i className="ri-tailwind-css-fill text-2xl text-jbc-cyan opacity-20 group-hover:opacity-100 transition-opacity"></i>
           </div>
           <code className={`text-[11px] block font-mono leading-relaxed space-y-1 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              <span className="opacity-40">// Standard Select Container</span><br/>
              .jbc-select-field {'{'} @apply h-[48px] px-3.5 py-3 rounded-xl border-2 bg-jbc-surface; {'}'}<br/><br/>
              <span className="opacity-40">// Menu Item (normalized height)</span><br/>
              .jbc-select-item {'{'} @apply h-[44px] flex items-center px-4 hover:bg-jbc-cyan/10; {'}'}<br/><br/>
              <span className="opacity-40">// Focus Ring (2px cyan)</span><br/>
              .jbc-select-focus {'{'} @apply ring-2 ring-jbc-cyan ring-offset-2; {'}'}
           </code>
        </div>
      </div>
    </div>
  );
};

export default SelectPickerSystem;