
import React from 'react';
import { JBCIcon } from './Icon';

export interface JBCCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
  indeterminate?: boolean;
}

/**
 * JBCCheckbox
 * Standardized boolean input for multi-selection or agreement.
 * Enforces a 44px touch target and utilizes JBC design tokens.
 */
// Fix: Added forwardRef to support ref prop
export const JBCCheckbox = React.forwardRef<HTMLInputElement, JBCCheckboxProps>(({
  label,
  error,
  indeterminate,
  disabled,
  className = '',
  id,
  ...props
}, ref) => {
  const checkboxId = id || `jbc-checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label 
      className={`
        group flex items-start gap-3 cursor-pointer min-h-[44px] py-2
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'active:opacity-80'}
        ${className}
      `}
      htmlFor={checkboxId}
    >
      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        
        {/* Visual Box - Utilizing JBC Tokens */}
        <div className={`
          w-5 h-5 rounded-[var(--jbc-radius-sm,8px)] border-2 transition-all duration-200 flex items-center justify-center
          ${error 
            ? 'border-jbc-error bg-jbc-error/5' 
            : 'border-black/20 dark:border-white/20 peer-checked:border-jbc-cyan peer-checked:bg-jbc-cyan'
          }
          ${indeterminate ? 'border-jbc-cyan bg-jbc-cyan' : ''}
          group-hover:border-jbc-cyan/60 
          peer-focus-visible:ring-2 peer-focus-visible:ring-jbc-cyan peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-jbc-dark
        `}>
          {indeterminate ? (
            <div className="w-2.5 h-0.5 bg-black rounded-full" />
          ) : (
            <JBCIcon 
              name="ri-check-line" 
              // Fix: Corrected size to valid token value 16
              size={16} 
              className={`text-black transition-transform duration-200 scale-0 peer-checked:scale-100`} 
            />
          )}
        </div>
      </div>

      {label && (
        <span className="text-sm font-medium text-black dark:text-white select-none pt-0.5">
          {label}
        </span>
      )}
    </label>
  );
});
