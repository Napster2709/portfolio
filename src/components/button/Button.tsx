import React from 'react';
import s from './styles.scss';
import cn from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className={cn(s.button, props.className)} {...props}>
      {props.children}
    </button>
  );
};

export { Button };
