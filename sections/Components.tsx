import React, { useState } from 'react';
import { JBCButton, JBCIconButton, JBCButtonGroup, JBCSegmentedButton, JBCFAB, JBCSplitButton } from '../react/Button';
import { JBCInput } from '../react/Input';
import { JBCModal } from '../react/Modal';
import { JBCTable, Column } from '../react/Table';
import { JBCDataGrid } from '../react/DataGrid';
import { JBCDropdown } from '../react/Dropdown';
import { JBCBadge } from '../react/Badge';
import { JBCCard } from '../react/Card';
import { JBCProgress } from '../react/Progress';
import { JBCAvatar } from '../react/Avatar';
import { JBCStepper } from '../react/Stepper';
import { JBCEmptyState } from '../react/EmptyState';
import { JBCSkeleton } from '../react/Skeleton';
import { BUTTON_SPEC, DROPDOWN_SPEC, ELEVATION_SPEC, ENTERPRISE_SPEC } from '../constants';

interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  value: string;
  change: string;
}

const Components: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [selectedSegment, setSelectedSegment] = useState('day');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('uni');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());
  
  const secondaryTextColor = theme === 'dark' ? '#8B949E' : '#424A53';
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  const assets: Asset[] = [
    { id: '1', name: 'Ethereum', symbol: 'ETH', balance: '2.450', value: '$4,520.12', change: '+2.45%' },
    { id: '2', name: 'Bitcoin', symbol: 'BTC', balance: '0.125', value: '$8,214.50', change: '-1.20%' },
    { id: '3', name: 'JBC Token', symbol: 'JBC', balance: '15,200', value: '$3,800.00', change: '+12.4%' },
  ];

  const protocolOptions = [
    { label: 'Uniswap V3', value: 'uni', icon: 'ri-exchange-line' },
    { label: 'Aave V3', value: 'aave', icon: 'ri-hand-coin-line' },
    { label: 'Curve Finance', value: 'curve', icon: 'ri-water-flash-line' },
    { label: 'Lido Finance', value: 'lido', icon: 'ri-drop-line' },
  ];

  const columns: Column<Asset>[] = [
    { header: 'Asset', key: 'name', render: (a) => (
      <div className="flex items-center gap-3">
        <JBCAvatar initials={a.symbol} size={32} />
        <div>
          <div className="font-bold">{a.name}</div>
          <div className="text-[10px] opacity-50">{a.symbol}</div>
        </div>
      </div>
    )},
    { header: 'Balance', key: 'balance', align: 'right' },
    { header: 'Value', key: 'value', align: 'right' },
    { header: '24h Change', key: 'change', align: 'right', render: (a) => (
      <span className={a.change.startsWith('+') ? 'text-jbc-success' : 'text-jbc-error'}>
        {a.change}
      </span>
    )}
  ];

  const steps = [
    { id: 1, label: 'Identity', description: 'Link wallet' },
    { id: 2, label: 'Protocol', description: 'Select pair' },
    { id: 3, label: 'Confirm', description: 'Sign tx' }
  ];

  const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>{title}</h3>
      <p className={`text-sm`} style={{ color: secondaryTextColor }}>{subtitle}</p>
    </div>
  );

  return (
    <div className="space-y-16">
      {/* Existing Sections... */}
      
      {/* 6. Enterprise Identity (Avatars) */}
      <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
        <div className="flex justify-between items-start mb-12">
          <SectionTitle 
            title="Enterprise Identity" 
            subtitle="Standardized avatars with presence indicators and multi-mode fallbacks." 
          />
          <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold bg-jbc-cyan/10`} style={{ color: jbcCyan }}>
            05.6 IDENTITY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Avatar Variants</h4>
            <div className="flex flex-wrap items-end gap-6">
              <JBCAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" size={56} status="online" />
              <JBCAvatar initials="JD" size={40} status="offline" />
              <JBCAvatar icon="ri-shield-user-line" size={32} />
              <JBCAvatar size={24} />
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Platform SDK Spec</h4>
            <div className="space-y-2 text-xs opacity-60">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>iOS (SwiftUI)</span>
                <code className="text-jbc-cyan">{ENTERPRISE_SPEC.platformMapping.ios.avatar}</code>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>Android (M3)</span>
                <code className="text-jbc-cyan">{ENTERPRISE_SPEC.platformMapping.android.avatar}</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Process Flows (Stepper) */}
      <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
        <div className="flex justify-between items-start mb-12">
          <SectionTitle 
            title="Process Flows" 
            subtitle="Guided steppers for complex multi-stage transactions." 
          />
          <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold bg-jbc-cyan/10`} style={{ color: jbcCyan }}>
            05.7 FLOWS
          </span>
        </div>

        <div className="space-y-12">
          <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5">
            <JBCStepper steps={steps} currentStep={currentStep} orientation="horizontal" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-black/5 dark:bg-white/5">
              <JBCStepper steps={steps} currentStep={currentStep} orientation="vertical" />
            </div>
            <div className="flex flex-col justify-center gap-4">
               <p className="text-xs opacity-60">Interact with the state to see reactive transitions.</p>
               <div className="flex gap-2">
                 <JBCButton size="sm" variant="outlined" onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}>Previous Step</JBCButton>
                 <JBCButton size="sm" onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}>Next Step</JBCButton>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Advanced Data (DataGrid) */}
      <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
        <div className="flex justify-between items-start mb-12">
          <SectionTitle 
            title="Advanced Data Grids" 
            subtitle="Sorting, selection, and mobile-adaptive rows for deep-liquidity analysis." 
          />
          <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold bg-jbc-cyan/10`} style={{ color: jbcCyan }}>
            05.8 GRIDS
          </span>
        </div>

        <div className="space-y-6">
          <JBCDataGrid 
            columns={columns} 
            data={assets} 
            selectable 
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
          />
          <div className="text-[10px] font-mono opacity-40">
            Selection count: {selectedIds.size} items active
          </div>
        </div>
      </div>

      {/* 9. Feedback & Placeholder (Skeleton + Empty) */}
      <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
        <div className="flex justify-between items-start mb-12">
          <SectionTitle 
            title="Feedback & Loading" 
            subtitle="Predictive placeholders and blank state handling." 
          />
          <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold bg-jbc-cyan/10`} style={{ color: jbcCyan }}>
            05.9 FEEDBACK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Placeholder Skeletons</h4>
            <div className="space-y-6">
              <JBCSkeleton variant="card" />
              <JBCSkeleton variant="table" />
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Blank States</h4>
            <JBCEmptyState 
              title="No Assets Found" 
              description="Your portfolio is currently empty. Connect a wallet or buy JBC tokens to get started with yield farming." 
              action={{ label: 'Buy Tokens', onClick: () => console.log('Buy') }}
            />
          </div>
        </div>
      </div>

      {/* 10. System Alerts (Error Pages) */}
      <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
        <div className="flex justify-between items-start mb-12">
          <SectionTitle 
            title="System Error States" 
            subtitle="Formal error page components for platform resilience." 
          />
          <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold bg-jbc-cyan/10`} style={{ color: jbcCyan }}>
            05.10 ERROR
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <JBCEmptyState 
            variant="error"
            icon="ri-error-warning-line"
            title="404 - Network Lost"
            description="The requested resource or wallet path could not be found. Check your blockchain RPC settings."
            action={{ label: 'Back to Safety', onClick: () => console.log('Home') }}
           />
           <JBCEmptyState 
            variant="error"
            icon="ri-lock-2-line"
            title="Access Denied"
            description="This vault requires higher tier KYC or LP permissions. Verify your status in the settings menu."
           />
        </div>
      </div>
    </div>
  );
};

export default Components;