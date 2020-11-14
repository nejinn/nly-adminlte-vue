import { toString } from "./string";

// 换成十进制数字
export const toInteger = val => parseInt(val, 10);

// 换成浮点数
export const toFloat = val => parseFloat(val);

// 保留小数点
export const toFixed = (val, precision) =>
  toFloat(val).toFixed(toInteger(precision) || 0);

export const toCurrency = val => {
  const getVal = toString(val);
  return getVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
