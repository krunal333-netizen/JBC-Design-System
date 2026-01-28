import React from 'react';

export interface JBCSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

/**
 * JBCSwitch
 * Binary toggle component for immediate state changes.
 * Features 24px track height and 44px hit container for touch accessibility.
 */
export const JBCSwitch: React.FC<JBCSwitchProps> = ({
  label,
  error,
  disabled,
  className = '',
  id,
  ...props
}) => {
  const switchId = id || `jbc-switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label 
      className={`
        group flex items-center gap-3 cursor-pointer min-h-[44px]
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'active:opacity-90'}
        ${className}
      `}
      htmlFor={switchId}
    >
      <div className="relative flex items-center shrink-0">
        <input
          type="checkbox"
          id={switchId}
          disabled={disabled}
          role="switch"
          aria-checked={props.checked || props.defaultChecked}
          className="peer sr-only"
          {...props}
        />
        
        {/* Track */}
        <div className={`
          w-10 h-6 rounded-full bg-black/10 dark:bg-white/10 border-2
          transition-colors duration-300 peer-checked:bg-jbc-cyan
          ${error ? 'border-jbc-error' : 'border-transparent'}
          peer-focus-visible:ring-2 peer-focus-visible:ring-jbc-cyan peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-jbc-dark
        `} />
        
        {/* Thumb */}
        <div className={`
          absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm
          transition-transform duration-300 transform peer-checked:translate-x-4
          ${disabled ? 'bg-white/80' : ''}
          ${error ? 'bg-jbc-error/20' : ''}
        `} />
      </div>

      {label && (
        <span className="text-sm font-medium text-black dark:text-white select-none">
          {label}
        </span>
      )}
    </label>
  );
};