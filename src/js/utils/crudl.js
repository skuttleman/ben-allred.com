Array.prototype.findIndex = Array.prototype.findIndex || function(cb, altThis) {
  let array = altThis || this;
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return i;
    }
  }
  return -1;
};

export const getOne = (array, id) => {
  let object = array.find(item => item.id === id) || {};
  return {
    ...object
  };
};

export const getAll = store => {
  return [
    ...store
  ];
};

export const addOne = (array, id, item) => {
  let newItem = {
    ...item,
    id
  };
  return array.concat(newItem);
};

export const updateOne = (array, id, updatedItem) => {
  let index = array.findIndex(item => item.id === id);
  if (index >= 0) {
    return array.slice(0, index).concat(updatedItem).concat(array.slice(index + 1));
  }
  return [
    ...array
  ];
};

export const removeOne = (array, id) => {
  console.log(array)
  let index = array.findIndex(item => item.id === id);
  if (index >= 0) {
    return array.slice(0, index).concat(array.slice(index + 1));
  }
  return [
    ...array
  ];
};
