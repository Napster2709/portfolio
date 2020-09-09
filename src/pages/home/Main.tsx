import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { Welcome } from './welcome';
import { About } from './about';
import { MainContext, MainContextState } from './context';

const Main = () => {
  const [state, setstate] = useState<MainContextState>({
    currentStep: '',
    transitioning: false,
  });

  return (
    <MainContext.Provider
      value={{
        ...state,
        setCurrentState: (e: MainContextState) => setstate(e),
      }}
    >
      <div className={cn(styles.container, styles.centered)}>
        <Welcome />
        <About />
      </div>
    </MainContext.Provider>
  );
};

export { Main };
