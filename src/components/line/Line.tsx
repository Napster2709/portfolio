import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface LineProps {
  className?: string;
  align?: 'center' | 'left' | 'right';
}

const Line = ({
  className,
  align = 'center',
}: LineProps): React.ReactElement => {
  return (
    <div
      className={cn(className, styles.container, {
        [styles[align as string]]: align,
      })}
    >
      <div className={styles.line} />
    </div>
  );
};

export { Line };
