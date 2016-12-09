const HomeController = $rootScope => {
  $rootScope.view = 'home';
  $rootScope.backgroundImage = '/images/snow.jpg';
};

export default ['$rootScope', HomeController];
