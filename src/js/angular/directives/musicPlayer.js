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

const selectSong = ($scope, albumsAPI) => song => {
  $scope.currentSong = song;
  playSong(song.src);
  $scope.playing = true;
  $scope.isExpanded = false;
  albumsAPI.get(song.albumId).then(({ data }) => $scope.currentAlbum = data);
};

const MusicPlayerController = ($rootScope, $scope, songsAPI, albumsAPI) => {
  songsAPI.get().then(({ data }) => $scope.songs = data);
  $scope.selectSong = selectSong($scope, albumsAPI);
  $scope.playPause = () => playPause($scope);
  $scope.close = () => $rootScope.showMusicPlayer = false;
};

export default () => {
  return {
    restrict: 'AE',
    templateUrl: '/templates/player.html',
    controller: ['$rootScope', '$scope', 'songsAPI', 'albumsAPI', MusicPlayerController]
  };
};
