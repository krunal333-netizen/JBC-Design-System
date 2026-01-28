
import React from 'react';

export interface Column<T> {
  // Fix: Allow header to be a ReactNode
  header: React.ReactNode;
  key: keyof T | string;
  render?: (item: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
}

export function JBCTable<T extends { id: string | number }>({
  columns,
  data,
  onRowClick,
  isLoading
}: TableProps<T>) {
  return (
    <div className="w-full overflow-hidden border border-black/10 dark:border-white/10 rounded-2xl shadow-sm transition-all duration-300">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
              {columns.map((col, i) => (
                <th 
                  key={i} 
                  className={`
                    px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60
                    ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}
                    ${col.className || ''}
                  `}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-20 text-center">
                  <div className="inline-block w-8 h-8 border-2 border-jbc-cyan border-t-transparent rounded-full animate-spin" />
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-20 text-center opacity-40 italic">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item, rowIndex) => (
                <tr 
                  key={item.id}
                  onClick={() => onRowClick?.(item)}
                  className={`
                    border-b border-black/5 dark:border-white/5 transition-colors
                    ${onRowClick ? 'cursor-pointer hover:bg-jbc-cyan/5' : ''}
                    last:border-0
                  `}
                >
                  {columns.map((col, colIndex) => (
                    <td 
                      key={colIndex} 
                      className={`
                        px-6 py-4 text-sm font-medium
                        ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}
                        ${col.className || ''}
                      `}
                    >
                      {col.render ? col.render(item) : (item[col.key as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Card List) */}
      <div className="md:hidden divide-y divide-black/10 dark:divide-white/10">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="inline-block w-8 h-8 border-2 border-jbc-cyan border-t-transparent rounded-full animate-spin" />
          </div>
        ) : data.length === 0 ? (
          <div className="p-12 text-center opacity-40 italic">No data available</div>
        ) : (
          data.map((item) => (
            <div 
              key={item.id}
              onClick={() => onRowClick?.(item)}
              className={`p-6 space-y-4 ${onRowClick ? 'active:bg-jbc-cyan/10' : ''}`}
            >
              {columns.map((col, i) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 shrink-0 mt-1">
                    {col.header}
                  </span>
                  <div className={`text-sm font-semibold ${col.align === 'right' ? 'text-right' : 'text-left'}`}>
                    {col.render ? col.render(item) : (item[col.key as keyof T] as React.ReactNode)}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
