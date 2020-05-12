import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home, PageNotFound } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as styles from 'styles/app.scss';
import './theme/global';

ReactDOM.render(
  <Router>
    <div className={styles.app}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'),
);
