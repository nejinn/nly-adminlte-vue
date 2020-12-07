export const from = (...args) => Array.from(...args);
export const isArray = val => Array.isArray(val);

export const arrayIncludes = (array, value) => array.indexOf(value) !== -1;

export const concat = (...args) => Array.prototype.concat.apply([], args);

export const createAndFillArray = (size, value) => Array(size).fill(value);

export const flatten = array =>
  array.reduce((result, item) => result.concat(item), []);

export const flattenDeep = array =>
  array.reduce(
    (result, item) =>
      result.concat(Array.isArray(item) ? flattenDeep(item) : item),
    []
  );
