import React from 'react';

interface WithMarginProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
}

export const withMargin = <T extends unknown>(
  WrappedComponent: React.ComponentType<T>,
): React.ComponentType<T & WithMarginProps> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithMargin = (props: T & WithMarginProps) => {
    let s = {};
    const { marginTop, marginBottom, marginLeft, marginRight, margin } = props;

    if (marginTop) {
      s = { ...s, 'margin-top': marginTop };
    }
    if (marginBottom) {
      s = { ...s, 'margin-bottom': marginBottom };
    }
    if (marginLeft) {
      s = { ...s, 'margin-left': marginLeft };
    }
    if (marginRight) {
      s = { ...s, 'margin-right': marginRight };
    }
    if (margin) {
      s = { ...s, margin: margin };
    }

    return <WrappedComponent {...(props as T)} style={s} />;
  };

  ComponentWithMargin.displayName = `withTheme(${displayName})`;

  return ComponentWithMargin;
};
