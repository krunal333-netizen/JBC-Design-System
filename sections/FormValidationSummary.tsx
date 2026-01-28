import React, { useState, useRef } from 'react';
import { JBCCard } from '../react/Card';
import { JBCValidationSummary } from '../react/JBCValidationSummary';
import { JBCInput } from '../react/Input';
import { JBCButton } from '../react/Button';
import { JBCIcon } from '../react/Icon';
import { JBCCheckbox } from '../react/JBCCheckbox';

const FormValidationSummary: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [errors, setErrors] = useState<{ fieldId: string; message: string }[]>([]);
  const [formValues, setFormValues] = useState({ amount: '', wallet: '', terms: false });

  const simulateSubmit = () => {
    const newErrors = [];
    if (!formValues.amount) newErrors.push({ fieldId: 'staking-amount', message: 'Staking amount is required' });
    if (!formValues.wallet) newErrors.push({ fieldId: 'wallet-address', message: 'Destination wallet must be connected' });
    if (!formValues.terms) newErrors.push({ fieldId: 'accept-terms', message: 'You must accept the smart contract risks' });
    setErrors(newErrors);
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8 border-l-4 border-jbc-error bg-jbc-error/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
          <i className="ri-list-check text-jbc-error"></i> Forms / Validation Summary
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          The <code>JBCValidationSummary</code> provides a high-visibility container at the top of a form that lists all current blocking issues. It serves as an interaction anchor, allowing users to jump directly to invalid fields in complex multi-step or long-scroll layouts.
        </p>
      </JBCCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-lg font-bold">Live Sandbox</h4>
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-white/5 space-y-6">
            <JBCValidationSummary errors={errors} />
            
            <div className="space-y-6 pt-4">
              <JBCInput 
                id="staking-amount"
                label="Amount to Stake" 
                placeholder="0.00 JBC" 
                value={formValues.amount}
                onChange={e => setFormValues({...formValues, amount: e.target.value})}
              />
              <JBCInput 
                id="wallet-address"
                label="Wallet Address" 
                placeholder="0x..." 
                value={formValues.wallet}
                onChange={e => setFormValues({...formValues, wallet: e.target.value})}
              />
              <JBCCheckbox 
                id="accept-terms"
                label="I agree to the 14-day lockup period" 
                checked={formValues.terms}
                onChange={e => setFormValues({...formValues, terms: e.target.checked})}
              />
              <JBCButton className="w-full" onClick={simulateSubmit}>Validate Submission</JBCButton>
              <JBCButton variant="ghost" size="sm" onClick={() => setErrors([])} className="w-full">Reset Simulation</JBCButton>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg font-bold">Usage Guidance</h4>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-jbc-success/20 bg-jbc-success/5">
              <h5 className="text-[10px] font-bold text-jbc-success uppercase mb-2">When to Use</h5>
              <ul className="text-xs space-y-3 opacity-70">
                <li>• On long forms where errors might be hidden below the fold.</li>
                <li>• For critical financial approvals where clarity is mandatory.</li>
                <li>• To provide a single source of truth for screen readers via <code>aria-live</code>.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-jbc-error/20 bg-jbc-error/5">
              <h5 className="text-[10px] font-bold text-jbc-error uppercase mb-2">When NOT to Use</h5>
              <ul className="text-xs space-y-3 opacity-70">
                <li>• On small inline forms (e.g., login or search) where field-level errors suffice.</li>
                <li>• For non-blocking warnings that don't prevent submission.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 border-t border-white/5">
        <h4 className="text-lg font-bold mb-8">Interaction Logic</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: 'Auto-Scroll', 
              desc: 'Clicking an error item triggers a smooth scroll to the target input container.',
              icon: 'ri-mouse-line'
            },
            { 
              title: 'Focus Shift', 
              desc: 'After scrolling, the component programmatically focuses the input to enable immediate correction.',
              icon: 'ri-focus-2-line'
            },
            { 
              title: 'Neural Feedback', 
              desc: 'Integration with Phase 4 Haptics ensures mobile users feel a subtle "Error" buzz when the summary appears.',
              icon: 'ri-hand-coin-line'
            }
          ].map(item => (
            <div key={item.title} className="p-6 rounded-2xl bg-black/20 border border-white/5">
              <JBCIcon name={item.icon} className="mb-4 text-jbc-cyan" />
              <h5 className="text-sm font-bold mb-2">{item.title}</h5>
              <p className="text-xs opacity-50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormValidationSummary;