export const updateObject = (object, updates) => {
  return Object.keys(updates).reduce((newObject, key) => {
    if (key === 'id') return newObject;
    return {
      ...newObject,
      [key]: updates[key]
    };
  }, {...object});
};
