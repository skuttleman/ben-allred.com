const HomeController = ($scope, $rootScope) => {
  $rootScope.view = 'home';
  $rootScope.backgroundImage = '/images/snow.jpg';
};

export default ['$scope', '$rootScope', HomeController];
