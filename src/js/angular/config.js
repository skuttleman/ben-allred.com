import app from './app';

app.config(['$routeProvider', $routeProvider => {
  $routeProvider.when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeController'
  }).when('/bio', {
    templateUrl: '/templates/bio.html',
    controller: 'BioController'
  }).when('/portfolio', {
    templateUrl: '/templates/portfolio.html',
    controller: 'PortfolioController'
  }).when('/music', {
    templateUrl: '/templates/music.html',
    controller: 'MusicController'
  }).when('/api', {
    templateUrl: '/templates/api.html',
    controller: 'ApiController'
  }).otherwise('/');
}]);
