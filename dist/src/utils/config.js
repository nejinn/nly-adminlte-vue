import Vue from "./vue";
import cloneDeep from "./clone-deep";
import get from "./get";
import memoize from "./memoize";
import DEFAULTS from "./config-defaults";
const PROP_NAME = "$nlyConfig";
const VueProto = Vue.prototype;

export const getConfig = () => {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfig() : {};
};

export const getConfigValue = key => {
  return VueProto[PROP_NAME]
    ? VueProto[PROP_NAME].getConfigValue(key)
    : cloneDeep(get(DEFAULTS, key));
};

export const getComponentConfig = (cmpName, key = null) => {
  return key
    ? getConfigValue(`${cmpName}.${key}`)
    : getConfigValue(cmpName) || {};
};

export const getBreakpoints = () => {
  return getConfigValue("breakpoints");
};

const _getBreakpointsCached = memoize(() => {
  return getBreakpoints();
});

export const getBreakpointsCached = () => {
  return cloneDeep(_getBreakpointsCached());
};

export const getBreakpointsUp = () => {
  const breakpoints = getBreakpoints();
  breakpoints[0] = "";
  return breakpoints;
};

export const getBreakpointsUpCached = memoize(() => {
  const breakpoints = getBreakpointsCached();
  breakpoints[0] = "";
  return breakpoints;
});

export const getBreakpointsDown = () => {
  const breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = "";
  return breakpoints;
};

export const getBreakpointsDownCached = () => {
  const breakpoints = getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = "";
  return breakpoints;
};
