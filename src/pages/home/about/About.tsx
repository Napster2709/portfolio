import React, { useContext } from 'react';
import { MainContext } from '../context';

const About = () => {
  const context = useContext(MainContext);
  console.log(context.currentStep);
  return context.currentStep === 'about' && <div>Hi this is me....</div>;
};

export { About };
