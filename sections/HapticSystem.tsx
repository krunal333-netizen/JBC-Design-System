import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';
import { JBCIcon } from '../react/Icon';
import { JBCHapticType, triggerHaptic } from '../react/haptics';

const HapticSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  const mappings: { type: JBCHapticType; ios: string; android: string; desc: string }[] = [
    { 
      type: 'success', 
      ios: 'UIImpactFeedbackStyleLight', 
      android: 'HapticFeedbackConstants.CONFIRM', 
      desc: 'Light, crisp tap for positive outcomes.' 
    },
    { 
      type: 'error', 
      ios: 'UINotificationFeedbackTypeError', 
      android: 'VibrationEffect.createWaveform(...)', 
      desc: 'Double-pulse or heavy buzz for failures.' 
    },
    { 
      type: 'warning', 
      ios: 'UINotificationFeedbackTypeWarning', 
      android: 'HapticFeedbackConstants.GESTURE_THRESHOLD_DEACTIVATE', 
      desc: 'Subtle notification pulse for alerts.' 
    },
    { 
      type: 'info', 
      ios: 'UISelectionFeedbackGenerator', 
      android: 'HapticFeedbackConstants.CLOCK_TICK', 
      desc: 'Subtle tick for selection or scrolling.' 
    },
    { 
      type: 'like', 
      ios: 'UIImpactFeedbackStyleSoft', 
      android: 'VibrationEffect.EFFECT_TICK', 
      desc: 'Very subtle, organic feedback for engagement.' 
    },
    { 
      type: 'transaction', 
      ios: 'UIImpactFeedbackStyleRigid', 
      android: 'HapticFeedbackConstants.LONG_PRESS', 
      desc: 'Heavy, decisive tap for financial finality.' 
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Overview */}
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Haptic Semantic Mapping</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          Tactile feedback is an essential layer of the JBC Design System, bridging the gap between visual state and physical sensation. 
          By mapping semantic intents (e.g., "success") to platform-native haptic patterns, we ensure a premium, predictable experience 
          on mobile devices without introducing unnecessary vibration on desktop platforms.
        </p>
      </JBCCard>

      {/* Mapping Table */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">Semantic Mapping Table</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
          <table className="w-full text-left border-collapse">
            <thead className={`${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">State</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">iOS Implementation</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Android Implementation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {mappings.map((row) => (
                <tr key={row.type} className="text-xs group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-jbc-cyan uppercase tracking-wider">{row.type}</span>
                      <span className="text-[10px] opacity-40 leading-snug max-w-[200px]">{row.desc}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-[10px] opacity-60 group-hover:opacity-100 transition-opacity jbc-keep-token">{row.ios}</code>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-[10px] opacity-60 group-hover:opacity-100 transition-opacity jbc-keep-token">{row.android}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* API Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">API Abstraction (SDK)</h4>
          <div className="space-y-4">
            <JBCCard elevation="mid" className={`p-6 group transition-all ${theme === 'dark' ? '!bg-[#0D1117]' : '!bg-black/5'} border-white/5 print:bg-white print:border-black/10`}>
              <div className="flex justify-between items-start mb-6">
                <div className="text-[10px] font-mono text-jbc-gold uppercase font-bold tracking-[0.2em] jbc-keep-token">triggerHaptic(type)</div>
                <i className="ri-code-s-slash-line text-jbc-cyan opacity-40"></i>
              </div>
              <div className="print:hidden">
                <code className={`text-[11px] block font-mono leading-relaxed space-y-1 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  <span className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}>// Usage Example (Opt-in)</span><br/>
                  import {'{'} triggerHaptic {'}'} from <span className="text-jbc-cyan">'@jbc/sdk/haptics'</span>;<br/><br/>
                  <span className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}>// Successful wallet connection</span><br/>
                  triggerHaptic(<span className="text-jbc-gold">'success'</span>);<br/><br/>
                  <span className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}>// Failed transaction signing</span><br/>
                  triggerHaptic(<span className="text-jbc-gold">'error'</span>);
                </code>
              </div>
              <div className="hidden print:block">
                <p className="text-xs opacity-70">Semantic haptic triggers enable consistent tactile feedback patterns across mobile devices using a unified SDK hook.</p>
              </div>
            </JBCCard>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Best Practices</h4>
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-6">
            <ul className="text-xs space-y-4 opacity-80">
              <li className="flex gap-3">
                <i className="ri-checkbox-circle-line text-jbc-success shrink-0" />
                <span><strong>Use</strong> for meaningful state transitions that occur outside the user's focus (e.g. background processing complete).</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-checkbox-circle-line text-jbc-success shrink-0" />
                <span><strong>Use</strong> to reinforce high-value actions like "Swap" or "Stake" (Rigid Impact).</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-close-circle-line text-jbc-error shrink-0" />
                <span><strong>Do Not</strong> trigger haptics for generic taps or UI navigation that provides clear visual feedback.</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-close-circle-line text-jbc-error shrink-0" />
                <span><strong>Do Not</strong> create "vibration loops." Haptics should be discrete and ephemeral.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Web / Native Logic Section */}
      <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-cyan/5 border-jbc-cyan/20' : 'bg-[#00BFA5]/5 border-[#00BFA5]/20'}`}>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="ri-shield-check-line text-jbc-gold"></i> Platform Safety Guarantee
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          The <code className="jbc-keep-token">triggerHaptic</code> function is designed as a safe, cross-platform stub. In the Web environment, it functions as a no-op to prevent low-fidelity browser vibrations from degrading the user experience. In Native environments (iOS/Android), the JBC SDK overrides this function with high-performance native bindings.
        </p>
      </div>
    </div>
  );
};

export default HapticSystem;