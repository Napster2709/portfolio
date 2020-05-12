import React from 'react';
import styles from './styles.scss';
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
      className={classNames(styles.container, className, {
        [styles.fluid]: fluid,
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
        className={classNames(styles.column, className, {
          [styles[`_${cols}`]]: cols,
          [styles.centered]: centered,
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
