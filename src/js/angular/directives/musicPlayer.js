const altPlayPause = (method, src, onEnd) => {
  let controls = document.getElementsByClassName('audio-controls')[0];
  if (src) controls.src = src;
  if (onEnd) controls.addEventListener('ended', onEnd);
  controls[method]();
};
const playSong = altPlayPause.bind(null, 'play');
const pauseSong = altPlayPause.bind(null, 'pause');

const playPause = $scope => {
  if ($scope.currentSong) {
    $scope.playing = !$scope.playing;
    if ($scope.playing) playSong();
    else pauseSong();
  }
};

const selectSong = $scope => song => {
  $scope.currentSong = song;
  playSong(song.src);
  $scope.playing = true;
  $scope.isExpanded = false;
  $scope.currentAlbum = $scope.albums.find(album => album.id === song.albumId)
};

const MusicPlayerController = ($rootScope, $scope, loadJSON) => {
  loadJSON.load('albums').then(({ data }) => {
    $scope.albums = data.albums;
  });
  loadJSON.load('songs').then(({ data }) => {
    $scope.songs = data.songs;
  });
  $scope.selectSong = selectSong($scope);
  $scope.playPause = () => playPause($scope);
  $scope.close = () => $rootScope.showMusicPlayer = false;
};

export default () => {
  return {
    restrict: 'AE',
    templateUrl: '/templates/player.html',
    controller: ['$rootScope', '$scope', 'loadJSON', MusicPlayerController]
  };
};
