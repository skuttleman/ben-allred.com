const typify = item => {
  let type = typeof item;
  if (type === 'object') {
    if (item instanceof Array) {
      return disassembleArray(item);
    }
    return disassembleObject(item);
  }
  return { type };
};

const disassembleObject = object => {
  let keys = Object.keys(object).reduce((array, key) => {
    if (key !== 'id') {
      let type = typify(object[key]);
      return array.concat({ key, type: type });
    }
    return array;
  }, []);
  return { type: 'object', keys };
};

const disassembleArray = array => {
  let values = typify(array[0]);
  return { type: 'array', values };
};

export const loadSchema = array => {
  return typify(array[0]);
};

export const deepEquals = (val1, val2) => {
  if (typeof val1 === 'object') {
    let [keys1, keys2] = [val1, val2].map(Object.keys);
    return keys1.length === keys2.length &&
      keys1.every(key => deepEquals(val1[key], val2[key]));
  }
  return val1 === val2;
};

export const matchSchema = (item, schema) => {
  return deepEquals(schema, typify(item));
};
