import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button {...props} className={cn(styles.button, props.className)}>
      {props.children}
    </button>
  );
};

export { Button };
