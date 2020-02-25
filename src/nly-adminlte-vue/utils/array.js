export const from = (...args) => Array.from(...args);
export const isArray = val => Array.isArray(val);

export const concat = (...args) => Array.prototype.concat.apply([], args);
