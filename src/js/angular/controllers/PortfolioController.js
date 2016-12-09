const PortfolioController = ($scope, $rootScope, loadJSON) => {
  $rootScope.view = 'portfolio';
  $rootScope.backgroundImage = '/images/view.jpg';
  loadJSON.load('apps').then(({ data }) => {
    $scope.projects = data.apps;
  });
};

export default ['$scope', '$rootScope', 'loadJSON', PortfolioController];
