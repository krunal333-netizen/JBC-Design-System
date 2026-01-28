import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  elevation?: 'flat' | 'low' | 'mid' | 'high';
  /**
   * Opt-in to tinted shadows in Light Mode. 
   * In Dark Mode, this behaves as a standard shadow.
   */
  useTintedShadow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const JBCCard: React.FC<CardProps> = ({ 
  children, 
  elevation = 'low', 
  useTintedShadow = false,
  className = '', 
  onClick 
}) => {
  const elevations = {
    flat: "border border-black/10 dark:border-white/10 shadow-none",
    low: useTintedShadow 
      ? "shadow-jbc-low light:shadow-jbc-light-low dark:shadow-none border border-black/5 dark:border-white/5" 
      : "shadow-jbc-low dark:shadow-none border border-black/5 dark:border-white/5",
    mid: useTintedShadow 
      ? "shadow-jbc-mid light:shadow-jbc-light-mid dark:shadow-none border border-black/5 dark:border-white/5" 
      : "shadow-jbc-mid dark:shadow-none border border-black/5 dark:border-white/5",
    high: useTintedShadow 
      ? "shadow-jbc-high light:shadow-jbc-light-high dark:shadow-none border border-black/5 dark:border-white/5" 
      : "shadow-jbc-high dark:shadow-none border border-black/5 dark:border-white/5"
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-jbc-lightSurface dark:bg-jbc-surface rounded-2xl p-6 transition-all
        ${elevations[elevation]}
        ${onClick ? 'cursor-pointer hover:scale-[1.01] active:scale-[0.99]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};