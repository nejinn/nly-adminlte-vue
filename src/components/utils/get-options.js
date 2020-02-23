var nlyGetOptionsByValueInclusion = function nlyGetOptionsByValueInclusion(
  propOptions,
  prop
) {
  for (const propOption in propOptions) {
    if (propOptions[propOption].indexOf(prop) != -1) {
      return propOptions[propOption];
    }
  }
};

var nlyGetOptionsByKeyEqual = function nlyGetOptionsByKeyEqual(
  propOptions,
  prop
) {
  for (const propOption in propOptions) {
    if (propOption == prop) {
      return propOptions[propOption];
    }
  }
};

var nlyGetOptionsByItem = function nlyGetOptionsByItem(propOptions, prop) {
  if (propOptions.indexOf(prop) != -1) {
    return prop;
  }
};

export {
  nlyGetOptionsByValueInclusion,
  nlyGetOptionsByKeyEqual,
  nlyGetOptionsByItem
};
