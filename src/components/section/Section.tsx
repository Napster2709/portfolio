import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface SectionProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  fullWidth,
  fullHeight,
  children,
  className,
}) => {
  return (
    <div
      className={cn(styles.section, className, {
        [styles.fullWidth]: fullWidth,
        [styles.fullHeight]: fullHeight,
      })}
    >
      {children}
    </div>
  );
};

export { Section };
