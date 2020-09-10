import React, { useContext } from 'react';
import { MainContext } from '../context';
import styles from './about.styles.scss';
import cn from 'classnames';

const About = () => {
  const context = useContext(MainContext);
  return (
    context.currentStep === 'about' &&
    !context.transitioning && (
      <div
        className={cn(styles.main, styles.container, {
          [styles['overflow-hidden']]: context.transitioning,
        })}
      >
        <div className={styles.about}>Hi this is me....</div>
      </div>
    )
  );
};

export { About };
