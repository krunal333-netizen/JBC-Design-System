import React from 'react';
import { EXTERNAL_ICON_STROKE_MAP, DEFAULT_ICON_STROKE } from '../constants';

export type IconSource = 'jbc' | 'lucide' | 'tabler' | 'phosphor';

export interface JBCIconProps {
  source?: IconSource;
  name: string;
  size?: 16 | 20 | 24 | 32 | 48;
  strokeWidth?: number;
  variant?: 'outline' | 'filled' | 'gradient';
  color?: string;
  className?: string;
  animate?: boolean | 'fade' | 'scale' | 'rotate';
}

/**
 * JBC Standardized Icon Component
 * Features automated stroke normalization for external sources (Lucide, Tabler, Phosphor)
 * to maintain visual parity with JBC Brand icons without manual developer intervention.
 */
export const JBCIcon: React.FC<JBCIconProps> = ({
  source = 'jbc',
  name,
  size = 24,
  strokeWidth: manualStroke,
  variant = 'outline',
  color = 'currentColor',
  className = '',
  animate = false
}) => {
  const isJBC = source === 'jbc';
  const isFilled = variant === 'filled';

  // AUTOMATION LOGIC:
  // 1. If JBC: Use CSS variable for global brand stroke control.
  // 2. If External: Automatically calculate stroke based on size (unless manual override is provided).
  // 3. Exception: Do not apply stroke normalization to filled icons.
  let sValue: string | number;
  
  if (manualStroke !== undefined) {
    sValue = manualStroke;
  } else if (isJBC) {
    sValue = 'var(--jbc-icon-stroke, 1.5)';
  } else {
    // External Normalization Mapping: 16/20 -> 1.25, 24 -> 1.5, 32/48 -> 1.75
    sValue = EXTERNAL_ICON_STROKE_MAP[size] || DEFAULT_ICON_STROKE;
  }

  const baseClass = 'jbc-icon';
  const sizeClass = `jbc-icon-${size}`;
  
  let animationClass = '';
  if (animate) {
    if (animate === true || animate === 'scale') {
      animationClass = 'jbc-icon-scale';
    } else if (animate === 'fade') {
      animationClass = 'jbc-icon-fade';
    } else if (animate === 'rotate') {
      animationClass = 'jbc-icon-rotate';
    }
  }

  const isGradient = variant === 'gradient';
  const gradientClass = isGradient ? 'bg-gradient-to-br from-jbc-cyan to-jbc-gold bg-clip-text text-transparent' : '';

  if (isJBC) {
    const isRemix = name.startsWith('ri-') || name.split('-').length > 1;
    const iconBase = isRemix ? (name.startsWith('ri-') ? name : `ri-${name}`) : name;
    const iconName = isFilled ? iconBase.replace('-line', '-fill') : iconBase;
    
    const styles: React.CSSProperties = {
      color: isGradient ? undefined : color,
      strokeWidth: typeof sValue === 'number' ? `${sValue}px` : sValue,
      WebkitTextStrokeWidth: isFilled ? '0' : (typeof sValue === 'number' 
        ? `${sValue - 1.25}px` 
        : `calc((${sValue} - 1.25) * 1px)`),
      WebkitTextStrokeColor: isGradient ? 'transparent' : 'currentColor',
      paintOrder: 'markers fill stroke'
    };

    return (
      <i 
        className={`${baseClass} ${iconName} ${sizeClass} ${animationClass} ${gradientClass} ${className}`}
        style={styles}
        aria-hidden="true"
      />
    );
  }

  // External Icon Wrapper (Normalized)
  const externalStyles: React.CSSProperties = {
    color: isGradient ? undefined : color,
    width: `${size}px`,
    height: `${size}px`,
    strokeWidth: isFilled ? '0' : (typeof sValue === 'number' ? `${sValue}px` : sValue),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: isFilled ? 'currentColor' : 'none'
  };

  return (
    <div 
      className={`${baseClass} ${sizeClass} ${animationClass} ${gradientClass} ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 24 24" 
        style={externalStyles}
        stroke={isFilled ? 'none' : 'currentColor'}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    </div>
  );
};
