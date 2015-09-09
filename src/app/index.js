import angular from 'angular';
import uirouter from 'angular-ui-router';

import dashboard from './dashboard';
import routing from './routes';

export default angular.module('myApp.app', [
  uirouter,
  dashboard
])
  .config(routing)
  .name;
