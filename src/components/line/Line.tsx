import React from 'react';
import s from './styles.scss';
import cn from 'classnames';

interface LineProps {
  className?: string;
  vertical?: boolean;
  svg?: boolean;
  align?: 'center' | 'left' | 'right';
}

const Line: React.FC<LineProps> = ({
  className,
  align = 'center',
  vertical,
  svg,
}) => {
  return (
    <div
      className={cn(className, s.container, {
        [s[align as string]]: align,
        [s.vertical]: vertical,
      })}
    >
      {!svg && <div className={s.line} />}
      {svg && (
        <svg
          className={s.svgLine}
          // xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 258"
          fill="none"
        >
          <path d=" M 43.5 6 Q 16.5 36.667 16.5 72.667 C 16.5 108.667 43.5 153.094 43.5 192 Q 43.5 224.667 24.5 252" />
        </svg>
      )}
    </div>
  );
};

export { Line };
