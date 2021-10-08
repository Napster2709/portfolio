import { BackArrow, Grid, Header, PrivatText, Section } from 'components';
import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

const Imprint = (): React.ReactElement => {
  return (
    <>
      <Header logo />
      <div className={styles.main}>
        <Grid className={styles.nav}>
          <Grid.Column cols={6}>
            <div className={styles.slideRight}>
              <h1>Imprint</h1>
            </div>
          </Grid.Column>
          <Grid.Column cols={6}>
            <BackArrow to="/" />
          </Grid.Column>
        </Grid>

        <Section className={cn(styles.box, styles.slideUp)}>
          <Grid fluid>
            <Grid.Column marginBottom="1rem">
              <h2>Contact</h2>
              <div className={styles.content}>
                <PrivatText type="name" />
                <PrivatText type="email" />
              </div>
            </Grid.Column>
            <Grid.Column>
              <h2>Address</h2>
              <div className={styles.content}>
                <PrivatText type="street" />
                <PrivatText type="city" />
                <PrivatText type="land" />
              </div>
            </Grid.Column>
          </Grid>
        </Section>
      </div>
    </>
  );
};

export { Imprint };
