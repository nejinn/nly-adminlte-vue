var getOptionsByInclusion = function getOptionsByInclusion(propOptions, prop) {
  for (const propOption in propOptions) {
    if (propOptions[propOption].indexOf(prop) != -1) {
      return propOptions[propOption];
    }
  }
};

var getOptionsByEqual = function getOptionsByEqual(propOptions, prop) {
  for (const propOption in propOptions) {
    if (propOption == prop) {
      return propOptions[propOption];
    }
  }
};

export { getOptionsByInclusion, getOptionsByEqual };
