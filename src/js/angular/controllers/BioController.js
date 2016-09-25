const BioController = ($scope, $rootScope, biosAPI) => {
  $rootScope.view = 'bio';
  $rootScope.backgroundImage = '/images/hiking.jpg';
  biosAPI.get().then(({ data: bios }) => {
    $scope.bios = bios;
  });
};

export default ['$scope', '$rootScope', 'biosAPI', BioController];
