import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { Welcome } from './Welcome';
import { MainContext } from './context';

const Main = () => {
  const [state, setstate] = useState<string>('');

  return (
    <MainContext.Provider
      value={{ currentStep: state, setCurrentStep: (e: string) => setstate(e) }}
    >
      <div className={cn(styles.container, styles.centered)}>
        <Welcome />
      </div>
    </MainContext.Provider>
  );
};

export { Main };
