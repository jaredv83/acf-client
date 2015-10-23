import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    About,
    Members,
    NotFound,
  } from './containers/index';


export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={About} />
      { /* Routes */ }
      <Route path="about" component={About} />
      <Route path="members" component={Members} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
