import React from 'react';
import { Logo } from '../logo';
import styles from './styles.scss';
import cn from 'classnames';
import { BackArrow, ColorThemeToggle, Grid } from 'components';
import { Link } from 'react-router-dom';

interface HeaderProps {
  logo?: boolean;
  back?: string;
}

const Header = ({ logo, back }: HeaderProps): React.ReactElement => {
  return (
    <>
      {back && (
        <div className={styles.back}>
          <BackArrow to={back} />
        </div>
      )}
      <div className={cn(styles.header, styles.fadeIn)}>
        <Grid className={styles.content}>
          {logo && (
            <Grid.Column centered>
              <Link to="/">
                <Logo className={styles.logo} />
              </Link>
            </Grid.Column>
          )}
        </Grid>
      </div>
      <div className={styles.toggle}>
        <ColorThemeToggle />
      </div>
    </>
  );
};

export { Header };
