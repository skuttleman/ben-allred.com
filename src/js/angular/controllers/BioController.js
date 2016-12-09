const BioController = ($scope, $rootScope, loadJSON) => {
  $rootScope.view = 'bio';
  $rootScope.backgroundImage = '/images/hiking.jpg';
  loadJSON.load('bios').then(({ data }) => {
    $scope.bios = data.bios;
  });
};

export default ['$scope', '$rootScope', 'loadJSON', BioController];
