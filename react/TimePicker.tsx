import React, { useRef } from 'react';
import { JBCIcon } from './Icon';

export interface JBCTimePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  className?: string;
}

/**
 * JBC Time Picker
 * Desktop: Styled field that triggers native time selector.
 * Mobile: Native OS time picker fallback.
 */
export const JBCTimePicker: React.FC<JBCTimePickerProps> = ({
  label,
  value,
  onChange,
  disabled = false,
  error,
  helpText,
  className = ''
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (!disabled && inputRef.current) {
      if ('showPicker' in HTMLInputElement.prototype) {
        try {
          inputRef.current.showPicker();
        } catch (e) {
          inputRef.current.focus();
        }
      } else {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label className="text-[10px] font-bold uppercase tracking-widest opacity-70 px-1 dark:text-white text-black">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          type="time"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className="absolute inset-0 opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed w-full h-full"
          aria-hidden="true"
        />

        <div
          onClick={handleContainerClick}
          className={`
            w-full h-[48px] px-4 rounded-xl border-2 transition-all outline-none text-sm font-medium
            flex items-center justify-between gap-3
            dark:bg-black/20 bg-black/5
            ${error ? 'border-jbc-error' : 'border-black/10 dark:border-white/10'}
            ${!disabled ? 'hover:border-black/30 dark:hover:border-white/30 cursor-pointer active:scale-[0.98]' : 'opacity-40 cursor-not-allowed'}
            dark:text-white text-black
          `}
        >
          <div className="flex items-center gap-3">
            <JBCIcon name="ri-time-line" size={20} className="opacity-60" />
            <span className={!value ? 'opacity-30' : ''}>
              {value || "Select Time"}
            </span>
          </div>
          <JBCIcon name="ri-arrow-down-s-line" size={20} className="opacity-40" />
        </div>
      </div>

      {(error || helpText) && (
        <div className={`text-[10px] font-medium px-1 transition-colors ${error ? 'text-jbc-error' : 'opacity-50'}`}>
          {error || helpText}
        </div>
      )}
    </div>
  );
};