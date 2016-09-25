const PersonalHeaderController = ($scope, loadJSON) => {
  loadJSON.load('header').then(({ data }) => {
    $scope.navs = data.navs;
    $scope.links = data.links;
  });
};

export default () => {
  return {
    restrict: 'AE',
    templateUrl: '/templates/header.html',
    controller: ['$scope', 'loadJSON', PersonalHeaderController]
  };
};
