import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import info from './info';
import db from './db';
import members from './members';
import twitter from './twitter';

export default combineReducers({
  router: routerStateReducer,
  db,
  info,
  members,
  twitter,
});
