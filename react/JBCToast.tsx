import React, { useEffect, useState } from 'react';
import { JBCIcon } from './Icon';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  onClose: (id: string) => void;
}

/**
 * JBCToast
 * Individual toast component following enterprise visual rules.
 * Features auto-dismiss, pause on hover, and accessibility support.
 */
export const JBCToast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'info',
  duration = 5000,
  onClose
}) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose, isPaused]);

  const variantStyles = {
    success: {
      border: 'border-jbc-cyan/30',
      icon: 'ri-checkbox-circle-fill',
      iconColor: 'text-jbc-cyan'
    },
    error: {
      border: 'border-jbc-error/30',
      icon: 'ri-error-warning-fill',
      iconColor: 'text-jbc-error'
    },
    warning: {
      border: 'border-jbc-gold/30',
      icon: 'ri-alert-fill',
      iconColor: 'text-jbc-gold'
    },
    info: {
      border: 'border-white/10 dark:border-white/10',
      icon: 'ri-information-fill',
      iconColor: 'text-jbc-icon-neutral'
    }
  };

  const currentStyle = variantStyles[variant];

  return (
    <div
      role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'}
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`
        w-full sm:w-[380px] p-4 rounded-xl border-2 shadow-jbc-mid transition-all duration-300
        dark:bg-jbc-surface bg-jbc-lightSurface flex gap-3 relative overflow-hidden
        animate-in slide-in-from-right-10 fade-in
        ${currentStyle.border}
      `}
    >
      <div className={`${currentStyle.iconColor} shrink-0 mt-0.5`}>
        <JBCIcon name={currentStyle.icon} size={20} />
      </div>

      <div className="flex-1 min-w-0 pr-6">
        <h4 className="text-sm font-bold text-black dark:text-white leading-tight">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-jbc-icon-neutral mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <button
        onClick={() => onClose(id)}
        className="absolute top-4 right-4 text-jbc-icon-neutral hover:text-jbc-cyan transition-colors"
        aria-label="Close"
      >
        <JBCIcon name="ri-close-line" size={16} />
      </button>

      {/* Progress Bar (Visual indicator of dismissal) */}
      {!isPaused && (
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-jbc-cyan opacity-20"
          style={{ 
            width: '100%', 
            animation: `jbc-toast-progress ${duration}ms linear forwards` 
          }}
        />
      )}
      
      <style>{`
        @keyframes jbc-toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};