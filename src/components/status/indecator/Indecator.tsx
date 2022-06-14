import React from 'react';
import s from './styles.scss';
import cn from 'classnames';

interface IndecatorProps {
  status: 'Employed' | 'Looking' | 'Done';
}

const Indecator = ({ status }: IndecatorProps) => {
  return (
    <div
      className={cn(s.indecator, {
        [s[status]]: status,
      })}
    />
  );
};

export { Indecator };
