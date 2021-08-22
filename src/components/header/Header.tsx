import React, { useContext } from 'react';
import { MainContext, steps } from 'utils';
import { Logo } from '../logo';
import styles from './styles.scss';
import cn from 'classnames';
import { ColorThemeToggle, Grid } from 'components';
import { Link } from 'react-router-dom';

const Header = (): React.ReactElement => {
  const context = useContext(MainContext);
  return (
    context.currentStep != steps.welcome && (
      <div className={cn(styles.header, styles.fadeIn)}>
        <Grid className={styles.content} fluid>
          <Grid.Column cols={1} className={styles.toggle}>
            <ColorThemeToggle />
          </Grid.Column>
          <Grid.Column centered cols={10}>
            <Link to="/">
              <Logo className={styles.logo} />
            </Link>
          </Grid.Column>
          <Grid.Column centered cols={1}></Grid.Column>
        </Grid>
      </div>
    )
  );
};

export { Header };
