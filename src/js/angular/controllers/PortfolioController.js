const PortfolioController = ($scope, $rootScope, appsAPI) => {
  $rootScope.view = 'portfolio';
  $rootScope.backgroundImage = '/images/portfolio.jpg';
  appsAPI.get().then(({ data }) => {
    $scope.projects = data;
  });
};

export default ['$scope', '$rootScope', 'appsAPI', PortfolioController];
