import { importAll, parseVersion } from "~/utils";
import {
  version,
  dependencies,
  devDependencies,
  description
} from "~/../package.json";
import DEFAULT_CONFIG from "~/../src/utils/config-defaults";

const componentsContext = require.context(
  "~/../src/components/",
  true,
  /package.json/
);
export const components = importAll(componentsContext);

const directivesContext = require.context(
  "~/../src/directives/",
  true,
  /package.json/
);
export const directives = importAll(directivesContext);

// Since there are over 300 icons, we only return `BIcon` and `BIconstack` component, plus
// one extra example icon component which we modify the icon name to be `BIcon{IconName}`
// We sort the array to ensure `BIcon` appears first

const referenceContext = require.context(
  "~/markdown/reference",
  true,
  /meta.json/
);
export const reference = importAll(referenceContext);

const miscContext = require.context("~/markdown/misc", true, /meta.json/);
export const misc = importAll(miscContext);

export const nav = [
  {
    title: "开始",
    base: "",
    exact: true
  },
  {
    title: "components",
    base: "components/",
    pages: components,
    description: "BootstrapVue components and component group plugins"
  },
  {
    title: "directives",
    base: "directives/",
    pages: directives,
    description: "BootstrapVue directives and directive group plugins"
  },
  {
    title: "图标",
    base: "icons",
    version: "2.3.0",
    description: "BootstrapVue icons"
  },
  {
    title: "Reference",
    base: "reference/",
    pages: reference,
    description: "BootstrapVue and Bootstrap reference documentation"
  },
  {
    title: "Misc",
    base: "misc/",
    pages: misc,
    description:
      "BootstrapVue changelog, settings, and miscellaneous additional resources"
  }
];

// export const bootstrapVersion = parseVersion(dependencies.bootstrap);
// export const bootstrapIconsVersion = parseFullVersion(
//   devDependencies["bootstrap-icons"]
// );
export const popperVersion = parseVersion(dependencies["popper.js"]);
export const portalVueVersion = parseVersion(dependencies["portal-vue"]);
export const nuxtVersion = parseVersion(devDependencies.nuxt);
export const vueVersion = parseVersion(dependencies.vue);
export const defaultConfig = DEFAULT_CONFIG;
export const bvDescription = description;

export { version };
