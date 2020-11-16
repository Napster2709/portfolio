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

const Grid = ({ children, className, fluid }: IGrid): React.ReactElement => {
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

const Column = ({
  children,
  cols,
  className,
  centered,
}: IGridColumn): React.ReactElement => {
  return (
    <div
      className={classNames(styles.column, className, {
        [styles[`_${cols}`]]: cols,
        [styles.centered]: centered,
      })}
    >
      {children}
    </div>
  );
};

Grid.Column = Column;

Grid.displayName = 'Grid';
// (Grid.Row as any).displayName = 'Grid';
(Grid.Column as React.FC<IGridColumn>).displayName = 'Grid';

export { Grid };
