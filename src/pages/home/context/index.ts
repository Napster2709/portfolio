import React from 'react';

export interface MainContextItems {
  currentStep: string;
  setCurrentStep: (e: string) => void;
}

export const MainContext = React.createContext<MainContextItems>({
  currentStep: '',
  setCurrentStep: (e: string) => undefined,
});
