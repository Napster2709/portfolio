import React, { useContext } from 'react';
import { MainContext, steps } from '../context';
import styles from './about.styles.scss';
import cn from 'classnames';
import { Header, Huge, Line } from 'components';

const About = () => {
  const context = useContext(MainContext);
  return (
    context.currentStep === steps.about && (
      <>
        <Header />
        <div
          className={cn(styles.side, styles.container, styles.slideUp, {
            [styles['overflow-hidden']]: context.transitioning,
          })}
        >
          <div className={styles.about}>
            <h1 className={styles.title}>Hello</h1>
            <Line className={styles.line} />
            <h3>i'm Frederik R. von Kiedrowski</h3>
            {/* <div className={styles.title}>
              Hi i'm Frederik R. von Kiedrowski
            </div> */}
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
          </div>
        </div>
      </>
    )
  );
};

export { About };
