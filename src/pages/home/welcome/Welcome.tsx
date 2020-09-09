import React, { useContext, useEffect, useState } from 'react';
import styles from './welcome.styles.scss';
import cn from 'classnames';
import { Huge } from 'components';
import { writeText } from 'utils';
import { MainContext } from '../context';

const Welcome = () => {
  const [title, setTitle] = useState<string>('');
  const [show, setShow] = useState<boolean>(true);
  const context = useContext(MainContext);

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
    if (context.currentStep !== '') {
      setShow(false);
      context.setCurrentState({ ...context, transitioning: false });
    }
  };

  return (
    show && (
      <Huge
        className={cn(
          styles.fadeIn,
          styles.centered,
          styles.title,
          styles.textAlignCenter,
          {
            [styles.fadeAway]: context.currentStep !== '',
          },
        )}
        onClick={() =>
          context.setCurrentState({ currentStep: 'about', transitioning: true })
        }
        onAnimationEnd={onAnimationEndHandler}
      >
        {title}
      </Huge>
    )
  );
};

export { Welcome };
