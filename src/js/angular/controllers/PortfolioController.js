export default [
  '$scope', '$rootScope', 'loadJSON',
  ($scope, $rootScope, loadJSON) => {
    $rootScope.view = 'portfolio';
    $rootScope.backgroundImage = '/images/portfolio.jpg';
    loadJSON.load('portfolio').then(json => {
      $scope.projects = json.data.data;
    });
  }
];
