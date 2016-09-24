export default ['$http', $http => {
  return {
    load(name) {
      return $http.get(`/json/${name}.json`);
    }
  };
}];
