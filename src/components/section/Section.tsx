import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface SectionProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Section = ({
  fullWidth,
  fullHeight,
  children,
  className,
}: SectionProps): React.ReactElement => {
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
