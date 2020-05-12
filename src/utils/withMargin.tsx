import React from 'react';

interface WithMarginProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
}

export const withMargin = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
): React.ComponentType<T & WithMarginProps> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithMargin = (props: T & WithMarginProps) => {
    let s = {};
    const { marginTop, marginBottom, marginLeft, marginRight, margin } = props;

    if (marginTop) {
      s = { ...s, marginTop };
    }
    if (marginBottom) {
      s = { ...s, marginBottom };
    }
    if (marginLeft) {
      s = { ...s, marginLeft };
    }
    if (marginRight) {
      s = { ...s, marginRight };
    }
    if (margin) {
      s = { ...s, margin };
    }

    return <WrappedComponent {...(props as T)} style={s} />;
  };

  ComponentWithMargin.displayName = `withMargin(${displayName})`;

  return ComponentWithMargin;
};
