import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className={cn(styles.button, props.className)} {...props}>
      {props.children}
    </button>
  );
};

export { Button };
