Object.prototype.map = function(mapper) {
  return Object.keys(this).reduce((object, key) => {
    object[key] = mapper(this[key], key, this);
    return object;
  }, {});
};

export const mergeObject = (object, updates) => {
  return Object.keys(updates).reduce((newObject, key) => {
    if (key === 'id') return newObject;
    return {
      ...newObject,
      [key]: updates[key]
    };
  }, {...object});
};
