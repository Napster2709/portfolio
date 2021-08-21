import { Grid, Header, Line, Section } from 'components';
import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

const Impressum = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Section>
          <Grid fluid>
            <Grid.Column cols={5} centered className={styles.content}>
              <h1 className={cn(styles.title, styles.slideLeft)}>Impressum</h1>
              <Line svg />
            </Grid.Column>
            <Grid.Column
              cols={7}
              centered
              className={cn(styles.text, styles.slideRight)}
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                distinctio sapiente possimus esse eius voluptates rerum optio
                unde, deserunt in. Veniam, amet? Illum ducimus praesentium
                placeat explicabo itaque unde reprehenderit. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Dicta distinctio sapiente
                possimus esse eius voluptates rerum optio unde, deserunt in.
                Veniam, amet? Illum ducimus praesentium placeat explicabo itaque
                unde reprehenderit. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dicta distinctio sapiente possimus esse eius
                voluptates rerum optio unde, deserunt in. Veniam, amet? Illum
                ducimus praesentium placeat explicabo itaque unde reprehenderit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                distinctio sapiente possimus esse eius voluptates rerum optio
                unde, deserunt in. Veniam, amet? Illum ducimus praesentium
                placeat explicabo itaque unde reprehenderit. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Dicta distinctio sapiente
                possimus esse eius voluptates rerum optio unde, deserunt in.
                Veniam, amet?
              </p>
            </Grid.Column>
          </Grid>
        </Section>
      </div>
    </>
  );
};

export { Impressum };
