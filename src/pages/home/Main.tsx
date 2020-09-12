import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { Welcome } from './welcome';
import { About } from './about';
import { MainContext, MainContextState, steps } from './context';

const Main = () => {
  const [state, setstate] = useState<MainContextState>({
    currentStep: steps.about,
    transitioning: false,
  });

  return (
    <MainContext.Provider
      value={{
        ...state,
        setCurrentState: (e: MainContextState) => setstate(e),
      }}
    >
      <Welcome />
      <About />
    </MainContext.Provider>
  );
};

export { Main };
