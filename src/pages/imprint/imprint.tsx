import { Grid, Header, Line, PrivatText, Section } from 'components';
import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

const Imprint = (): React.ReactElement => {
  return (
    <>
      <Header logo back="/" />
      <div className={styles.main}>
        <Section marginTop="12%">
          <Grid fluid>
            <Grid.Column centered cols={5} className={styles.content}>
              <h1 className={cn(styles.title, styles.slideLeft)}>Imprint</h1>
            </Grid.Column>
            <Grid.Column centered cols={2}>
              <Line svg className={styles.line} />
            </Grid.Column>
            <Grid.Column
              cols={5}
              className={cn(styles.content, styles.slideRight)}
            >
              <div className={styles.text}>
                <h3>Contact</h3>
                <PrivatText type="name" />
                <PrivatText type="email" />
                <h3>Address</h3>
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
