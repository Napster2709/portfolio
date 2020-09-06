import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { CommandLineInput, CommandList, Command, Huge } from 'components';
import { writeText } from 'utils';
import cn from 'classnames';

const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [activeEntrie, setActiveEntrie] = useState<string>('');

  // const someActions: Command[] = [
  //   {
  //     display: 'Timeline',
  //     action: () => undefined,
  //   },
  //   {
  //     display: 'About Me',
  //     action: () => undefined,
  //   },
  //   {
  //     display: 'Portfolio',
  //     action: () => undefined,
  //   },
  // ];

  useEffect(() => {
    writeText({
      text: 'Welcome to my Portfolio!',
      setNewText: (newText: string) => setTitle(newText),
      delay: 50,
    });
  }, []);

  const onAnimationEndHandler = (
    event: React.AnimationEvent<HTMLDivElement>,
  ) => {
    if (activeEntrie !== '') {
      event.currentTarget.style.display = 'none';
    }
  };

  return (
    <>
      <div className={cn(styles.container, styles.centered)}>
        <Huge
          className={cn(
            styles.fadeIn,
            styles.centered,
            styles.title,
            styles.textAlignCenter,
            {
              [styles.fadeAway]: activeEntrie !== '',
            },
          )}
          onClick={() => setActiveEntrie('aboutme')}
          onAnimationEnd={onAnimationEndHandler}
        >
          {title}
        </Huge>
      </div>
      {/* <div className={cn(styles.subcontainer)}>
        <div className={cn(styles.content)}>
          <div
            className={cn(styles.list, styles.centered, {
              [styles.visible]: activeEntrie !== '',
            })}
          >
            <CommandList commands={someActions} />
          </div>
          <div className={cn(styles.fadeIn, styles.centered)}>
            <CommandLineInput
              initialFocus
              submitEvent={setActiveEntrie}
              value="start"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export { Home };
