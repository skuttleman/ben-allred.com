const ApiController = ($scope, $rootScope) => {
  $rootScope.view = 'api';
  $rootScope.backgroundImage = '/images/snow.jpg';
};

export default ['$scope', '$rootScope', ApiController];
