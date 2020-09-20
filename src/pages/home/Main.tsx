import React, { useState } from 'react';
import { Welcome } from '../welcome';
import { About } from '../about';
import { MainContext, MainContextState, steps } from 'utils';

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
