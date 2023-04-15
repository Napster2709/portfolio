import React from 'react';
import styles from './main.styles.scss';
import { Header, Section, Timeline } from 'components';
import { Landing } from './Landing';

const Main = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Landing />
        <Section>
          <Timeline>
            <Timeline.Item date="11.09.1990">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              hic sequi ipsum quidem itaque tempora cum dolorem animi iusto,
              enim tenetur cupiditate, neque voluptates impedit fugiat illum
              voluptatem minus ex.
            </Timeline.Item>
            <Timeline.Item date="11.09.1991">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              hic sequi ipsum quidem itaque tempora cum dolorem animi iusto,
              enim tenetur cupiditate, neque voluptates impedit fugiat illum
              voluptatem minus ex.
            </Timeline.Item>
            <Timeline.Item displayLine={false} date="11.09.1992">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              hic sequi ipsum quidem itaque tempora cum dolorem animi iusto,
              enim tenetur cupiditate, neque voluptates impedit fugiat illum
              voluptatem minus ex.
            </Timeline.Item>
          </Timeline>
        </Section>
      </div>
    </>
  );
};

Main.displayName = 'Main';

export { Main };
