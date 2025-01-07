import { forwardRef, HTMLAttributes, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

// Breakpoint types
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
export type SpacingType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;

// Polymorphic component type
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = object
> = React.PropsWithChildren<
  Props & {
    as?: C;
  }
> & React.ComponentPropsWithoutRef<C>;

// Polymorphic ref type
export type PolymorphicRef<C extends ElementType> = 
  React.ComponentPropsWithRef<C>['ref'];

// Polymorphic component with ref
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = object
> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>;
};

// Grid component props
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  gap?: SpacingType;
  responsive?: Partial<Record<Breakpoint, GridColumns>>;
}

// Flex component props
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch';
  gap?: SpacingType;
}

// Spacing component props
export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  m?: SpacingType;
  mx?: SpacingType;
  my?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  p?: SpacingType;
  px?: SpacingType;
  py?: SpacingType;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
}

// Grid component
export const Grid = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', GridProps>>(
  ({ 
    columns = 12, 
    gap = 4, 
    responsive,
    children, 
    className, 
    as: Component = 'div', 
    ...props 
  }, ref) => {
    const responsiveClasses = responsive 
      ? Object.entries(responsive).map(([breakpoint, cols]) => 
          `${breakpoint}:grid-cols-${cols}`
        ).join(' ')
      : '';

    const gridClasses = twMerge(
      `grid grid-cols-${columns} gap-${gap}`,
      responsiveClasses,
      className
    );

    return (
      <Component 
        ref={ref} 
        className={gridClasses} 
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = 'Grid';

// Flex component
export const Flex = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', FlexProps>>(
  ({ 
    direction = 'row', 
    justify = 'start', 
    align = 'stretch',
    gap = 0,
    children, 
    className, 
    as: Component = 'div', 
    ...props 
  }, ref) => {
    const flexClasses = twMerge(
      `flex flex-${direction} justify-${justify} items-${align} gap-${gap}`,
      className
    );

    return (
      <Component 
        ref={ref} 
        className={flexClasses} 
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';

// Spacing component
export const Spacing = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', SpacingProps>>(
  ({ 
    m, mx, my, mt, mr, mb, ml, 
    p, px, py, pt, pr, pb, pl, 
    children, 
    className, 
    as: Component = 'div', 
    ...props 
  }, ref) => {
    const spacingClasses = twMerge(
      [
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
      ].filter(Boolean).join(' '),
      className
    );

    return (
      <Component 
        ref={ref} 
        className={spacingClasses} 
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Spacing.displayName = 'Spacing';
