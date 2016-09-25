const MusicController = ($scope, $rootScope, albumsAPI, songsAPI) => {
  $rootScope.view = 'music';
  $rootScope.backgroundImage = '/images/music.jpg';
  Promise.all([
    albumsAPI.get(),
    songsAPI.get()
  ]).then(([{ data: albums }, { data: songs }]) => {
    $scope.albums = albums;
    $scope.songs = songs;
    $scope.$apply();
  });
  $scope.selectSong = song => {
    let controls = document.getElementsByClassName('audio-controls')[0];
    $scope.currentSong = song;
    controls.src = song.src;
    controls.play();
    albumsAPI.get(song.albumId).then(({ data: album }) => {
      $scope.currentAlbum = album;
    });
  };

};

export default ['$scope', '$rootScope', 'albumsAPI', 'songsAPI', MusicController];
