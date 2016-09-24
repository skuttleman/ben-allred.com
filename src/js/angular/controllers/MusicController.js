export default [
  '$scope', '$rootScope', 'loadJSON',
  ($scope, $rootScope, loadJSON) => {
    $rootScope.view = 'music';
    $rootScope.backgroundImage = '/images/music.jpg';
    loadJSON.load('music').then(json => {
      $scope.songs = json.data.songs;
      $scope.albums = json.data.albums;
    });
    $scope.selectSong = song => {
      var controls = document.getElementsByClassName('audio-controls')[0];
      $scope.currentSong = song;
      controls.src = song.src;
      controls.play();
    };
  }
];
