import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface HugeProps {
  children: React.ReactNode;
  className?: string;
}

const Huge = ({ children, className }: HugeProps) => {
  return <div className={cn(className, styles.hugeFont)}>{children}</div>;
};

export { Huge };
