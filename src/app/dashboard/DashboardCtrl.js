import styles from './index.scss';
console.log('dashboard index.scss styles:', styles);

DashboardCtrl.$inject = ['$rootScope', '$scope'];

export default function DashboardCtrl($rootScope, $scope) {
  $scope.styles = Object.assign({}, $rootScope.styles || {}, styles);
}
