import { keys } from "./object";
import { isArray, isDate, isObject } from "./inspect";

const compareArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
};

const looseEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = keys(a).length;
    const bKeysCount = keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      // eslint-disable-next-line no-prototype-builtins
      const aHasKey = a.hasOwnProperty(key);
      // eslint-disable-next-line no-prototype-builtins
      const bHasKey = b.hasOwnProperty(key);
      if (
        (aHasKey && !bHasKey) ||
        (!aHasKey && bHasKey) ||
        !looseEqual(a[key], b[key])
      ) {
        return false;
      }
    }
  }
  return String(a) === String(b);
};

export default looseEqual;
