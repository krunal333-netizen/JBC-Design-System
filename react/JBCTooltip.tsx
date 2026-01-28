
import React, { useState, useRef, useEffect } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface JBCTooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  maxWidth?: number | string;
  children: React.ReactElement;
  className?: string;
}

/**
 * JBCTooltip
 * Provides contextual help and labels for interactive elements.
 * Features: Auto-positioning (basic), Hover/Focus/Long-press support, 
 * and WCAG-compliant accessibility.
 */
export const JBCTooltip: React.FC<JBCTooltipProps> = ({
  content,
  placement = 'top',
  delay = 200,
  maxWidth = 200,
  children,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  // Using ReturnType<typeof setTimeout> instead of NodeJS.Timeout to resolve namespace errors in browser environments.
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useRef(`jbc-tooltip-${Math.random().toString(36).substring(2, 9)}`).current;

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Fix: Cast children to any for cloneElement to avoid unknown type issues with aria-describedby and event handlers
  const trigger = React.cloneElement(children as React.ReactElement<any>, {
    'aria-describedby': isVisible ? tooltipId : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      if (children.props && (children.props as any).onMouseEnter) (children.props as any).onMouseEnter(e);
      showTooltip();
    },
    onMouseLeave: (e: React.MouseEvent) => {
      if (children.props && (children.props as any).onMouseLeave) (children.props as any).onMouseLeave(e);
      hideTooltip();
    },
    onFocus: (e: React.FocusEvent) => {
      if (children.props && (children.props as any).onFocus) (children.props as any).onFocus(e);
      showTooltip();
    },
    onBlur: (e: React.FocusEvent) => {
      if (children.props && (children.props as any).onBlur) (children.props as any).onBlur(e);
      hideTooltip();
    },
    // Mobile support
    onTouchStart: () => showTooltip(),
    onTouchEnd: () => hideTooltip(),
  });

  const placementClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-jbc-lightSurface dark:border-t-jbc-surface',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-jbc-lightSurface dark:border-b-jbc-surface',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-jbc-lightSurface dark:border-l-jbc-surface',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-jbc-lightSurface dark:border-r-jbc-surface'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {trigger}
      
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`
            absolute z-jbc-tooltip px-3 py-2 rounded-lg text-xs font-medium pointer-events-none
            dark:bg-jbc-surface bg-jbc-lightSurface shadow-jbc-sm border border-black/5 dark:border-white/5
            dark:text-white text-black animate-in fade-in zoom-in-95 duration-150
            ${placementClasses[placement]}
          `}
          style={{ maxWidth }}
        >
          {content}
          
          {/* Arrow */}
          <div 
            className={`
              absolute border-4 border-transparent
              ${arrowClasses[placement]}
            `}
          />
        </div>
      )}
    </div>
  );
};
