import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { Huge, Line, Logo } from 'components';
import cn from 'classnames';
import { writeText } from 'utils';

const Soon = (): React.ReactElement => {
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
        styles.main,
        styles.centered,
        styles.textAlignCenter,
        styles.content,
      )}
    >
      <Logo className={cn(styles.logo)} />
      <Line className={cn(styles.slideDown, styles.line)} />
      <Huge className={cn(styles.title, styles.slideUp)}>{title}</Huge>
    </div>
  );
};

export { Soon };
