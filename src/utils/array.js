export const from = (...args) => Array.from(...args);
export const isArray = val => Array.isArray(val);

export const arrayIncludes = (array, value) => array.indexOf(value) !== -1;

export const concat = (...args) => Array.prototype.concat.apply([], args);
