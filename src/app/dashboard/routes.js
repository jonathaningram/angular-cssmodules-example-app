import tmpl from './index.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app.dashboard', {
      url: '/',
      template: tmpl,
      controller: 'DashboardCtrl',
      controllerAs: 'vm'
    });
}
