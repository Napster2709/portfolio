import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { Huge, Logo } from 'components';
import cn from 'classnames';
import { writeText } from 'utils';

const Soon = () => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    writeText({
      text: 'Soon',
      setNewText: (newText: string) => setTitle(newText),
      delay: 200,
    });
  }, []);

  return (
    <div
      className={cn(
        styles.fullwidth,
        styles.centered,
        styles.textAlignCenter,
        styles.content,
      )}
    >
      <Logo className={cn(styles.logo)} />
      <div className={cn(styles.line, styles.slideDown)} />
      <Huge className={cn(styles.title, styles.slideUp)}>{title}</Huge>
    </div>
  );
};

export { Soon };
