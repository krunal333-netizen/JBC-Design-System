import React from 'react';
import { JBCIcon } from './Icon';

export interface JBCValidationError {
  /** The id of the form field to focus/scroll to */
  fieldId: string;
  /** The localized error message */
  message: string;
}

export interface JBCValidationSummaryProps {
  /** Array of field-level errors */
  errors: JBCValidationError[];
  /** Optional override for the summary heading */
  title?: string;
  /** Custom container classes */
  className?: string;
}

/**
 * JBCValidationSummary
 * A reusable pattern for summarizing form errors at the top of deep forms.
 * Features:
 * - Direct mapping to JBC warning and error tokens.
 * - Interactive error links that scroll/focus the offending input.
 * - ARIA-compliant alert behavior for assistive tech.
 */
export const JBCValidationSummary: React.FC<JBCValidationSummaryProps> = ({
  errors,
  title = "Submission failed. Please fix the following:",
  className = ""
}) => {
  if (errors.length === 0) return null;

  const handleScrollToField = (fieldId: string) => {
    const element = document.getElementById(fieldId);
    if (element) {
      // Ensure smooth scroll with standard block alignment
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Apply focus after a slight delay to ensure scroll transition doesn't interfere
      setTimeout(() => element.focus({ preventScroll: true }), 300);
    }
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`p-[var(--jbc-space-4)] rounded-[var(--jbc-radius-md)] bg-[var(--jbc-surface-warning)] border border-[var(--jbc-border-warning)] animate-in fade-in slide-in-from-top-4 duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4 text-[var(--jbc-error)] font-bold text-sm">
        <JBCIcon name="ri-error-warning-fill" size={20} />
        <h3 className="uppercase tracking-wider">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {errors.map((error, idx) => (
          <li key={`${error.fieldId}-${idx}`}>
            <button
              type="button"
              onClick={() => handleScrollToField(error.fieldId)}
              className="flex items-center gap-3 group text-xs text-start w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-jbc-cyan rounded"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--jbc-error)] shrink-0" />
              <span className="opacity-70 group-hover:opacity-100 group-hover:text-[var(--jbc-error)] transition-all underline decoration-dotted underline-offset-4 font-bold uppercase tracking-wider">
                {error.message}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};