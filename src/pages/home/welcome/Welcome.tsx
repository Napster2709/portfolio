import React, { useContext, useEffect, useState } from 'react';
import styles from './welcome.styles.scss';
import cn from 'classnames';
import { Huge, Logo } from 'components';
import { writeText } from 'utils';
import { MainContext, steps } from '../context';

const Welcome = () => {
  const [title, setTitle] = useState<string>('');
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
    if (context.transitioning) {
      context.setCurrentState({
        currentStep: steps.about,
        transitioning: false,
      });
    }
  };

  return (
    context.currentStep === steps.welcome && (
      <div
        className={cn(
          styles.fullwidth,
          styles.centered,
          styles.textAlignCenter,
          styles.content,
          {
            [styles.fadeAway]: context.transitioning,
          },
        )}
        onAnimationEnd={onAnimationEndHandler}
      >
        <Huge
          className={cn(styles.title)}
          onClick={() =>
            context.setCurrentState({
              ...context,
              transitioning: true,
            })
          }
        >
          {title}
        </Huge>
        <div className={cn(styles.line, styles.slideDown)} />
        <Logo className={styles.logo} />
      </div>
    )
  );
};

export { Welcome };
