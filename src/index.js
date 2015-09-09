import styles from './index.scss';
console.log('app index.scss styles:', styles);

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routing';
import app from './app';

angular
.module('myApp', [
  uirouter,
  app
])
.config(routing)
.run(['$rootScope', ($rootScope) => {
  $rootScope.styles = styles;
}]);
