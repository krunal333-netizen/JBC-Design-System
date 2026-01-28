
import React, { useState, useMemo } from 'react';
import { JBCTable, Column } from './Table';
import { JBCIcon } from './Icon';
import { JBCCard } from './Card';

export interface DataGridProps<T> {
  columns: Column<T>[];
  data: T[];
  selectable?: boolean;
  selectedIds?: Set<string | number>;
  onSelectionChange?: (ids: Set<string | number>) => void;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyState?: React.ReactNode;
}

export function JBCDataGrid<T extends { id: string | number }>({
  columns,
  data,
  selectable,
  selectedIds = new Set(),
  onSelectionChange,
  onRowClick,
  isLoading,
  emptyState
}: DataGridProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey as keyof T];
      const bVal = b[sortKey as keyof T];
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortDir]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === data.length) {
      onSelectionChange?.(new Set());
    } else {
      onSelectionChange?.(new Set(data.map(d => d.id)));
    }
  };

  const toggleSelectOne = (id: string | number) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onSelectionChange?.(next);
  };

  const enhancedColumns: Column<T>[] = useMemo(() => {
    const cols = columns.map(col => ({
      ...col,
      header: (
        <button 
          onClick={() => handleSort(col.key as string)}
          className="flex items-center gap-2 group/header"
        >
          {col.header}
          <div className={`
            transition-all duration-200 
            ${sortKey === col.key ? 'opacity-100 text-jbc-cyan' : 'opacity-0 group-hover/header:opacity-40'}
          `}>
            <JBCIcon 
              name={sortKey === col.key && sortDir === 'desc' ? 'ri-arrow-down-line' : 'ri-arrow-up-line'} 
              // Fix: Corrected size to valid token value 16
              size={16} 
            />
          </div>
        </button>
      )
    }));

    if (selectable) {
      cols.unshift({
        header: (
          <div className="flex items-center justify-center">
            <input 
              type="checkbox" 
              checked={data.length > 0 && selectedIds.size === data.length}
              onChange={toggleSelectAll}
              className="w-4 h-4 rounded border-black/10 dark:border-white/10 accent-jbc-cyan"
            />
          </div>
        ),
        key: 'selection-checkbox',
        align: 'center',
        className: 'w-10',
        render: (item) => (
          <div className="flex items-center justify-center">
            <input 
              type="checkbox" 
              checked={selectedIds.has(item.id)}
              onChange={(e) => {
                e.stopPropagation();
                toggleSelectOne(item.id);
              }}
              className="w-4 h-4 rounded border-black/10 dark:border-white/10 accent-jbc-cyan"
            />
          </div>
        )
      });
    }

    return cols;
  }, [columns, selectable, selectedIds, data, sortKey, sortDir]);

  if (data.length === 0 && !isLoading && emptyState) {
    return <>{emptyState}</>;
  }

  return (
    <div className="space-y-4">
      <JBCTable 
        columns={enhancedColumns} 
        data={sortedData} 
        onRowClick={onRowClick} 
        isLoading={isLoading} 
      />
    </div>
  );
}
