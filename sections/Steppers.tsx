import React, { useState } from 'react';
import { JBCStepper } from '../react/Stepper';
import { JBCCard } from '../react/Card';
import { JBCButton } from '../react/Button';
import { ENTERPRISE_SPEC } from '../constants';

const Steppers: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { id: 1, label: 'Identity', description: 'Link wallet' },
    { id: 2, label: 'Protocol', description: 'Select pair' },
    { id: 3, label: 'Confirm', description: 'Sign tx' }
  ];

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Process Steppers</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          Guided flows for complex transactions. Automatically adapts from a horizontal timeline on Desktop to a vertical checklist on Mobile for better reachability. All state colors are bound to JBC Success (Completed) and JBC Cyan (Active) tokens.
        </p>
      </JBCCard>

      {/* Figma Structure */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Figma Component Hierarchy</h4>
        <div className={`p-6 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-[#0D1117] border-white/5' : 'bg-black/5 border-black/10'}`}>
          <div className="font-mono text-xs space-y-2">
            <div className="text-jbc-cyan font-bold">Navigation / Stepper</div>
            <div className={`pl-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>├── Desktop_Horizontal (Autolayout: Fill Container)</div>
            <div className={`pl-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>├── Mobile_Vertical (Autolayout: Fixed Width)</div>
            <div className={`pl-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>└── Step_Node (States: Default, Active, Done)</div>
          </div>
        </div>
      </div>

      {/* Interactive Display */}
      <div className="space-y-12">
        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Live Implementation (Desktop Preview)</h4>
          <div className="p-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-inner">
            <JBCStepper steps={steps} currentStep={currentStep} orientation="horizontal" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Live Implementation (Mobile Preview)</h4>
            <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-full max-w-[320px] mx-auto">
              <JBCStepper steps={steps} currentStep={currentStep} orientation="vertical" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Platform Adaptation Rules</h4>
              <div className="space-y-3">
                 <div className="flex justify-between text-xs py-2 border-b border-white/5">
                    <span className="opacity-40 uppercase">iOS HIG</span>
                    <span className="text-jbc-cyan">{ENTERPRISE_SPEC.platformMapping.ios.stepper}</span>
                 </div>
                 <div className="flex justify-between text-xs py-2 border-b border-white/5">
                    <span className="opacity-40 uppercase">Android Material</span>
                    <span className="text-jbc-cyan">{ENTERPRISE_SPEC.platformMapping.android.stepper}</span>
                 </div>
              </div>
            </div>
            <div className="flex gap-2 p-4 rounded-xl bg-jbc-cyan/5 border border-jbc-cyan/10">
              <JBCButton size="sm" variant="outlined" className="flex-1" onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}>Back</JBCButton>
              <JBCButton size="sm" className="flex-1" onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}>Continue</JBCButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steppers;