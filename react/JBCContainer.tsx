import React from 'react';

export interface JBCContainerProps {
  /**
   * Layout variant.
   * - boxed: 1200px max-width, centered.
   * - fluid: 100% width.
   * @default 'boxed'
   */
  variant?: 'boxed' | 'fluid';
  /**
   * Spacing density.
   * - comfortable: Default platform spacing baseline.
   * - compact: High-density spacing for data-heavy views.
   * @default 'comfortable'
   */
  density?: 'comfortable' | 'compact';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * JBCContainer
 * A layout wrapper that encapsulates the Design System's container and density rules.
 * Leverages high-performance CSS utilities defined in the global stylesheet.
 */
export const JBCContainer: React.FC<JBCContainerProps> = ({
  variant = 'boxed',
  density = 'comfortable',
  children,
  className = '',
  id
}) => {
  const containerClass = variant === 'boxed' ? 'jbc-container-boxed' : 'jbc-container-fluid';
  const densityClass = density === 'compact' ? 'density-compact' : '';

  return (
    <div 
      id={id}
      className={`${containerClass} ${densityClass} ${className}`}
    >
      {children}
    </div>
  );
};

/* 
Usage Examples:

1. Standard Boxed Layout:
<JBCContainer>
  <YourContent />
</JBCContainer>

2. Dashboard Fluid Layout with Compact Density:
<JBCContainer variant="fluid" density="compact">
  <JBCTable data={...} />
</JBCContainer>

3. Custom padding override:
<JBCContainer className="px-8">
  <Content />
</JBCContainer>
*/