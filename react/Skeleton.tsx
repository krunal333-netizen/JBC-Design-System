import React from 'react';

export interface JBCSkeletonProps {
  variant?: 'text' | 'rect' | 'circle' | 'card' | 'table';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const JBCSkeleton: React.FC<JBCSkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = ''
}) => {
  const baseStyles = "bg-black/5 dark:bg-white/5 relative overflow-hidden animate-pulse before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 dark:before:via-white/5 before:to-transparent";

  const variantStyles = {
    text: "h-3 w-full rounded-md",
    rect: "rounded-xl",
    circle: "rounded-full",
    card: "h-32 rounded-2xl",
    table: "h-12 w-full rounded-xl"
  };

  const style: React.CSSProperties = {
    width: width,
    height: height
  };

  if (variant === 'table') {
    return (
      <div className="space-y-4 w-full">
        {[1, 2, 3].map(i => (
          <div key={i} className={`${baseStyles} ${variantStyles.table}`} />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`p-6 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 space-y-4 ${className}`}>
        <div className="flex gap-4 items-center">
          <div className={`${baseStyles} w-10 h-10 rounded-xl`} />
          <div className="space-y-2 flex-1">
            <div className={`${baseStyles} h-3 w-1/2 rounded-md`} />
            <div className={`${baseStyles} h-2 w-1/4 rounded-md`} />
          </div>
        </div>
        <div className={`${baseStyles} h-16 w-full rounded-xl`} />
      </div>
    );
  }

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} 
      style={style} 
    />
  );
};