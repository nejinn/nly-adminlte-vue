export const nlyGetOptionsByValueInclusion = function nlyGetOptionsByValueInclusion(
  propOptions,
  prop
) {
  for (const propOption in propOptions) {
    if (propOptions[propOption].indexOf(prop) != -1) {
      return propOptions[propOption];
    }
  }
};

export const nlyGetOptionsByKeyEqual = function nlyGetOptionsByKeyEqual(
  propOptions,
  prop
) {
  for (const propOption in propOptions) {
    if (propOption == prop) {
      return propOptions[propOption];
    }
  }
};

export const nlyGetOptionsByItem = function nlyGetOptionsByItem(
  propOptions,
  prop
) {
  if (propOptions.indexOf(prop) != -1) {
    return prop;
  }
};

export const nlyGetOptionInclusion = (options, value) =>
  options.indexOf(value) !== -1;
