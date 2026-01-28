import React from 'react';

export interface JBCRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

/**
 * JBCRadio
 * Standardized single-choice input component.
 * Uses JBC Cyan for selection states and ensures accessible touch areas.
 */
export const JBCRadio: React.FC<JBCRadioProps> = ({
  label,
  error,
  disabled,
  className = '',
  id,
  ...props
}) => {
  const radioId = id || `jbc-radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label 
      className={`
        group flex items-start gap-3 cursor-pointer min-h-[44px] py-2
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'active:opacity-80'}
        ${className}
      `}
      htmlFor={radioId}
    >
      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
        <input
          type="radio"
          id={radioId}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        
        {/* Visual Circle */}
        <div className={`
          w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center
          ${error 
            ? 'border-jbc-error' 
            : 'border-black/20 dark:border-white/20 peer-checked:border-jbc-cyan'
          }
          group-hover:border-jbc-cyan/60 
          peer-focus-visible:ring-2 peer-focus-visible:ring-jbc-cyan peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-jbc-dark
        `}>
          <div className={`
            w-2.5 h-2.5 rounded-full bg-jbc-cyan transition-transform duration-200 scale-0 peer-checked:scale-100
            ${error ? 'bg-jbc-error' : ''}
          `} />
        </div>
      </div>

      {label && (
        <span className="text-sm font-medium text-black dark:text-white select-none pt-0.5">
          {label}
        </span>
      )}
    </label>
  );
};