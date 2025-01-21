import { forwardRef, HTMLAttributes, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { 
  Breakpoint, 
  ColumnCount, 
  SpacingValue, 
  layoutKitConfig 
} from '../config';

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
  columns?: ColumnCount;
  gap?: SpacingValue;
  responsive?: Partial<Record<Breakpoint, ColumnCount>>;
}

// Flex component props
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch';
  gap?: SpacingValue;
}

// Spacing component props
export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  m?: SpacingValue;
  mx?: SpacingValue;
  my?: SpacingValue;
  mt?: SpacingValue;
  mr?: SpacingValue;
  mb?: SpacingValue;
  ml?: SpacingValue;
  p?: SpacingValue;
  px?: SpacingValue;
  py?: SpacingValue;
  pt?: SpacingValue;
  pr?: SpacingValue;
  pb?: SpacingValue;
  pl?: SpacingValue;
}

// Grid component
export const Grid = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', GridProps>>(
  ({ 
    columns = 1,
    gap = 4, 
    responsive,
    children, 
    className, 
    as: Component = 'div', 
    ...props 
  }, ref) => {
    const gridConfig = layoutKitConfig.getGridConfig();

    const validateColumns = (cols?: ColumnCount) => 
      cols && gridConfig.columnCounts.includes(cols) ? cols : gridConfig.columnCounts[0];

    // Order breakpoints from largest to smallest for max-width media queries
    const breakpointOrder: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'default'];

    const responsiveClasses = responsive 
      ? Object.entries(responsive)
          .sort(([a], [b]) => {
            return breakpointOrder.indexOf(a as Breakpoint) - breakpointOrder.indexOf(b as Breakpoint);
          })
          .map(([breakpoint, cols]) => {
            if (breakpoint === 'default') {
              return `grid-cols-${validateColumns(cols)}`;
            }
            return `${breakpoint}\:grid-cols-${validateColumns(cols)}`;
          })
          .join(' ')
      : '';

    const baseColumns = responsive?.default 
      ? validateColumns(responsive.default)
      : validateColumns(columns);

    const gridClasses = twMerge(
      `grid grid-cols-${baseColumns} gap-${gap}`,
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
