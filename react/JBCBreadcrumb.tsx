
import React from 'react';
import { JBCIcon } from './Icon';

export interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
}

export interface JBCBreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
}

/**
 * JBCBreadcrumb
 * Standardized hierarchical navigation for deep application structures.
 * Features automatic mobile truncation and high-fidelity accessibility.
 */
export const JBCBreadcrumb: React.FC<JBCBreadcrumbProps> = ({
  items,
  separator = 'ri-arrow-right-s-line',
  className = ''
}) => {
  if (!items.length) return null;

  // Mobile Truncation Logic: If more than 3 items, collapse the middle on small screens
  const isTruncated = items.length > 3;

  const renderItem = (item: BreadcrumbItem, isLast: boolean, index: number) => {
    const isCurrent = isLast;
    
    return (
      <li key={index} className="flex items-center">
        {index > 0 && (
          <div className="mx-2 text-jbc-icon-neutral opacity-40 flex items-center shrink-0">
            <JBCIcon name={separator} size={16} />
          </div>
        )}
        
        {isCurrent ? (
          <span 
            aria-current="page"
            className="text-xs sm:text-sm font-bold text-black dark:text-white truncate max-w-[120px] sm:max-w-none"
          >
            {item.label}
          </span>
        ) : (
          <a
            href={item.href}
            className="text-xs sm:text-sm font-medium text-jbc-icon-neutral hover:text-jbc-cyan transition-colors flex items-center gap-1.5"
          >
            {item.icon && <JBCIcon name={item.icon} 
              // Fix: Corrected size to valid token value 16
              size={16} />}
            <span className="truncate max-w-[80px] sm:max-w-none">{item.label}</span>
          </a>
        )}
      </li>
    );
  };

  return (
    <nav aria-label="Breadcrumb" className={`flex ${className}`}>
      <ol className="flex items-center flex-wrap">
        {/* Mobile View: Collapsed */}
        <div className="flex sm:hidden items-center">
          {isTruncated ? (
            <>
              {renderItem(items[0], false, 0)}
              <li className="flex items-center">
                <div className="mx-2 text-jbc-icon-neutral opacity-40 flex items-center shrink-0">
                  <JBCIcon name={separator} size={16} />
                </div>
                <button 
                  className="text-xs text-jbc-icon-neutral p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded"
                  aria-label="Show full path"
                >
                  ...
                </button>
              </li>
              {renderItem(items[items.length - 1], true, items.length - 1)}
            </>
          ) : (
            items.map((item, idx) => renderItem(item, idx === items.length - 1, idx))
          )}
        </div>

        {/* Desktop View: Full Path */}
        <div className="hidden sm:flex items-center">
          {items.map((item, idx) => renderItem(item, idx === items.length - 1, idx))}
        </div>
      </ol>
    </nav>
  );
};
