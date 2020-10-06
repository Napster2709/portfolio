import React, { useContext, useEffect, useState } from 'react';
import styles from './welcome.styles.scss';
import cn from 'classnames';
import { Line, Logo, Section } from 'components';
import { MainContext, steps } from 'utils';

const Welcome = (): React.ReactElement => {
  const context = useContext(MainContext);

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
    <Section fullHeight>
      <div
        className={cn(styles.centered, styles.textAlignCenter, styles.content)}
        onAnimationEnd={onAnimationEndHandler}
      >
        <div
          className={styles.callForAction}
          onClick={() =>
            context.setCurrentState({
              ...context,
              transitioning: true,
            })
          }
        >
          <Logo className={styles.logo} />
          <Line className={styles.slideDown} />
        </div>
      </div>
    </Section>
  );
};

export { Welcome };
