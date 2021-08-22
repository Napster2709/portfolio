import React, { useContext } from 'react';
import { MainContext, steps } from 'utils';
import { Logo } from '../logo';
import styles from './styles.scss';
import cn from 'classnames';
import { BackArrow, ColorThemeToggle } from 'components';
import { Link } from 'react-router-dom';

interface HeaderProps {
  logo?: boolean;
  back?: string;
}

const Header = ({ logo, back }: HeaderProps): React.ReactElement => {
  const context = useContext(MainContext);
  return (
    context.currentStep != steps.welcome && (
      <div className={cn(styles.header, styles.fadeIn)}>
        <div className={styles.content}>
          {back && (
            <div className={styles.back}>
              <BackArrow to={back} />
            </div>
          )}
          {logo && (
            <div>
              <Link to="/">
                <Logo className={styles.logo} />
              </Link>
            </div>
          )}
          <div className={styles.toggle}>
            <ColorThemeToggle />
          </div>
        </div>
      </div>
    )
  );
};

export { Header };
