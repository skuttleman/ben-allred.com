export default ['$http', $http =>
  ({ load: file => $http.get(`/json/${file}.json`) })
];
