import React, { useContext } from 'react';
import { MainContext, steps } from 'utils';
import { Logo } from '../logo';
import styles from './styles.scss';
import cn from 'classnames';
import { ColorThemeToggle } from 'components';

const Header = (): React.ReactElement => {
  const context = useContext(MainContext);
  return (
    context.currentStep != steps.welcome && (
      <div className={cn(styles.header, styles.fadeIn)}>
        {/* <ColorThemeToggle /> */}
        <Logo className={styles.logo} />
      </div>
    )
  );
};

export { Header };
