import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import DashboardCtrl from './DashboardCtrl';

export default angular.module('myApp.dashboard', [uirouter])
  .config(routing)
  .controller('DashboardCtrl', DashboardCtrl)
  .name;
