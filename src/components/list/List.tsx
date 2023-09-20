import React from 'react';
import s from './styles.scss';
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

const List = ({ children, className }: ListProps): React.ReactElement => {
  return <ul className={cn(className, s.list)}>{children}</ul>;
};

const Item = ({
  children,
  className,
  onClick,
}: ListItemProps): React.ReactElement => {
  return (
    <li
      onClick={onClick}
      className={cn(s.listItem, className, {
        [s.callForAction]: typeof onClick !== 'undefined',
      })}
    >
      {children}
    </li>
  );
};

List.Item = Item;

List.displayName = 'List';
(List.Item as React.FC<ListItemProps>).displayName = 'ListItem';

export { List };
