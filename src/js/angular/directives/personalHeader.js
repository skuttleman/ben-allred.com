export default () => {
  return {
    restrict: 'AE',
    templateUrl: '/templates/header.html',
    controller: ['$scope', 'loadJSON', ($scope, loadJSON) => {
      loadJSON.load('header').then(json => {
        $scope.navs = json.data.navs;
        $scope.links = json.data.links;
      });
    }]
  };
};
