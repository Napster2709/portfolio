import React from 'react';
import { Logo } from '../logo';
import s from './styles.scss';
import cn from 'classnames';
import { ColorThemeToggle, Grid } from 'components';
import { Link } from 'react-router-dom';

interface HeaderProps {
  logo?: boolean;
}

const Header = ({ logo }: HeaderProps): React.ReactElement => {
  return (
    <>
      <div className={cn(s.header, s.fadeIn)}>
        <Grid className={s.content}>
          {logo && (
            <Grid.Column centered>
              <Link to="/">
                <Logo className={s.logo} />
              </Link>
            </Grid.Column>
          )}
        </Grid>
      </div>
      <div className={s.toggle}>
        <ColorThemeToggle />
      </div>
    </>
  );
};

export { Header };
