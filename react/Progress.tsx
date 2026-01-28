import React from 'react';

export interface ProgressProps {
  value: number; // 0 to 100
  max?: number;
  variant?: 'primary' | 'success' | 'error' | 'warning';
  className?: string;
  showLabel?: boolean;
}

export const JBCProgress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  variant = 'primary', 
  className = '', 
  showLabel = false 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const colors = {
    primary: "bg-jbc-cyan",
    success: "bg-jbc-success",
    error: "bg-jbc-error",
    warning: "bg-jbc-gold"
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5 text-[10px] font-bold uppercase tracking-widest opacity-60">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
        <div 
          className={`h-full transition-all duration-500 ease-out ${colors[variant]}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};