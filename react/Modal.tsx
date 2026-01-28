import React, { useEffect } from 'react';
import { JBCIconButton } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const JBCModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-jbc-modal flex items-center justify-center p-4 sm:p-6 no-print">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        className={`
          relative w-full ${sizeClasses[size]} bg-jbc-light dark:bg-jbc-surface 
          rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 
          animate-in zoom-in-95 slide-in-from-bottom-10 duration-300
          flex flex-col max-h-[90vh] overflow-hidden
          sm:max-h-[80vh]
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
          {title ? (
            <h3 className="text-lg font-bold tracking-tight text-black dark:text-white uppercase tracking-wider">{title}</h3>
          ) : <div />}
          <JBCIconButton 
            icon="ri-close-line" 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="!-mr-2"
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="p-6 border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 flex flex-col sm:flex-row justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
