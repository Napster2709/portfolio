import React from 'react';
import ReactDOM from 'react-dom';
import { Components, PageNotFound, Main, Imprint } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from 'styles/app.scss';
import './theme/global';
import 'assets/favicon.ico';
import { detectColorScheme } from 'utils';
import { Footer } from 'components';

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps): React.ReactElement => {
  detectColorScheme({});

  return (
    <div className={styles.app}>
      {children}
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/imprint">
          <Imprint />
        </Route>
        <Route exact path="/components">
          <Components />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
