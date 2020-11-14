import looseEqual from "./loose-equal";

const looseIndexOf = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
};

export default looseIndexOf;
