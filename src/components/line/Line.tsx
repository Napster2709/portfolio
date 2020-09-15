import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface LineProps {
  className?: string;
}

const Line = ({className}: LineProps) => {
  return (
    <div className={cn(className, styles.line)}/>
  )
}

export {Line}
