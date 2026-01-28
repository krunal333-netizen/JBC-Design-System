
import React, { useState, useEffect } from 'react';
import { JBCIcon } from './Icon';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  containerClassName?: string;
  validateAs?: 'email' | 'url';
}

/**
 * JBC Standardized Input Component
 * Now includes internal validation for Email and URL formats.
 * Applies 'has-error' class to trigger brand-standard shake animations.
 */
// Fix: Added forwardRef to support ref prop
export const JBCInput = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  error: externalError,
  helpText,
  prefixIcon,
  suffixIcon,
  containerClassName = '',
  className = '',
  id,
  disabled,
  validateAs,
  onBlur,
  onChange,
  value,
  ...props
}, ref) => {
  const [internalError, setInternalError] = useState<string | undefined>();
  const inputId = id || `jbc-input-${Math.random().toString(36).substr(2, 9)}`;

  const validate = (val: string) => {
    if (!val || !validateAs) {
      setInternalError(undefined);
      return;
    }

    if (validateAs === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        setInternalError('Please enter a valid email address.');
      } else {
        setInternalError(undefined);
      }
    } else if (validateAs === 'url') {
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
      if (!urlRegex.test(val)) {
        setInternalError('Please enter a valid URL.');
      } else {
        setInternalError(undefined);
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validate(e.target.value);
    if (onBlur) onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Clear internal error when typing if it was fixed
    if (internalError) {
      validate(e.target.value);
    }
    if (onChange) onChange(e);
  };

  const activeError = externalError || internalError;

  return (
    <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-bold uppercase tracking-widest opacity-70 px-1 dark:text-white text-black"
        >
          {label}
        </label>
      )}
      
      <div className="relative group">
        {prefixIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
            <JBCIcon name={prefixIcon} size={20} />
          </div>
        )}
        
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`
            w-full h-[48px] px-4 rounded-xl border-2 transition-all outline-none text-sm font-medium
            dark:bg-black/20 bg-black/5
            ${prefixIcon ? 'pl-11' : ''}
            ${suffixIcon ? 'pr-11' : ''}
            ${activeError 
              ? 'border-jbc-error has-error' 
              : 'border-black/10 dark:border-white/10 focus:border-jbc-cyan dark:focus:border-jbc-cyan'
            }
            ${disabled ? 'opacity-40 cursor-not-allowed bg-black/10' : 'hover:border-black/30 dark:hover:border-white/30'}
            dark:text-white text-black placeholder:opacity-30
            ${className}
          `}
          {...props}
        />

        {suffixIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
            <JBCIcon name={suffixIcon} size={20} />
          </div>
        )}
      </div>

      {(activeError || helpText) && (
        <div className={`text-[10px] font-medium px-1 transition-all ${activeError ? 'text-jbc-error' : 'opacity-50'}`}>
          {activeError || helpText}
        </div>
      )}
    </div>
  );
});

export const JBCTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `jbc-textarea-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-widest opacity-70 px-1">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`
          w-full min-h-[100px] p-4 rounded-xl border-2 transition-all outline-none text-sm font-medium
          dark:bg-black/20 bg-black/5
          ${error ? 'border-jbc-error has-error' : 'border-black/10 dark:border-white/10 focus:border-jbc-cyan'}
          dark:text-white text-black placeholder:opacity-30
          ${className}
        `}
        {...props}
      />
      {error && <div className="text-[10px] font-medium px-1 text-jbc-error">{error}</div>}
    </div>
  );
};
