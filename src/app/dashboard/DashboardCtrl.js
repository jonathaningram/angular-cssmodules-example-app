import styles from './index.scss';
console.log('dashboard index.scss styles:', styles);

DashboardCtrl.$inject = ['$rootScope'];

export default function DashboardCtrl($rootScope) {
  let vm = this;
  vm.styles = Object.assign({}, $rootScope.styles || {}, styles);
}
