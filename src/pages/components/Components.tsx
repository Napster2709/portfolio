import {
  Code,
  ColorThemeToggle,
  Cup,
  Grid,
  Header,
  Huge,
  Timeline,
} from 'components';
import React from 'react';
import styles from './styles.scss';

const Components = (): React.ReactElement => {
  return (
    <>
      <Header logo />
      <div className={styles.main}>
        <Grid>
          <Grid.Column cols={6} marginBottom="4rem">
            <Huge>Togographie</Huge>
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
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
          <Grid.Column cols={6} marginBottom="4rem">
            <Huge>Colors</Huge>
          </Grid.Column>
          <Grid.Column cols={6} className={styles.wrapper} marginBottom="4rem">
            <div>
              $black: <div className={styles.black}></div>
            </div>
            <div>
              $dark: <div className={styles.dark}></div>
            </div>
            <div>
              $lightdark: <div className={styles.lightdark}></div>
            </div>
            <div>
              $lightwhite: <div className={styles.lightwhite}></div>
            </div>
            <div>
              $white: <div className={styles.white}></div>
            </div>
            <div>
              $red: <div className={styles.red}></div>
            </div>
            <div>
              $blue: <div className={styles.blue}></div>
            </div>
            <div>
              $success: <div className={styles.success}></div>
            </div>
            <div>
              $error: <div className={styles.error}></div>
            </div>
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
            <Huge>Timeline</Huge>
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
            <Timeline>
              <Timeline.Item date="11.09.1990">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus hic sequi ipsum quidem itaque tempora cum dolorem animi
                iusto, enim tenetur cupiditate, neque voluptates impedit fugiat
                illum voluptatem minus ex.
              </Timeline.Item>
              <Timeline.Item date="11.09.1991">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus hic sequi ipsum quidem itaque tempora cum dolorem animi
                iusto, enim tenetur cupiditate, neque voluptates impedit fugiat
                illum voluptatem minus ex.
              </Timeline.Item>
              <Timeline.Item displayLine={false} date="11.09.1992">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus hic sequi ipsum quidem itaque tempora cum dolorem animi
                iusto, enim tenetur cupiditate, neque voluptates impedit fugiat
                illum voluptatem minus ex.
              </Timeline.Item>
            </Timeline>
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
            <Huge>Dark mode Toggle</Huge>
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
            <ColorThemeToggle />
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
            <Huge>Icons</Huge>
          </Grid.Column>
          <Grid.Column cols={6} marginBottom="4rem">
            <Cup />
            <Code />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
};

export { Components };
