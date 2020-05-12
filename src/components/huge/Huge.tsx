import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface HugeProps {
  children: React.ReactNode;
  className?: string;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Huge: React.FC<HugeProps> = ({
  children,
  className,
  onAnimationEnd,
  onClick,
}: HugeProps) => {
  return (
    <div
      className={cn(className, styles.hugeFont, {
        [styles.callForAction]: onClick !== undefined,
      })}
      onAnimationEnd={onAnimationEnd}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Huge };
