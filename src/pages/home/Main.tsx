import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { Welcome } from './welcome';
import { About } from './about';
import { MainContext } from './context';

const Main = () => {
  const [state, setstate] = useState<string>('');

  return (
    <MainContext.Provider
      value={{ currentStep: state, setCurrentStep: (e: string) => setstate(e) }}
    >
      <div className={cn(styles.container, styles.centered)}>
        <Welcome />
        <About />
      </div>
    </MainContext.Provider>
  );
};

export { Main };
