import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { withMargin } from 'utils';

interface SectionProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: unknown;
}

export const Section = withMargin<SectionProps>(
  ({
    fullWidth,
    fullHeight,
    children,
    className,
    style,
  }: SectionProps): React.ReactElement => {
    return (
      <div
        style={style}
        className={cn(styles.section, className, {
          [styles.fullWidth]: fullWidth,
          [styles.fullHeight]: fullHeight,
        })}
      >
        {children}
      </div>
    );
  },
);
