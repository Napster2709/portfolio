import React from 'react';
import s from './styles.scss';
import cn from 'classnames';
import { withMargin } from 'utils';

interface SectionProps {
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: unknown;
}

const Section = withMargin<SectionProps>(
  ({
    fullWidth,
    children,
    className,
    style,
  }: SectionProps): React.ReactElement => {
    return (
      <div
        style={style}
        className={cn(s.section, className, {
          [s.fullWidth]: fullWidth,
        })}
      >
        {children}
      </div>
    );
  },
);

Section.displayName = 'Section';

export { Section };
