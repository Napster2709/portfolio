import React from 'react';

export enum steps {
  'welcome',
  'about',
}

export interface MainContextState {
  currentStep: steps;
  transitioning?: boolean;
}

export interface MainContextItems extends MainContextState {
  setCurrentState: (e: MainContextState) => void;
}

export const MainContext = React.createContext<MainContextItems>({
  currentStep: steps.about,
  transitioning: false,
  setCurrentState: (e: MainContextState) => undefined,
});
