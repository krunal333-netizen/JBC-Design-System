
import React, { useState, useRef, useEffect } from 'react';
import { JBCIcon } from './Icon';

export interface DropdownOption {
  label: string;
  value: string;
  icon?: string;
}

export interface JBCDropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  success?: string; // New: Explicit success state support
  helpText?: string;
  className?: string;
}

/**
 * JBC Standardized Dropdown Component
 * Features full state management for Hover, Focus, Error, Success, and Disabled.
 * Adheres to standardized 48px item heights for cross-platform hit-area parity.
 */
export const JBCDropdown: React.FC<JBCDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error,
  success,
  helpText,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`} ref={containerRef}>
      {label && (
        <label className="text-[10px] font-bold uppercase tracking-widest opacity-70 px-1 dark:text-white text-black">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={`
            w-full h-[48px] px-4 rounded-xl border-2 transition-all outline-none text-sm font-medium
            flex items-center justify-between gap-3
            dark:bg-black/20 bg-black/5
            ${isOpen ? 'border-jbc-cyan ring-2 ring-jbc-cyan/20' : ''}
            ${!isOpen && error ? 'border-jbc-error' : ''}
            ${!isOpen && success ? 'border-jbc-success' : ''}
            ${!isOpen && !error && !success ? 'border-black/10 dark:border-white/10' : ''}
            ${!disabled && !isOpen ? 'hover:border-black/30 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/5' : ''}
            ${disabled ? 'opacity-40 cursor-not-allowed grayscale-[0.5]' : 'cursor-pointer'}
            dark:text-white text-black
          `}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            {selectedOption?.icon && (
              <JBCIcon name={selectedOption.icon} size={20} className="shrink-0 opacity-60" />
            )}
            <span className={!selectedOption ? 'opacity-30' : ''}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {success && !isOpen && <JBCIcon name="ri-checkbox-circle-line" 
              // Fix: Corrected size to valid token value 20
              size={20} 
              className="text-jbc-success" />}
            <JBCIcon 
              name="ri-arrow-down-s-line" 
              size={20} 
              className={`transition-transform duration-300 opacity-40 ${isOpen ? 'rotate-180 opacity-100' : ''}`} 
            />
          </div>
        </button>

        {/* Dropdown Menu - Standardized Item Height (48px) */}
        {isOpen && (
          <div 
            className={`
              absolute z-jbc-dropdown w-full mt-2 py-2 rounded-xl shadow-2xl border 
              animate-in fade-in slide-in-from-top-2 duration-200
              dark:bg-jbc-surface dark:border-white/10 bg-jbc-light border-black/10
              max-h-[240px] overflow-y-auto scrollbar-thin
            `}
          >
            {options.map((option) => (
              <button
                key={option.value}
                // Fixed: used option.value instead of undefined optionValue
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full h-[48px] px-4 text-sm font-medium text-left flex items-center gap-3
                  transition-colors hover:bg-jbc-cyan/10 hover:text-jbc-cyan
                  ${option.value === value ? 'bg-jbc-cyan/5 text-jbc-cyan' : 'dark:text-white/80 text-black/80'}
                `}
              >
                {option.icon && <JBCIcon name={option.icon} 
                  // Fix: Corrected size to valid token value 20
                  size={20} />}
                {option.label}
                {option.value === value && (
                  <JBCIcon name="ri-check-line" size={16} className="ml-auto" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {(error || success || helpText) && (
        <div className={`text-[10px] font-medium px-1 transition-colors
          ${error ? 'text-jbc-error' : success ? 'text-jbc-success' : 'opacity-50'}`}>
          {error || success || helpText}
        </div>
      )}
    </div>
  );
};
