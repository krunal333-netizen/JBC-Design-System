
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost' | 'destructive' | 'accent';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const JBCButton: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  isLoading = false, 
  size = 'md',
  children, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "min-h-[44px] rounded-xl font-bold transition-all active:scale-[0.96] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-jbc-dark";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const variants = {
    primary: "bg-jbc-cyan text-black hover:shadow-[0_0_20px_rgba(3,253,218,0.4)] focus-visible:ring-jbc-cyan",
    secondary: "bg-jbc-gold text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] focus-visible:ring-jbc-gold",
    accent: "bg-jbc-gold text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] focus-visible:ring-jbc-gold",
    outlined: "bg-transparent border-2 border-jbc-cyan/40 text-jbc-cyan hover:bg-jbc-cyan/10 hover:border-jbc-cyan focus-visible:ring-jbc-cyan",
    ghost: "bg-transparent text-jbc-cyan hover:bg-jbc-cyan/10 focus-visible:ring-jbc-cyan",
    destructive: "bg-[#DA3633] text-white hover:bg-[#B91C1C] hover:shadow-jbc-destructive focus-visible:ring-[#DA3633]"
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      data-is-loading={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : children}
    </button>
  );
};

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  isCircular?: boolean;
  icon: string;
  // Fix: Added size to IconButtonProps
  size?: 'sm' | 'md' | 'lg';
}

export const JBCIconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  isCircular = false,
  icon,
  // Fix: Added size destructuring
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <JBCButton 
      variant={variant} 
      isLoading={isLoading} 
      // Fix: Pass size to JBCButton
      size={size}
      className={`p-3 min-h-0 ${isCircular ? 'rounded-full' : 'rounded-xl'} ${className}`}
      {...props}
    >
      {!isLoading && <i className={`${icon} text-lg`}></i>}
    </JBCButton>
  );
};

/**
 * Floating Action Button (FAB)
 * Mobile-primary elevated action button.
 */
export const JBCFAB: React.FC<IconButtonProps> = ({
  variant = 'primary',
  icon,
  className = '',
  ...props
}) => {
  return (
    <JBCIconButton
      variant={variant}
      icon={icon}
      isCircular={true}
      className={`shadow-jbc-high w-14 h-14 ${className}`}
      {...props}
    />
  );
};

/**
 * Split Button
 * Primary action + dropdown trigger.
 */
export const JBCSplitButton: React.FC<{
  label: string;
  onClick: () => void;
  onDropdownClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
}> = ({ label, onClick, onDropdownClick, variant = 'primary', disabled, className = '' }) => {
  return (
    <div className={`inline-flex ${className}`}>
      <JBCButton 
        variant={variant} 
        disabled={disabled}
        onClick={onClick}
        className="rounded-r-none border-r border-black/10 dark:border-white/10"
      >
        {label}
      </JBCButton>
      <JBCButton 
        variant={variant} 
        disabled={disabled}
        onClick={onDropdownClick}
        className="rounded-l-none px-3 min-w-0"
      >
        <i className="ri-arrow-down-s-line text-lg"></i>
      </JBCButton>
    </div>
  );
};

export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const JBCButtonGroup: React.FC<ButtonGroupProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 ${className}`}>
      {children}
    </div>
  );
};

export interface SegmentedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const JBCSegmentedButton: React.FC<SegmentedButtonProps> = ({ isActive, children, className = '', ...props }) => {
  return (
    <button
      className={`flex-1 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
        isActive 
          ? 'bg-jbc-cyan text-black shadow-sm' 
          : 'text-jbc-icon-neutral hover:text-jbc-icon-primary'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
