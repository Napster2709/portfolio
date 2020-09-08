import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { Huge } from 'components';
import { writeText } from 'utils';
import { MainContext } from './context';

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
    if (context.currentStep !== '') {
      event.currentTarget.style.display = 'none';
    }
  };

  return (
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
      onClick={() => context.setCurrentStep('start')}
      onAnimationEnd={onAnimationEndHandler}
    >
      {title}
    </Huge>
  );
};

export { Welcome };
