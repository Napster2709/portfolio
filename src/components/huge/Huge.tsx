import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface HugeProps {
  children: React.ReactNode;
  className?: string;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

const Huge = ({ children, className, onAnimationEnd }: HugeProps) => {
  return (
    <div
      className={cn(className, styles.hugeFont)}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

export { Huge };
