import React from 'react';
import { JBCAvatar } from '../react/Avatar';
import { JBCCard } from '../react/Card';
import { ENTERPRISE_SPEC } from '../constants';

const Avatars: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';

  return (
    <div className="space-y-16">
      {/* Overview & Logic */}
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Enterprise Identity (Avatars)</h3>
        <p className="text-sm leading-relaxed" style={{ color: secondaryTextColor }}>
          Standardized identity containers with support for high-fidelity images, initials, and fallback icons. Designed for clarity in transaction lists and user profiles. Avatars use JBC tokens for border-radius and ring-offsets to ensure a consistent geometric dialect.
        </p>
      </JBCCard>

      {/* Figma Structure */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Figma Page Layout</h4>
        <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-[#0D1117] border-white/5' : 'bg-black/5 border-black/10'}`}>
          <div className="font-mono text-xs text-jbc-cyan space-y-2">
            <div>Identity / Avatar</div>
            <div className={`pl-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>├── Variants (Size: 24, 32, 40, 56)</div>
            <div className={`pl-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>├── Type (Image, Initials, Icon)</div>
            <div className={`pl-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>└── Presence (None, Online, Offline)</div>
          </div>
        </div>
      </div>

      {/* Tailwind & Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Sizing & Utility Scale</h4>
          <div className="space-y-4">
            {ENTERPRISE_SPEC.avatar.sizes.map(size => (
              <div key={size.id} className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5 transition-all hover:border-jbc-cyan/20">
                <div className="flex items-center gap-4">
                  <JBCAvatar size={size.val as any} status="online" initials={size.id.toUpperCase()} />
                  <div>
                    <div className="text-sm font-bold">{size.val}PX ({size.id.toUpperCase()})</div>
                    <code className="text-[10px] opacity-40">{size.tailwind}</code>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-jbc-gold">TOKEN-SYNC</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Platform Mappings</h4>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10">
               <div className="text-[10px] font-bold text-jbc-cyan mb-2">WEB (TAILWIND)</div>
               <code className="text-xs opacity-60 break-all block">rounded-xl ring-2 ring-transparent overflow-hidden transition-all</code>
            </div>
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10">
               <div className="text-[10px] font-bold text-jbc-gold mb-2">iOS (SWIFTUI)</div>
               <code className="text-xs opacity-60 break-all block">{ENTERPRISE_SPEC.platformMapping.ios.avatar}</code>
            </div>
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10">
               <div className="text-[10px] font-bold text-jbc-cyan mb-2">ANDROID (COMPOSE)</div>
               <code className="text-xs opacity-60 break-all block">{ENTERPRISE_SPEC.platformMapping.android.avatar}</code>
            </div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className={`p-8 rounded-2xl border-2 border-dashed ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
        <h4 className="text-sm font-bold mb-4 uppercase tracking-widest">Avatar Usage Rules</h4>
        <ul className="text-xs space-y-3 opacity-70">
          <li className="flex gap-3"><span className="text-jbc-cyan">01</span> Use Initials fallback if image source fails to load within 1.5s.</li>
          <li className="flex gap-3"><span className="text-jbc-cyan">02</span> Presence indicator must always align to the bottom-right relative to the container.</li>
          <li className="flex gap-3"><span className="text-jbc-cyan">03</span> Mobile Touch Target: Ensure 24px and 32px variants are placed within a minimum 44px hit container.</li>
        </ul>
      </div>
    </div>
  );
};

export default Avatars;