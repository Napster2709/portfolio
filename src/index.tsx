import React from 'react';
import ReactDOM from 'react-dom';
import { Home, PageNotFound, Soon } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from 'styles/app.scss';
import './theme/global';

ReactDOM.render(
  <Router>
    <div className={styles.app}>
      <Switch>
        <Route path="/">
          <Soon />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'),
);
