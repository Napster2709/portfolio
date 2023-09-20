import React from 'react';
import s from './styles.scss';
import classNames from 'classnames';
import { withMargin } from 'utils';

interface GridProps {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

interface GridColumnProps {
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
  cols?: number;
  style?: unknown;
}

const Grid = ({
  children,
  className,
  fluid,
}: GridProps): React.ReactElement => {
  return (
    <div
      className={classNames(s.container, className, {
        [s.fluid]: fluid,
      })}
    >
      {children}
    </div>
  );
};

const Column = withMargin<GridColumnProps>(
  ({
    children,
    cols,
    className,
    centered,
    style,
  }: GridColumnProps): React.ReactElement => {
    return (
      <div
        style={style}
        className={classNames(s.column, className, {
          [s[`_${cols}`]]: cols,
          [s.centered]: centered,
        })}
      >
        {children}
      </div>
    );
  },
);

Grid.displayName = 'Grid';
Grid.Column = Column;

export { Grid };
