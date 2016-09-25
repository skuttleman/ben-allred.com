import app from '../app';
import loadJSON from './loadJSON';
import apiMaker from './apiMaker';

app.service('loadJSON', loadJSON);
app.service('albumsAPI', ['$http', $http => apiMaker($http, 'albums')]);
app.service('appsAPI', ['$http', $http => apiMaker($http, 'apps')]);
app.service('biosAPI', ['$http', $http => apiMaker($http, 'bios')]);
app.service('songsAPI', ['$http', $http => apiMaker($http, 'songs')]);
