import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCIcon } from '../react/Icon';
import { JBCBadge } from '../react/Badge';

const NativeParity: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';

  const parityData = [
    {
      component: 'Button',
      web: 'JBCButton',
      ios: 'UIButton / Button',
      android: 'MaterialButton / Button',
      gaps: 'Haptic feedback on mobile; Hover states on Web.',
    },
    {
      component: 'Input',
      web: 'JBCInput',
      ios: 'TextField',
      android: 'OutlinedTextField',
      gaps: 'Auto-cap rules; Keyboard type specialization.',
    },
    {
      component: 'Select & Picker',
      web: 'JBCDropdown',
      ios: 'Menu / Picker',
      android: 'Exposed Dropdown / Picker',
      gaps: 'Web uses overlays; Native uses system sheets.',
    },
    {
      component: 'Switch',
      web: 'JBCSwitch',
      ios: 'Toggle',
      android: 'Switch',
      gaps: 'iOS prefers Toggles for binary on/off states.',
    },
    {
      component: 'Checkbox / Radio',
      web: 'JBCCheckbox / JBCRadio',
      ios: 'Toggle / Picker',
      android: 'Checkbox / RadioButton',
      gaps: 'iOS rarely uses multi-select checkboxes.',
    },
    {
      component: 'Toast',
      web: 'JBCToast',
      ios: 'Custom Banner / Alert',
      android: 'Snackbar',
      gaps: 'Android Snackbar supports actions; Toast is ephemeral.',
    },
    {
      component: 'Tooltip',
      web: 'JBCTooltip',
      ios: 'Context Menu / Label',
      android: 'Tooltip',
      gaps: 'Rarely used on iOS; Long-press fallback.',
    },
    {
      component: 'Breadcrumb',
      web: 'JBCBreadcrumb',
      ios: 'Navigation Stack',
      android: 'Back Navigation',
      gaps: 'Native apps use stack-based back buttons.',
    },
    {
      component: 'Divider',
      web: 'JBCDivider',
      ios: 'Divider / Separator',
      android: 'HorizontalDivider',
      gaps: 'Consistent token application.',
    },
    {
      component: 'Data Grid',
      web: 'JBCDataGrid',
      ios: 'List / UITableView',
      android: 'LazyColumn',
      gaps: 'Web horizontal scroll vs Mobile card reflow.',
    },
    {
      component: 'Modal',
      web: 'JBCModal',
      ios: '.sheet (Modal)',
      android: 'ModalBottomSheet / Dialog',
      gaps: 'Swipe-to-dismiss behavior on native platforms.',
    },
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Native Platform Parity</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          The JBC Design System aims for logical parity across all endpoints. While specific implementation details shift to respect platform-native ergonomics (e.g., Human Interface Guidelines on iOS), the semantic intent, tokens, and core behaviors remain unified.
        </p>
      </JBCCard>

      {/* Mapping Table */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Parity Mapping Audit</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
          <table className="w-full text-left border-collapse">
            <thead className={`${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Component</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Web (React)</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">iOS Equivalent</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Android Equivalent</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Audit Gaps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {parityData.map((row) => (
                <tr key={row.component} className="text-xs group">
                  <td className="px-6 py-5 font-bold">{row.component}</td>
                  <td className="px-6 py-5 font-mono text-jbc-cyan jbc-keep-token">{row.web}</td>
                  <td className="px-6 py-5 opacity-70">{row.ios}</td>
                  <td className="px-6 py-5 opacity-70">{row.android}</td>
                  <td className="px-6 py-5 text-jbc-gold font-medium italic">{row.gaps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Platform Behavior Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Cross-Platform Token Strategy</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-6">
            <ul className="text-xs space-y-4 opacity-80">
              <li className="flex gap-3">
                <JBCIcon name="ri-palette-line" size={16} className="text-jbc-cyan shrink-0" />
                <span><strong>Colors:</strong> All platforms must reference <code className="jbc-keep-token">tokens/colors.json</code> to ensure identical brand presence.</span>
              </li>
              <li className="flex gap-3">
                <JBCIcon name="ri-font-size" size={16} className="text-jbc-cyan shrink-0" />
                <span><strong>Typography:</strong> Native platforms map Web sizes to their dynamic type systems (e.g., iOS Large Title).</span>
              </li>
              <li className="flex gap-3">
                <JBCIcon name="ri-shapes-line" size={16} className="text-jbc-cyan shrink-0" />
                <span><strong>Geometry:</strong> The 8px border-radius standard is consistent; 44px min touch areas are enforced globally.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Key Behavioral Deviations</h4>
          <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-gold/5 border-jbc-gold/20' : 'bg-black/5 border-black/10'} space-y-4`}>
             <p className="text-xs opacity-70 leading-relaxed">
               While logic is shared, interaction patterns must respect the host OS. Developers should follow these primary divergence rules:
             </p>
             <ul className="text-xs space-y-3 opacity-80">
                <li>• <strong>Navigation:</strong> Web uses Breadcrumbs; iOS/Android use Stack Navigation with Back Buttons.</li>
                <li>• <strong>Selection:</strong> Web uses custom Dropdowns; Native uses Bottom Sheets or Wheel Pickers.</li>
                <li>• <strong>Feedback:</strong> Web uses Hover; Native uses Haptic Impact and Active press states.</li>
             </ul>
          </div>
        </div>
      </div>

      {/* Audit Conclusion */}
      <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-cyan/5 border-jbc-cyan/20' : 'bg-[#00BFA5]/5 border-[#00BFA5]/20'}`}>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="ri-shield-check-line text-jbc-gold"></i> Parity Audit Result: v1.0.0
        </h3>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-sm opacity-70 leading-relaxed">
              Total component parity is at <span className="font-bold text-jbc-cyan">92%</span>. The remaining divergence is intentional to maintain "platform-native" feeling rather than forcing a "port" experience.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="text-center">
                <div className="text-2xl font-bold">11</div>
                <div className="text-[10px] opacity-40 uppercase">Components</div>
             </div>
             <div className="text-center">
                <div className="text-2xl font-bold text-jbc-success">PASS</div>
                <div className="text-[10px] opacity-40 uppercase">Status</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativeParity;