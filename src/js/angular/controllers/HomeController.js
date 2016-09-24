export default [
  '$scope', '$rootScope', 'loadJSON',
  ($scope, $rootScope, loadJSON) => {
    $rootScope.view = 'home';
    $rootScope.backgroundImage = '/images/snow.jpg';
  }
];
