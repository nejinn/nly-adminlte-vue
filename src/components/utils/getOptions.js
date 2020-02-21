var getOptionsByValueInclusion = function getOptionsByValueInclusion(
  propOptions,
  prop
) {
  for (const propOption in propOptions) {
    if (propOptions[propOption].indexOf(prop) != -1) {
      return propOptions[propOption];
    }
  }
};

var getOptionsByKeyEqual = function getOptionsByKeyEqual(propOptions, prop) {
  for (const propOption in propOptions) {
    if (propOption == prop) {
      return propOptions[propOption];
    }
  }
};

export { getOptionsByValueInclusion, getOptionsByKeyEqual };
