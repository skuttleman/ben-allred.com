import { getOne, getAll, addOne, removeOne, updateOne } from '../../utils/crudl';
import { updateObject } from '../../utils/object-helpers';
import { loadSchema, deepEquals, matchSchema } from '../../utils/schema';

const get = (scope, id) => {
  if (id) {
    return Promise.resolve({ data: getOne(scope.store, id) });
  }
  return Promise.resolve({ data: getAll(scope.store) });
};

const post = (scope, item) => {
  scope.store = addOne(scope.store, scope.nextId, item);
  if (matchSchema(item, scope.schema)) {
    return Promise.resolve({ data: scope.nextId++ });
  }
  return Promise.reject('Schema mismatch');
};

const put = (scope, id, item) => {
  let updatable = getOne(scope.store, id);
  if (updatable && matchSchema(item, scope.schema)) {
    let newItem = updateObject(updatable, item);
    scope.store = updateOne(scope.store, id, newItem);
    return Promise.resolve();
  }
  return Promise.reject(updatable ? 'Id not found' : 'Schema mismatch');
};

const del = (scope, id) => {
  scope.store = removeOne(scope.store, id);
  return Promise.resolve();
};

const loadJSON = ($http, scope, key) => {
  return $http.get(`/api/${key}.json`).then(({ data }) => {
    scope.schema = loadSchema(data[key]);
    scope.store = data[key];
    let lastItem = scope.store[scope.store.length - 1];
    scope.nextId = lastItem.id + 1;
  });
};

const makeApi = (scope, promise) => {
  return {
    get: id => promise.then(() => get(scope, id)),
    post: item => promise.then(() => post(scope, item)),
    put: (id, item) => promise.then(() => put(scope, id, item)),
    delete: id => promise.then(() => del(scope, id))
  };
};

export default ($http, key) => {
  let scope = { store: [], nextId: 1 };
  let promise = loadJSON($http, scope, key);
  return makeApi(scope, promise);
};
