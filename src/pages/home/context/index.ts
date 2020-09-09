import React from 'react';

export interface MainContextState {
  currentStep: string;
  transitioning?: boolean;
}

export interface MainContextItems extends MainContextState {
  setCurrentState: (e: MainContextState) => void;
}

export const MainContext = React.createContext<MainContextItems>({
  currentStep: '',
  transitioning: false,
  setCurrentState: (e: MainContextState) => undefined,
});
