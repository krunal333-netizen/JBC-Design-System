import React from 'react';
import { JBCIcon } from './Icon';

export interface Step {
  id: string | number;
  label: string;
  description?: string;
}

export interface JBCStepperProps {
  steps: Step[];
  currentStep: number; // 0-indexed
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const JBCStepper: React.FC<JBCStepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  className = ''
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`
      flex ${isHorizontal ? 'flex-row items-center w-full' : 'flex-col gap-0'} 
      ${className}
    `}>
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isActive = idx === currentStep;
        const isDisabled = idx > currentStep;
        const isLast = idx === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <div className={`
              flex ${isHorizontal ? 'flex-col items-center flex-1' : 'flex-row items-start gap-4'}
              group
            `}>
              {/* Step Circle */}
              <div className="relative">
                <div className={`
                  w-8 h-8 rounded-xl flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted ? 'bg-jbc-success border-jbc-success text-white' : 
                    isActive ? 'bg-jbc-cyan/10 border-jbc-cyan text-jbc-cyan shadow-[0_0_15px_rgba(3,253,218,0.2)]' : 
                    'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-jbc-icon-neutral'}
                `}>
                  {isCompleted ? (
                    <JBCIcon name="ri-check-line" size={16} />
                  ) : (
                    <span className="text-xs font-bold">{idx + 1}</span>
                  )}
                </div>
                
                {/* Vertical Line for Vertical Stepper */}
                {!isHorizontal && !isLast && (
                  <div className={`
                    absolute left-1/2 -translate-x-1/2 top-10 w-0.5 h-12
                    ${isCompleted ? 'bg-jbc-success' : 'bg-black/10 dark:bg-white/10'}
                  `} />
                )}
              </div>

              {/* Step Content */}
              <div className={`
                ${isHorizontal ? 'text-center mt-3' : 'pt-1 pb-10'}
              `}>
                <div className={`
                  text-xs font-bold uppercase tracking-widest transition-colors
                  ${isActive ? 'text-black dark:text-white' : 'text-jbc-icon-neutral'}
                `}>
                  {step.label}
                </div>
                {step.description && (
                  <div className="text-[10px] opacity-40 mt-1 max-w-[120px] mx-auto leading-tight">
                    {step.description}
                  </div>
                )}
              </div>
            </div>

            {/* Horizontal Line for Horizontal Stepper */}
            {isHorizontal && !isLast && (
              <div className={`
                h-0.5 flex-1 mx-4 rounded-full
                ${isCompleted ? 'bg-jbc-success' : 'bg-black/10 dark:bg-white/10'}
              `} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};