import React, { useState } from 'react';
import { Welcome } from '../welcome';
import { About } from '../about';
import { MainContext, MainContextState, steps } from 'utils';
import { Header } from 'components';
import styles from './styles.scss';
import cn from 'classnames';

const Main = (): React.ReactElement => {
  const [state, setstate] = useState<MainContextState>({
    currentStep: steps.welcome,
    transitioning: false,
  });

  return (
    <MainContext.Provider
      value={{
        ...state,
        setCurrentState: (e: MainContextState) => setstate(e),
      }}
    >
      <div
        className={cn({
          [styles['header-visible']]: state.currentStep !== steps.welcome,
        })}
      >
        <Header />
        <Welcome />
        <About />
      </div>
    </MainContext.Provider>
  );
};

export { Main };
