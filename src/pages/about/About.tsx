import React, { useContext } from 'react';
import { MainContext } from 'utils';
import styles from './about.styles.scss';
import cn from 'classnames';
import { Grid, Line, Section } from 'components';

const About = (): React.ReactElement => {
  const context = useContext(MainContext);
  return (
    <Section>
      <div className={styles.centered}>
        <Grid fluid>
          <Grid.Column cols={5} className={cn(styles.about)}>
            <h1 className={cn(styles.title, styles.slideLeft)}>About Me</h1>
            <Line
              className={cn(styles.line, styles.slideRight)}
              align="right"
            />
            <h3 className={styles.slideLeft}>
              i&apos;m Frederik R. von Kiedrowski
            </h3>
          </Grid.Column>
          <Grid.Column
            cols={7}
            centered
            className={cn(styles.text, styles.slideRight)}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              distinctio sapiente possimus esse eius voluptates rerum optio
              unde, deserunt in. Veniam, amet? Illum ducimus praesentium placeat
              explicabo itaque unde reprehenderit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta distinctio sapiente possimus
              esse eius voluptates rerum optio unde, deserunt in. Veniam, amet?
              Illum ducimus praesentium placeat explicabo itaque unde
              reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Dicta distinctio sapiente possimus esse eius voluptates
              rerum optio unde, deserunt in. Veniam, amet? Illum ducimus
              praesentium placeat explicabo itaque unde reprehenderit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Dicta
              distinctio sapiente possimus esse eius voluptates rerum optio
              unde, deserunt in. Veniam, amet? Illum ducimus praesentium placeat
              explicabo itaque unde reprehenderit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta distinctio sapiente possimus
              esse eius voluptates rerum optio unde, deserunt in. Veniam, amet?
            </p>
          </Grid.Column>
        </Grid>
      </div>
    </Section>
  );
};

export { About };
