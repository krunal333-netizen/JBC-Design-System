import React from 'react';

export type DividerVariant = 'subtle' | 'strong' | 'inset';
export type DividerOrientation = 'horizontal' | 'vertical';

export interface JBCDividerProps {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
  className?: string;
}

/**
 * JBCDivider
 * Standardized visual separation between content sections.
 * Optimized for both high-density data views and spacious marketing layouts.
 */
export const JBCDivider: React.FC<JBCDividerProps> = ({
  variant = 'subtle',
  orientation = 'horizontal',
  className = ''
}) => {
  const isHorizontal = orientation === 'horizontal';
  
  const variantClasses = {
    subtle: isHorizontal ? 'h-px bg-black/10 dark:bg-white/10' : 'w-px bg-black/10 dark:bg-white/10',
    strong: isHorizontal ? 'h-0.5 bg-black/20 dark:bg-white/20' : 'w-0.5 bg-black/20 dark:bg-white/20',
    inset: isHorizontal 
      ? 'h-px bg-black/10 dark:bg-white/10 mx-4' 
      : 'w-px bg-black/10 dark:bg-white/10 my-4'
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`
        shrink-0 self-stretch transition-colors
        ${variantClasses[variant]}
        ${className}
      `}
    />
  );
};
