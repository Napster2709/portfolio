import React, { useContext } from 'react';
import { MainContext, steps } from 'utils';
import styles from './about.styles.scss';
import cn from 'classnames';
import { Grid, Header, Line } from 'components';

const About = () => {
  const context = useContext(MainContext);
  return (
    context.currentStep === steps.about && (
      <>
        <Header />
        <div
          className={cn(styles.main, {
            [styles['overflow-hidden']]: context.transitioning,
          })}
        >
          <Grid fluid>
            <Grid.Column
              cols={5}
              className={cn(styles.about, styles.slideLeft)}
            >
              <h1 className={styles.title}>About Me</h1>
              <Line className={styles.line} align="right" />
              <h3>i'm Frederik R. von Kiedrowski</h3>
            </Grid.Column>
            <Grid.Column
              cols={7}
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
        </div>
      </>
    )
  );
};

export { About };
