import { Grid, Header, Line, PrivatText, Section } from 'components';
import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

const Imprint = (): React.ReactElement => {
  return (
    <>
      <Header logo back="/" />
      <div className={styles.main}>
        <Section marginTop="5rem" marginBottom="5rem">
          <Grid fluid>
            <Grid.Column
              centered
              cols={5}
              className={cn(styles.title, styles.slideLeft)}
            >
              <div className={styles.content}>
                <h1>Contact</h1>
              </div>
            </Grid.Column>
            <Grid.Column centered cols={2}>
              <Line svg className={styles.line} />
            </Grid.Column>
            <Grid.Column
              cols={5}
              centered
              className={cn(styles.text, styles.slideRight)}
            >
              <div className={styles.content}>
                <PrivatText type="name" />
                <PrivatText type="email" />
              </div>
            </Grid.Column>
          </Grid>
        </Section>

        <Section marginTop="5rem" marginBottom="5rem">
          <Grid fluid className={styles.address}>
            <Grid.Column
              cols={5}
              centered
              className={cn(styles.title, styles.slideLeft)}
            >
              <div className={styles.content}>
                <PrivatText type="street" />
                <PrivatText type="city" />
                <PrivatText type="land" />
              </div>
            </Grid.Column>
            <Grid.Column centered cols={2}>
              <Line svg className={styles.line2} />
            </Grid.Column>
            <Grid.Column
              cols={5}
              centered
              className={cn(styles.text, styles.slideRight)}
            >
              <div className={styles.content}>
                <h1>Address</h1>
              </div>
            </Grid.Column>
          </Grid>
        </Section>
      </div>
    </>
  );
};

export { Imprint };
