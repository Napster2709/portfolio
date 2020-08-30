import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface ListProps {
  children?: React.ReactNode;
  className?: string;
}

interface ListItemProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const List = ({ children, className }: ListProps) => {
  return <ul className={cn(styles.list, className)}>{children}</ul>;
};

List.Item = ({ children, className, onClick }: ListItemProps) => {
  return (
    <li
      onClick={onClick}
      className={cn(styles.listItem, className, {
        [styles.callForAction]: typeof onClick !== 'undefined',
      })}
    >
      {children}
    </li>
  );
};

List.displayName = 'List';
(List.Item as any).displayName = 'ListItem';

export { List };
