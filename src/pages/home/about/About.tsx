import React, { useContext } from 'react';
import { MainContext } from '../context';
import styles from './about.styles.scss';

const About = () => {
  const context = useContext(MainContext);
  return (
    context.currentStep === 'about' &&
    !context.transitioning && (
      <div className={styles.about}>Hi this is me....</div>
    )
  );
};

export { About };
