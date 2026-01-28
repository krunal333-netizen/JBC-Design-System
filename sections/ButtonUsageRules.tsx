import React from 'react';
import { BUTTON_ROLES_SPEC, BUTTON_SPEC } from '../constants';
import { JBCCard } from '../react/Card';
import { JBCButton, JBCIconButton, JBCButtonGroup, JBCSegmentedButton } from '../react/Button';
import { JBCBadge } from '../react/Badge';

const ButtonUsageRules: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Button Hierarchy Principles</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          To prevent visual fatigue and ensure a clear hierarchy of intent, JBC Finance buttons are categorized into strict roles. These roles guide the user through the interface, signaling the weight and consequence of every action.
        </p>
      </JBCCard>

      {/* Core Role Definitions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {BUTTON_ROLES_SPEC.roles.map((item) => (
          <div key={item.role} className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-lg font-bold" style={{ color: jbcCyan }}>{item.role}</h4>
                <p className="text-xs mt-1 opacity-60">{item.usage}</p>
              </div>
              <div className="flex gap-2">
                {item.role === 'Primary' && <JBCButton size="sm">Action</JBCButton>}
                {item.role === 'Secondary' && <JBCButton variant="outlined" size="sm">Action</JBCButton>}
                {item.role === 'Tertiary / Ghost' && <JBCButton variant="ghost" size="sm">Action</JBCButton>}
                {item.role === 'Destructive' && <JBCButton variant="destructive" size="sm">Action</JBCButton>}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-40">System Rules</div>
              <ul className="space-y-2">
                {item.rules.map((rule, idx) => (
                  <li key={idx} className="text-xs flex gap-2">
                    <span className="text-jbc-cyan">•</span>
                    <span className="opacity-80">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3">Standard Examples</div>
              <div className="flex flex-wrap gap-2">
                {item.examples.map(ex => (
                  <span key={ex} className="px-2 py-1 rounded bg-black/10 dark:bg-white/10 text-[10px] font-bold">{ex}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Button Roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Icon & Toggle Logic</h4>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
               <JBCIconButton icon="ri-settings-4-line" variant="ghost" />
               <div className="text-xs leading-relaxed opacity-70">
                 <strong className="block text-white dark:text-white">Icon Buttons</strong>
                 Compact utility actions. Must have tooltips on desktop and aria-label for accessibility. Never used for Primary CTA.
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <JBCButtonGroup>
                 <JBCSegmentedButton isActive={true}>ON</JBCSegmentedButton>
                 <JBCSegmentedButton isActive={false}>OFF</JBCSegmentedButton>
               </JBCButtonGroup>
               <div className="text-xs leading-relaxed opacity-70">
                 <strong className="block text-white dark:text-white">Toggle Buttons</strong>
                 Persistent state indicators. Must visually represent the selected state clearly. Cannot trigger destructive flows.
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Platform Adaptation</h4>
          <div className="space-y-3">
             {[
               { role: 'Primary', web: 'JBCButton (Filled)', ios: 'UIButton (Filled)', android: 'M3 Filled Button' },
               { role: 'Secondary', web: 'JBCButton (Outlined)', ios: 'UIButton (Bordered)', android: 'M3 Outlined' },
               { role: 'Icon', web: 'JBCIconButton', ios: 'UIBarButtonItem', android: 'IconButton / FAB' }
             ].map(row => (
               <div key={row.role} className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-black/5 dark:bg-white/5 text-[10px]">
                  <span className="font-bold uppercase tracking-widest opacity-40">{row.role}</span>
                  <span className="opacity-60">{row.web}</span>
                  <span className="text-jbc-cyan font-mono">{row.ios} / {row.android}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Validation Checklist */}
      <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-[#DA3633]/5 border-[#DA3633]/20' : 'bg-[#DA3633]/5 border-[#DA3633]/10'}`}>
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <i className="ri-error-warning-line text-jbc-error"></i> Button Validation Rules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUTTON_ROLES_SPEC.validation.map((v, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5">
              <i className={`ri-${v.status === 'error' ? 'close-circle' : 'alert'}-fill ${v.status === 'error' ? 'text-jbc-error' : 'text-jbc-gold'}`}></i>
              <span className="text-xs opacity-80">{v.rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonUsageRules;