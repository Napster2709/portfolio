import React, { useContext } from 'react';
import { MainContext, steps } from 'utils';
import { Logo } from '../logo';
import styles from './styles.scss';
import cn from 'classnames';

const Header: React.FC = () => {
  const context = useContext(MainContext);
  return (
    context.currentStep != steps.welcome && (
      <div className={cn(styles.header, styles.fadeIn)}>
        <Logo className={styles.logo} />
        <div className={styles.navigation}>im header</div>
      </div>
    )
  );
};

export { Header };
