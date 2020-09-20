import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

interface IGrid {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

interface IGridColumn {
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
  cols?: number;
}

const Grid = ({ children, className, fluid }: IGrid) => {
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

// Grid.Row = ({ children, classname }: any) => {
//   return <div className={classname}>{children}</div>;
// };

Grid.Column = ({ children, cols, className, centered }: IGridColumn) => {
  return (
    <div
      className={classNames(styles.column, className, {
        [styles[cols as any]]: cols,
        [styles.centered]: centered,
      })}
    >
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
// (Grid.Row as any).displayName = 'Grid';
(Grid.Column as any).displayName = 'Grid';

export { Grid };
