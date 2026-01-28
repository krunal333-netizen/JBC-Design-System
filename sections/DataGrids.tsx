import React, { useState } from 'react';
import { JBCDataGrid } from '../react/DataGrid';
import { JBCCard } from '../react/Card';
import { JBCAvatar } from '../react/Avatar';
import { Column } from '../react/Table';
import { ENTERPRISE_SPEC } from '../constants';

const DataGrids: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());

  const assets = [
    { id: '1', name: 'Ethereum', symbol: 'ETH', balance: '2.450', value: '$4,520.12', change: '+2.45%' },
    { id: '2', name: 'Bitcoin', symbol: 'BTC', balance: '0.125', value: '$8,214.50', change: '-1.20%' },
    { id: '3', name: 'JBC Token', symbol: 'JBC', balance: '15,200', value: '$3,800.00', change: '+12.4%' },
  ];

  const columns: Column<any>[] = [
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

  return (
    <div className="space-y-16">
      <JBCCard elevation="low" className="p-8">
        <h3 className="text-xl font-bold mb-4">Advanced Data Grids</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          The Data Grid component supports high-density information with built-in sorting, row selection, and loading states. It consumes JBC Neutral tokens for row-dividers and JBC Surface tokens for container elevations.
        </p>
      </JBCCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
             <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Interactive Grid Implementation</h4>
             <div className="text-[10px] font-mono text-jbc-cyan uppercase font-bold px-3 py-1 rounded bg-jbc-cyan/10">Active Selection: {selectedIds.size}</div>
          </div>
          <JBCDataGrid 
            columns={columns} 
            data={assets} 
            selectable 
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
          />
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-4">Figma Configuration</h4>
            <div className={`p-5 rounded-2xl border text-xs font-mono space-y-2 ${theme === 'dark' ? 'bg-[#0D1117] border-white/5' : 'bg-black/5 border-black/10'}`}>
              <div className="text-jbc-cyan">Components / Grid</div>
              <div className="pl-3 opacity-40">├── Header / Sortable (Variant)</div>
              <div className="pl-3 opacity-40">├── Row / Default</div>
              <div className="pl-3 opacity-40">├── Row / Selected</div>
              <div className="pl-3 opacity-40">└── Cell / Types (Text, Avatar, Badge)</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-jbc-gold/5 border border-jbc-gold/10">
            <h4 className="text-xs font-bold mb-3 flex items-center gap-2">
              <i className="ri-smartphone-line"></i> Mobile Behavior
            </h4>
            <p className="text-[11px] leading-relaxed opacity-60">
              When viewport size <code className="text-jbc-gold">768px</code>, the grid logic automatically switches from a <code>Table</code> structure to a <code>Card-List</code> structure where each row is rendered as an independent card with labeled data-points.
            </p>
          </div>
          
          <div className="space-y-2">
             <div className="text-[10px] font-bold opacity-40 uppercase tracking-wider">iOS Parity</div>
             <code className="text-[10px] block opacity-70">{ENTERPRISE_SPEC.platformMapping.ios.grid}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGrids;