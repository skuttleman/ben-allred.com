const MusicController = ($scope, $rootScope) => {
  $rootScope.view = 'music';
  $rootScope.backgroundImage = '/images/music.jpg';
  $scope.openMusicPlayer = () => $rootScope.showMusicPlayer = true;
};

export default ['$scope', '$rootScope', MusicController];
