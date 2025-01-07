import React, { ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

// Polymorphic component type
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = {}
> = React.PropsWithChildren<
  Props & {
    as?: C;
  }
> & ComponentPropsWithoutRef<C>;

// Polymorphic ref type
export type PolymorphicRef<C extends ElementType> = 
  ComponentPropsWithRef<C>['ref'];

// Polymorphic component with ref
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>;
};
