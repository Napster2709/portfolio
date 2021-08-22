import classNames from 'classnames';
import React from 'react';
import styles from './styles.scss';

interface PrivatTextProps {
  children?: string;
  type?: 'land' | 'city' | 'street' | 'email' | 'name';
}

const PrivatText = ({
  children,
  type,
}: PrivatTextProps): React.ReactElement => {
  return (
    <div
      className={classNames(styles.text, { [styles[type]]: type })}
      data-text={children}
    ></div>
  );
};

export { PrivatText };
