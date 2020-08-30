import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { CommandLineInput, CommandList, Command } from 'components';
import { writeText } from 'utils';
import cn from 'classnames';

const Home = () => {
  const [title, setTitle] = useState<string>('');

  const someActions: Command[] = [
    {
      display: 'start',
      action: () => undefined,
    },
  ];

  useEffect(() => {
    writeText({
      text: 'Type or click start!',
      setNewText: (newText: string) => setTitle(newText),
      delay: 50,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={cn(styles.fadeIn, styles.centered)}>{title}</h1>
        <div className={cn(styles.list, styles.fadeIn)}>
          <CommandList commands={someActions} />
        </div>
        <div className={styles.fadeIn}>
          <CommandLineInput
            initialFocus
            submitEvent={(e) => console.log(e)}
            value=""
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
