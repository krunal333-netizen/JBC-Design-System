
import React from 'react';

export type BadgeVariant = 'success' | 'error' | 'warning' | 'neutral' | 'primary';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  isDot?: boolean;
  // Fix: Added style prop for custom coloring
  style?: React.CSSProperties;
}

export const JBCBadge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'neutral', 
  className = '', 
  isDot = false,
  // Fix: Added style destructuring
  style
}) => {
  const variants = {
    primary: "bg-jbc-cyan/10 text-jbc-cyan border-jbc-cyan/20",
    success: "bg-jbc-success/10 text-jbc-success border-jbc-success/20",
    error: "bg-jbc-error/10 text-jbc-error border-jbc-error/20",
    warning: "bg-jbc-gold/10 text-jbc-gold border-jbc-gold/20",
    neutral: "bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 border-black/10 dark:border-white/10"
  };

  return (
    <div 
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider
        ${variants[variant]} ${className}
      `}
      // Fix: Apply style prop
      style={style}
    >
      {isDot && <span className={`w-1.5 h-1.5 rounded-full ${variant === 'primary' ? 'bg-jbc-cyan' : variant === 'success' ? 'bg-jbc-success' : variant === 'error' ? 'bg-jbc-error' : variant === 'warning' ? 'bg-jbc-gold' : 'bg-current'}`} />}
      {children}
    </div>
  );
};
