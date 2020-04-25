import OurVue from "./vue";
import { setConfig } from "./config-set";
import { hasWindowSupport, isJSDOM } from "./env";
import { warn } from "./warn";

/**
 * 检测是否存在多个vue实列
 * @param {object} Vue
 */
export const checkMultipleVue = (() => {
  let checkMultipleVueWarned = false;

  const MULTIPLE_VUE_WARNING = [].join("\n");

  return Vue => {
    /* istanbul ignore next */
    if (!checkMultipleVueWarned && OurVue !== Vue && !isJSDOM) {
      warn(MULTIPLE_VUE_WARNING);
    }
    checkMultipleVueWarned = true;
  };
})();

/**
 * 注册组件，插件，指令 installFactory//nlyInstallFactory
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */
export const nlyInstallFactory = ({ components, directives, plugins } = {}) => {
  const install = (Vue, config = {}) => {
    if (install.installed) {
      return;
    }
    install.installed = true;
    checkMultipleVue(Vue);
    setConfig(config, Vue);
    nlyRegisterComponents(Vue, components);
    nlyRegisterDirectives(Vue, directives);
    nlyRegisterPlugins(Vue, plugins);
  };

  install.installed = false;

  return install;
};

/**
 * 无配置选项插件组件，插件，指令注册.icon installFactoryNoConfig//nlyInstallFactoryNoConfig
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */
export const nlyInstallFactoryNoConfig = ({
  components,
  directives,
  plugins
} = {}) => {
  // eslint-disable-next-line no-unused-vars
  const install = (Vue, config = {}) => {
    if (install.installed) {
      /* istanbul ignore next */
      return;
    }
    install.installed = true;
    checkMultipleVue(Vue);
    nlyRegisterComponents(Vue, components);
    nlyRegisterDirectives(Vue, directives);
    nlyRegisterPlugins(Vue, plugins);
  };

  install.installed = false;

  return install;
};

/**
 * 插件注册工厂 pluginFactory//nlyPluginFactory
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */
export const nlyPluginFactory = (opts = {}, extend = {}) => ({
  ...extend,
  install: nlyInstallFactory(opts)
});

/**
 * Plugin object factory function (no config option). pluginFactoryNoConfig//nlyPluginFactoryNoConfig
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */
export const nlyPluginFactoryNoConfig = (opts = {}, extend = {}) => ({
  ...extend,
  install: nlyInstallFactoryNoConfig(opts)
});

/**
 * 注册插件  registerPlugins// nlyRegisterPlugins
 * @param {object} Vue
 * @param {object} Plugin definitions
 */
export const nlyRegisterPlugins = (Vue, plugins = {}) => {
  for (const plugin in plugins) {
    if (plugin && plugins[plugin]) {
      Vue.use(plugins[plugin]);
    }
  }
};

/**
 * 注册单个组件 registerComponent//nlyRegisterComponent
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} 编写的插件
 */
export const nlyRegisterComponent = (Vue, name, def) => {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};

/**
 * 注册多个组件
 * @param {object} Vue registerComponents // nlyRegisterComponents
 * @param {object} Object of component definitions
 */
export const nlyRegisterComponents = (Vue, components = {}) => {
  for (const component in components) {
    nlyRegisterComponent(Vue, component, components[component]);
  }
};

/**
 * 注册指令
 * @param {object} Vue registerDirective//nlyRegisterDirective
 * @param {string} Directive name
 * @param {object} Directive definition
 */
export const nlyRegisterDirective = (Vue, name, def) => {
  if (Vue && name && def) {
    // Ensure that any leading V is removed from the
    // name, as Vue adds it automatically
    Vue.directive(name.replace(/^VNly/, "Nly"), def);
  }
};

/**
 * 注册多个指令
 * @param {object} Vue registerDirectives//nlyRegisterDirectives
 * @param {object} Object of directive definitions
 */
export const nlyRegisterDirectives = (Vue, directives = {}) => {
  for (const directive in directives) {
    nlyRegisterDirective(Vue, directive, directives[directive]);
  }
};

/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */
export const vueUse = VuePlugin => {
  /* istanbul ignore next */
  if (hasWindowSupport && window.Vue) {
    window.Vue.use(VuePlugin);
  }
  /* istanbul ignore next */
  if (hasWindowSupport && VuePlugin.NAME) {
    window[VuePlugin.NAME] = VuePlugin;
  }
};
