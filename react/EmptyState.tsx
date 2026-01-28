import React from 'react';
import { JBCIcon } from './Icon';
import { JBCButton } from './Button';

export interface JBCEmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'normal' | 'error';
  className?: string;
}

export const JBCEmptyState: React.FC<JBCEmptyStateProps> = ({
  icon = 'ri-inbox-line',
  title,
  description,
  action,
  variant = 'normal',
  className = ''
}) => {
  return (
    <div className={`
      flex flex-col items-center justify-center text-center p-12 rounded-3xl
      bg-black/5 dark:bg-white/5 border-2 border-dashed border-black/10 dark:border-white/10
      ${className}
    `}>
      <div className={`
        w-16 h-16 rounded-2xl flex items-center justify-center mb-6
        ${variant === 'error' ? 'bg-jbc-error/10 text-jbc-error' : 'bg-jbc-cyan/10 text-jbc-cyan'}
      `}>
        <JBCIcon name={icon} size={32} />
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-sm opacity-50 max-w-sm mb-8 leading-relaxed">
        {description}
      </p>
      
      {action && (
        <JBCButton onClick={action.onClick} variant={variant === 'error' ? 'destructive' : 'primary'}>
          {action.label}
        </JBCButton>
      )}
    </div>
  );
};