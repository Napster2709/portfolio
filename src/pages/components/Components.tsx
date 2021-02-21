import { ColorThemeToggle, Grid, Huge } from 'components';
import React from 'react';
import styles from './styles.scss';

const Components = (): React.ReactElement => {
  return (
    <div className={styles.main}>
      <Grid>
        <Grid.Column cols={6}>
          <Huge>Togographie</Huge>
        </Grid.Column>
        <Grid.Column cols={6}>
          <Grid.Column>
            <h1>h1 Title</h1>
            <h2>h2 Title</h2>
            <h3>h3 Title</h3>
            <h4>h4 Title</h4>
          </Grid.Column>
          <Grid.Column>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              similique enim earum! Quo laudantium nemo quas. Modi doloribus,
              debitis saepe nemo unde molestiae eligendi quidem ad veritatis
              labore facere animi!
            </p>
          </Grid.Column>
          <Grid fluid>
            <Grid.Column cols={4}>
              <span>
                This is a <strong>span</strong> tag
              </span>
            </Grid.Column>
            <Grid.Column cols={4}>
              <code>This is a code tag</code>
            </Grid.Column>
            <Grid.Column cols={4}>
              <a href="">A link</a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
      {/* <Grid>
        <Grid.Column>
          <Huge>Timeline</Huge>
        </Grid.Column>
        <Grid.Column>
          <Timeline>
            <Timeline.Item label="11.09.1990">bla</Timeline.Item>
            <Timeline.Item label="11.09.1991">blub</Timeline.Item>
            <Timeline.Item label="11.09.1992">blabel</Timeline.Item>
          </Timeline>
        </Grid.Column>
      </Grid> */}
      <Grid>
        <Grid.Column cols={6} centered>
          <ColorThemeToggle />
        </Grid.Column>
        <Grid.Column cols={6}>
          <Huge>Dark mode Toggle</Huge>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export { Components };
