import React, { forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { PolymorphicComponentProp } from './types';

// Breakpoint types
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;

// Grid component props
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  gap?: Spacing;
  responsive?: Partial<Record<Breakpoint, GridColumns>>;
}

// Utility to generate grid classes
export function generateGridClasses(props: GridProps): string {
  const classes: string[] = ['grid'];

  // Base columns
  if (props.columns) {
    classes.push(`grid-cols-${props.columns}`);
  }

  // Gap
  if (props.gap !== undefined) {
    classes.push(`gap-${props.gap}`);
  }

  // Responsive columns
  if (props.responsive) {
    Object.entries(props.responsive).forEach(([bp, cols]) => {
      classes.push(`${bp}:grid-cols-${cols}`);
    });
  }

  return classes.join(' ');
}

// Flexible Grid component
export const Grid = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', GridProps>>(
  ({ as, children, className, columns, gap, responsive, ...props }, ref) => {
    const Component = as || 'div';
    
    const gridClasses = generateGridClasses({ columns, gap, responsive });
    
    return (
      <Component 
        ref={ref}
        className={twMerge(gridClasses, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = 'Grid';

// Flex component
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch';
  wrap?: boolean;
}

export const Flex = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', FlexProps>>(
  ({ 
    as, 
    children, 
    className, 
    direction = 'row', 
    justify, 
    align, 
    wrap,
    ...props 
  }, ref) => {
    const classes = [
      'flex',
      direction === 'row' ? 'flex-row' : 
      direction === 'col' ? 'flex-col' : 
      direction === 'row-reverse' ? 'flex-row-reverse' : 
      direction === 'col-reverse' ? 'flex-col-reverse' : '',
      
      justify ? `justify-${justify}` : '',
      align ? `items-${align}` : '',
      wrap ? 'flex-wrap' : 'flex-nowrap'
    ].filter(Boolean).join(' ');

    const Component = as || 'div';

    return (
      <Component
        ref={ref}
        className={twMerge(classes, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';

// Spacing component for margins and paddings
export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
}

export const Spacing = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', SpacingProps>>(
  ({ 
    as, 
    children, 
    className, 
    m, mx, my, mt, mr, mb, ml,
    p, px, py, pt, pr, pb, pl,
    ...props 
  }, ref) => {
    const classes = [
      m !== undefined && `m-${m}`,
      mx !== undefined && `mx-${mx}`,
      my !== undefined && `my-${my}`,
      mt !== undefined && `mt-${mt}`,
      mr !== undefined && `mr-${mr}`,
      mb !== undefined && `mb-${mb}`,
      ml !== undefined && `ml-${ml}`,
      p !== undefined && `p-${p}`,
      px !== undefined && `px-${px}`,
      py !== undefined && `py-${py}`,
      pt !== undefined && `pt-${pt}`,
      pr !== undefined && `pr-${pr}`,
      pb !== undefined && `pb-${pb}`,
      pl !== undefined && `pl-${pl}`
    ].filter(Boolean).join(' ');

    const Component = as || 'div';

    return (
      <Component
        ref={ref}
        className={twMerge(classes, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Spacing.displayName = 'Spacing';

// Export all components and types
export * from './types';
