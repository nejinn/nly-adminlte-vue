import { isArray } from "./array";

export const assign = (...args) => Object.assign(...args);
export const create = (proto, optionalProps) =>
  Object.create(proto, optionalProps);
export const defineProperties = (obj, props) =>
  Object.defineProperties(obj, props);
export const defineProperty = (obj, prop, descr) =>
  Object.defineProperty(obj, prop, descr);
export const freeze = obj => Object.freeze(obj);
export const getOwnPropertyNames = obj => Object.getOwnPropertyNames(obj);
export const getOwnPropertyDescriptor = (obj, prop) =>
  Object.getOwnPropertyDescriptor(obj, prop);
export const getOwnPropertySymbols = obj => Object.getOwnPropertySymbols(obj);
export const getPrototypeOf = obj => Object.getPrototypeOf(obj);
export const is = (value1, value2) => Object.is(value1, value2);
export const isFrozen = obj => Object.isFrozen(obj);
export const keys = obj => Object.keys(obj);

export const hasOwnProperty = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop);
export const toString = obj => Object.prototype.toString.call(obj);

export const isObject = obj => obj !== null && typeof obj === "object";

export const isPlainObject = obj =>
  Object.prototype.toString.call(obj) === "[object Object]";

export const clone = obj => ({ ...obj });

export const pick = (obj, props) =>
  keys(obj)
    .filter(key => props.indexOf(key) !== -1)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {});

export const omit = (obj, props) =>
  keys(obj)
    .filter(key => props.indexOf(key) === -1)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {});

export const readonlyDescriptor = () => ({
  enumerable: true,
  configurable: false,
  writable: false
});

export const deepFreeze = obj => {
  const props = keys(obj);

  props.forEach(prop => {
    const value = obj[prop];

    obj[prop] =
      value && (isPlainObject(value) || isArray(value))
        ? deepFreeze(value)
        : value;
  });
  return freeze(obj);
};
