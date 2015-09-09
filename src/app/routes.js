import tmpl from './app.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      template: tmpl
    });
}
