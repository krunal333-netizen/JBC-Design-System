import React, { useState, useRef } from 'react';
import { JBCCard } from '../react/Card';
import { JBCCheckbox } from '../react/JBCCheckbox';
import { JBCRadio } from '../react/JBCRadio';
import { JBCSwitch } from '../react/JBCSwitch';
import { JBCButton } from '../react/Button';
import { JBCIcon } from '../react/Icon';
import { JBCInput } from '../react/Input';

const FormSystem: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [checkboxVal, setCheckboxVal] = useState(false);
  const [radioVal, setRadioVal] = useState('one');
  const [switchVal, setSwitchVal] = useState(true);
  const [showErrors, setShowErrors] = useState(false);
  
  const walletInputRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const handleFocusField = (field: 'wallet' | 'terms') => {
    if (field === 'wallet') walletInputRef.current?.focus();
    if (field === 'terms') termsRef.current?.focus();
  };

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Forms / Binary Inputs</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          Standardized components for boolean and choice inputs. The JBC form system prioritizes accessibility with mandatory 44px touch targets and clear visual states for financial-grade accuracy.
        </p>
      </JBCCard>

      {/* 1. Checkbox Section */}
      <div className="space-y-8" id="form-checkbox">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">01. Checkbox System</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 space-y-2">
            <JBCCheckbox 
              label="I accept the smart contract risks" 
              checked={checkboxVal} 
              onChange={(e) => setCheckboxVal(e.target.checked)} 
            />
            <JBCCheckbox label="Enable recurring swap" defaultChecked />
            <JBCCheckbox label="Indeterminate state" indeterminate />
            <JBCCheckbox label="Error state" error />
            <JBCCheckbox label="Disabled option" disabled />
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold">When to use</h5>
            <p className="text-xs opacity-60 leading-relaxed">
              Use checkboxes when users can select multiple options from a list, or for standalone binary confirmation tasks (e.g., terms of service).
            </p>
            <ul className="text-[10px] opacity-40 space-y-1 font-mono uppercase tracking-tight">
              <li>• Border: --jbc-border-default</li>
              <li>• Checked: --jbc-cyan</li>
              <li>• Radius: --jbc-radius-sm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Radio Section */}
      <div className="space-y-8" id="form-radio">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">02. Radio System</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 space-y-1">
            <JBCRadio 
              name="protocol" 
              label="Uniswap V3" 
              checked={radioVal === 'one'} 
              onChange={() => setRadioVal('one')} 
            />
            <JBCRadio 
              name="protocol" 
              label="Aave V3" 
              checked={radioVal === 'two'} 
              onChange={() => setRadioVal('two')} 
            />
            <JBCRadio 
              name="protocol" 
              label="Curve Finance" 
              checked={radioVal === 'three'} 
              onChange={() => setRadioVal('three')} 
            />
            <JBCRadio label="Locked Protocol" disabled />
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold">When to use</h5>
            <p className="text-xs opacity-60 leading-relaxed">
              Use radios when the user must select exactly one option from a limited, mutually exclusive list. If the list exceeds 5 options, consider a dropdown.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Switch Section */}
      <div className="space-y-8" id="form-switch">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">03. Switch System</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 space-y-4">
            <JBCSwitch 
              label="Live Chart Sync" 
              checked={switchVal} 
              onChange={(e) => setSwitchVal(e.target.checked)} 
            />
            <JBCSwitch label="Biometric Sign-off" defaultChecked />
            <JBCSwitch label="Auto-compound" error />
            <JBCSwitch label="Restricted Feature" disabled />
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold">When to use</h5>
            <p className="text-xs opacity-60 leading-relaxed">
              Use switches for "On/Off" binary states that trigger immediate or persistent changes in the application environment (e.g., preferences, system settings).
            </p>
          </div>
        </div>
      </div>

      {/* 4. Validation Pattern Section */}
      <div className="space-y-8" id="form-validation">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50">04. Validation Summary Pattern</h4>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="space-y-8">
          <JBCCard elevation="mid" className={`p-8 rounded-3xl border ${theme === 'dark' ? 'border-[#30363D]' : 'border-black/10'}`}>
            <h5 className="text-lg font-bold mb-6">Interactive Validation Summary</h5>
            
            {showErrors && (
              <div className="mb-8 p-6 rounded-2xl bg-jbc-error/5 border border-jbc-error/20 animate-in fade-in slide-in-from-top-4">
                <div className="flex items-center gap-3 mb-4 text-jbc-error font-bold text-sm">
                  <JBCIcon name="ri-error-warning-fill" size={20} />
                  <span>Submission failed. Please fix the following:</span>
                </div>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => handleFocusField('wallet')}
                      className="flex items-center gap-3 group text-xs text-start"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-jbc-error" />
                      <span className="opacity-70 group-hover:opacity-100 group-hover:text-jbc-error transition-all underline decoration-dotted underline-offset-4 font-bold uppercase tracking-wider">01. Wallet address is invalid</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleFocusField('terms')}
                      className="flex items-center gap-3 group text-xs text-start"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-jbc-error" />
                      <span className="opacity-70 group-hover:opacity-100 group-hover:text-jbc-error transition-all underline decoration-dotted underline-offset-4 font-bold uppercase tracking-wider">02. Terms must be accepted</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <JBCInput 
                   ref={walletInputRef}
                   label="Destination Wallet" 
                   placeholder="0x..." 
                   error={showErrors ? 'Wallet address is invalid' : ''} 
                 />
                 <JBCCheckbox 
                   ref={termsRef}
                   label="I agree to the liquidation terms" 
                   error={showErrors} 
                 />
                 <JBCButton onClick={() => setShowErrors(!showErrors)} className="w-full">
                    {showErrors ? 'Clear Simulation' : 'Execute Transaction'}
                 </JBCButton>
               </div>
               <div className="space-y-6">
                 <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-gold/5 border-jbc-gold/20' : 'bg-jbc-gold/5 border-jbc-gold/10'} space-y-4`}>
                    <h6 className="text-[10px] font-bold uppercase tracking-widest text-jbc-gold">Pattern Rules</h6>
                    <ul className="text-xs space-y-3 opacity-80 leading-relaxed">
                      <li>• <strong>Submission-Only:</strong> Summary displays only after an explicit submit attempt.</li>
                      <li>• <strong>Navigation:</strong> Errors must be interactive links that focus/scroll to the invalid input.</li>
                      <li>• <strong>Placement:</strong> Summary should reside at the top of the form for immediate visibility.</li>
                      <li>• <strong>Style:</strong> Maintain field-level errors alongside the summary for contextual feedback.</li>
                    </ul>
                 </div>
               </div>
            </div>
          </JBCCard>
        </div>
      </div>
    </div>
  );
};

export default FormSystem;