import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCButton } from '../react/Button';
import { useJBCToast } from '../react/useJBCToast';
import { JBCIcon } from '../react/Icon';

const ToastSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const { showToast } = useJBCToast();

  const handleTrigger = (variant: any) => {
    showToast({
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification`,
      description: `This is an example of a ${variant} toast message. It will auto-dismiss.`,
      variant: variant
    });
  };

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Feedback / Toasts</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          The Toast system provides ephemeral, non-blocking feedback for asynchronous operations. 
          Use toasts for status updates that don't require immediate user intervention, 
          such as transaction confirmations or minor system notifications.
        </p>
      </JBCCard>

      {/* Interactive Examples */}
      <div className="space-y-8">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Live Examples</h4>
        <div className="flex flex-wrap gap-4">
          <JBCButton variant="primary" onClick={() => handleTrigger('success')}>Trigger Success</JBCButton>
          <JBCButton variant="destructive" onClick={() => handleTrigger('error')}>Trigger Error</JBCButton>
          <JBCButton variant="secondary" onClick={() => handleTrigger('warning')}>Trigger Warning</JBCButton>
          <JBCButton variant="outlined" onClick={() => handleTrigger('info')}>Trigger Info</JBCButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Visual Rules</h4>
          <div className="space-y-4 text-xs opacity-70">
            <p>Toasts inherit the JBC elevation system, specifically using <code>--jbc-shadow-mid</code> for depth.</p>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-jbc-cyan font-bold">• Success:</span>
                Uses brand cyan for borders and icons. Recommended for transaction completion.
              </li>
              <li className="flex gap-2">
                <span className="text-jbc-error font-bold">• Error:</span>
                Uses error red. Recommended for failed approvals or network errors.
              </li>
              <li className="flex gap-2">
                <span className="text-jbc-gold font-bold">• Warning:</span>
                Uses brand gold. Recommended for partial success or high-slippage warnings.
              </li>
              <li className="flex gap-2">
                <span className="opacity-60 font-bold">• Info:</span>
                Uses neutral tokens. Recommended for general system status.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Accessibility & Behavior</h4>
          <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <JBCIcon name="ri-user-smile-line" size={20} className="text-jbc-cyan" />
              <span className="text-xs font-bold uppercase tracking-widest">UX Standards</span>
            </div>
            <ul className="text-xs opacity-60 space-y-2">
              <li>• Mobile: Centered at the bottom for thumb accessibility.</li>
              <li>• Desktop: Bottom-right corner stacking.</li>
              <li>• Auto-dismiss: Default 5 seconds, pauses on hover.</li>
              <li>• Screen Readers: ARIA live regions for non-visual announcements.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code Usage */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Implementation Guide</h4>
        <div className="relative bg-[#0D1117] border border-black/10 dark:border-[#30363D] rounded-2xl p-8 group overflow-hidden">
          <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-[#E6EDF3]">
            <code>
              <span className="text-[#8B949E] italic">// 1. Wrap your app</span><br/>
              &lt;JBCToastProvider&gt;<br/>
              &nbsp;&nbsp;&lt;App /&gt;<br/>
              &lt;/JBCToastProvider&gt;<br/><br/>
              <span className="text-[#8B949E] italic">// 2. Use the hook in any component</span><br/>
              <span className="text-[#FF7B72]">const</span> {'{'} showToast {'}'} = useJBCToast();<br/><br/>
              showToast({'{'}<br/>
              {'  '}title: <span className="text-[#A5D6FF]">'Stake Confirmed'</span>,<br/>
              {'  '}variant: <span className="text-[#A5D6FF]">'success'</span>,<br/>
              {'  '}duration: <span className="text-[#A5D6FF]">5000</span><br/>
              {'}'});
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ToastSystem;