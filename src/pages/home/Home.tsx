import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { CommandLineInput, CommandList, Command, Huge } from 'components';
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
      text: 'Type start and hit enter!',
      setNewText: (newText: string) => setTitle(newText),
      delay: 50,
    });
  }, []);

  return (
    <div className={cn(styles.container, styles.centered)}>
      <div className={styles.content}>
        <Huge
          className={cn(
            styles.fadeIn,
            styles.centered,
            styles.title,
            styles.textAlignCenter,
          )}
        >
          {title}
        </Huge>
        {/* <div className={cn(styles.list, styles.fadeIn)}>
          <CommandList commands={someActions} />
        </div> */}
        <div className={cn(styles.fadeIn, styles.centered)}>
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
