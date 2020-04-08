import identity from "./identity";
import { isArray, isObject } from "./inspect";

const RX_ARRAY_NOTATION = /\[(\d+)]/g;

const get = (obj, path, defaultValue = null) => {
  // Handle array of path values
  path = isArray(path) ? path.join(".") : path;

  // If no path or no object passed
  if (!path || !isObject(obj)) {
    return defaultValue;
  }
  if (path in obj) {
    return obj[path];
  }

  // Handle string array notation (numeric indices only)
  path = String(path).replace(RX_ARRAY_NOTATION, ".$1");

  const steps = path.split(".").filter(identity);

  // Handle case where someone passes a string of only dots
  if (steps.length === 0) {
    return defaultValue;
  }

  return steps.every(
    step => isObject(obj) && step in obj && (obj = obj[step]) != null
  )
    ? obj
    : defaultValue;
};

export default get;
