import { getOne, getAll, addOne, removeOne, updateOne } from '../../utils/crudl';
import { updateObject } from '../../utils/object-helpers';

const get = (scope, id) => {
  if (id) {
    return Promise.resolve({ data: getOne(scope.store, id) });
  }
  return Promise.resolve({ data: getAll(scope.store) });
};

const post = (scope, item) => {
  scope.store = addOne(scope.store, scope.nextId, item);
  return Promise.resolve({ data: scope.nextId++ });
};

const put = (scope, id, item) => {
  let updatable = getOne(scope.store, id);
  if (updatable) {
    let newItem = updateObject(updatable, item);
    scope.store = updateOne(scope.store, id, newItem);
    return Promise.resolve();
  }
  return Promise.reject();
};

const del = (scope, id) => {
  scope.store = removeOne(scope.store, id);
  return Promise.resolve();
};

export default ($http, key) => {
  let scope = {
    store: [],
    nextId: 1
  };

  let promise = $http.get(`/api/${key}.json`).then(({ data }) => {
    scope.store = data[key];
    let lastItem = scope.store[scope.store.length - 1];
    scope.nextId = lastItem.id + 1;
  });

  window.apis = window.apis || {};
  window.apis[key] = {
    get(id) {
      return promise.then(() => get(scope, id));
    },
    post(item) {
      return promise.then(() => post(scope, item));
    },
    put(id, item) {
      return promise.then(() => put(scope, id, item));
    },
    delete(id) {
      return promise.then(() => del(scope, id));
    }
  };

  return window.apis[key];
};
