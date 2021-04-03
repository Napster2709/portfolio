import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface LineProps {
  className?: string;
  vertical?: boolean;
  align?: 'center' | 'left' | 'right';
}

const Line: React.FC<LineProps> = ({
  className,
  align = 'center',
  vertical,
}) => {
  return (
    <div
      className={cn(className, styles.container, {
        [styles[align as string]]: align,
        [styles.vertical]: vertical,
      })}
    >
      <div className={styles.line} />
    </div>
  );
};

export { Line };
