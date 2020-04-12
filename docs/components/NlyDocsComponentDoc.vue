<template>
  <nly-row>
    <nly-col>
      <nly-card
        v-if="component"
        class="content"
        header-outline
        header-variant="pink"
      >
        <nly-card-header>
          <nly-card-tool>
            <nly-button
              v-if="githubURL"
              variant="outlinePrimary"
              size="sm"
              :href="githubURL"
              target="_blank"
            >
              查看源码
            </nly-button>
          </nly-card-tool>
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentNameClean}`"
            level="3"
          >
            <code class="notranslate bigger" translate="no">{{ tag }}</code>
          </nly-docs-anchored-heading>
          <nly-badge v-if="version" variant="success"
            >v{{ version }}+</nly-badge
          >
          <nly-badge
            tag="a"
            v-if="componentFunctional"
            bg-variant="pink"
            target="_blank"
            href="https://vuejs.org/v2/guide/render-function.html#Functional-Components"
          >
            函数式组件（Functional component）
          </nly-badge>
        </nly-card-header>

        <ul class="component-ref-mini-toc my-3">
          <li v-if="aliases && aliases.length > 0">
            <a :href="`#comp-ref-${componentName}-aliases`">
              <code class="notranslate" translate="no">{{ tag }}</code>
              Component aliases
            </a>
          </li>
          <li v-if="propsItems && propsItems.length > 0">
            <a :href="`#comp-ref-${componentName}-props`">
              <code class="notranslate" translate="no">{{ tag }}</code>
              Properties
            </a>
          </li>
          <li v-if="componentVModel">
            <a :href="`#comp-ref-${componentName}-v-model`">
              <code class="notranslate" translate="no">{{ tag }}</code> v-model
            </a>
          </li>
          <li v-if="slots && slots.length > 0">
            <a :href="`#comp-ref-${componentName}-slots`">
              <code class="notranslate" translate="no">{{ tag }}</code> Slots
            </a>
          </li>
          <li v-if="events && events.length > 0">
            <a :href="`#comp-ref-${componentName}-events`">
              <code class="notranslate" translate="no">{{ tag }}</code> Events
            </a>
          </li>
          <li v-if="rootEventListeners && rootEventListeners.length > 0">
            <a :href="`#comp-ref-${componentName}-rootEventListeners`">
              <code class="notranslate" translate="no">{{ tag }}</code>
              <code class="notranslate" translate="no">$root</code> Event
              listeners
            </a>
          </li>
        </ul>

        <nly-card-body v-if="aliases && aliases.length > 0" class="bd-content">
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentName}-aliases`"
            level="4"
            class="mb-3"
          >
            Component aliases
          </nly-docs-anchored-heading>
          <p>
            <code class="notranslate" translate="no">{{ tag }}</code> can also
            be used via the following aliases:
          </p>
          <ul>
            <li v-for="alias in aliases" :key="alias">
              <code class="notranslate" translate="no"
                >&lt;{{ kebabCase(alias) }}&gt;</code
              >
            </li>
          </ul>
          <div class="alert alert-info">
            <p class="mb-0 small">
              Note: component aliases are only available when importing all of
              nly-adminlte-vue or using the component group plugin.
            </p>
          </div>
        </nly-card-body>

        <nly-card-body
          v-if="propsItems && propsItems.length > 0"
          class="bd-content"
        >
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentName}-props`"
            level="4"
            class="mb-3"
          >
            prop参数
          </nly-docs-anchored-heading>
          <div class="table-responsive">
            <nly-table
              :items="propsItems"
              :fields="propsFields"
              primary-key="prop"
              table-class="bv-docs-table"
              responsive="sm"
              sort-icon-left
              bordered
              striped
            >
              <template v-slot:cell(prop)="{ value, item }">
                <code class="text-nowrap notranslate" translate="no">{{
                  value
                }}</code
                ><br />
                <nly-badge v-if="item.required" variant="info"
                  >Required</nly-badge
                >
                <nly-badge
                  v-if="item.settings"
                  variant="dark"
                  href="/docs/misc/settings"
                  title="Configurable in settings"
                  >Settings</nly-badge
                >
                <nly-badge v-if="item.version" variant="secondary"
                  >v{{ item.version }}+</nly-badge
                >
                <nly-badge v-if="item.isVModel" variant="primary"
                  >v-model</nly-badge
                >
                <nly-badge v-if="item.xss" variant="warning"
                  >Use with caution</nly-badge
                >
                <nly-badge v-if="item.deprecated" variant="danger"
                  >Deprecated</nly-badge
                >
                <nly-badge v-else-if="item.deprecation" variant="warning"
                  >Deprecation</nly-badge
                >
              </template>
              <template v-slot:cell(type)="{ value }">
                <span v-html="value"></span>
              </template>
              <template v-slot:cell(defaultValue)="{ value }">
                <code
                  v-if="value"
                  class="word-wrap-normal notranslate"
                  translate="no"
                  >{{ value }}</code
                >
              </template>
              <template v-slot:row-details="{ item }">
                <p
                  v-if="typeof item.deprecated === 'string'"
                  class="mb-1 small"
                >
                  {{ item.deprecated }}
                </p>
                <p
                  v-if="typeof item.deprecation === 'string'"
                  class="mb-1 small"
                >
                  {{ item.deprecation }}
                </p>
              </template>
            </nly-table>
          </div>
          <div v-if="hasRouterProps" class="alert alert-info">
            <p class="mb-0 small">
              <code class="notranslate" translate="no">{{ tag }}</code> supports
              generating
              <code class="notranslate" translate="no"
                >&lt;router-link&gt;</code
              >
              or
              <code class="notranslate" translate="no">&lt;nuxt-link&gt;</code>
              component (if using Nuxt.js). For more details on the router link
              (or nuxt link) specific props, see the
              <nly-link to="/docs/reference/router-links" class="alert-link"
                >Router support</nly-link
              >
              reference section.
            </p>
          </div>
          <div v-if="hasHtmlProps" class="alert alert-warning">
            <p class="mb-0 small">
              <strong>Caution:</strong> Props that support HTML strings (<code
                class="notranslate"
                translate="no"
                >*-html</code
              >) can be vulnerable to
              <nly-link
                href="https://en.wikipedia.org/wiki/Cross-site_scripting"
                class="alert-link"
                target="_blank"
              >
                Cross Site Scripting (XSS) attacks
              </nly-link>
              when passed raw user supplied values. You must properly
              <nly-link
                href="https://en.wikipedia.org/wiki/HTML_sanitization"
                class="alert-link"
                target="_blank"
              >
                sanitize
              </nly-link>
              the user input first!
            </p>
          </div>
        </nly-card-body>

        <article v-if="componentVModel" class="bd-content">
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentName}-v-model`"
            level="4"
            class="mb-3"
          >
            <code class="notranslate" translate="no">v-model</code>
          </nly-docs-anchored-heading>
          <nly-table-lite
            :items="[componentVModel]"
            :fields="[{ key: 'prop', label: 'Property' }, 'event']"
            table-class="bv-docs-table"
            responsive="sm"
            bordered
            striped
          >
            <template v-slot:cell(prop)="{ value }">
              <code class="notranslate" translate="no">{{
                kebabCase(value)
              }}</code>
            </template>
            <template v-slot:cell(event)="{ value }">
              <code class="notranslate" translate="no">{{ value }}</code>
            </template>
          </nly-table-lite>
        </article>

        <article v-if="slots && slots.length > 0" class="bd-content">
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentName}-slots`"
            level="4"
            class="mb-3"
          >
            Slots
          </nly-docs-anchored-heading>
          <nly-table
            :items="slotsItems"
            :fields="slotsFields"
            primary-key="name"
            table-class="bv-docs-table"
            responsive="sm"
            sort-icon-left
            bordered
            striped
          >
            <template v-slot:cell(name)="{ value, item }">
              <code class="text-nowrap notranslate" translate="no">{{
                value
              }}</code>
              <nly-badge v-if="item.version" variant="secondary"
                >v{{ item.version }}+</nly-badge
              >
            </template>
            <template
              v-slot:cell(scope)="{ value, detailsShowing, toggleDetails }"
            >
              <nly-button
                v-if="value"
                variant="outline-info"
                size="sm"
                class="py-0"
                @click="toggleDetails()"
              >
                {{ detailsShowing ? "Hide scope" : "Show scope" }}
              </nly-button>
              <span v-else>No</span>
            </template>
            <template v-slot:row-details="{ item }">
              <nly-table-lite
                :items="item.scope"
                :fields="[
                  { key: 'prop', label: 'Property' },
                  'type',
                  'description'
                ]"
                primary-key="prop"
                class="m-0"
                dark
                caption-top
                small
              >
                <template v-slot:thead-top>
                  <nly-tr>
                    <nly-th colspan="3" class="text-center">
                      <code class="text-nowrap notranslate" translate="no">{{
                        item.name
                      }}</code>
                      Slot scoped properties
                    </nly-th>
                  </nly-tr>
                </template>
                <template v-slot:cell(prop)="{ value, item }">
                  <code class="text-nowrap notranslate" translate="no">{{
                    value
                  }}</code>
                  <nly-badge v-if="item.version" variant="secondary"
                    >v{{ item.version }}+</nly-badge
                  >
                </template>
                <template v-slot:cell(type)="{ value }">
                  <code class="text-nowrap notranslate" translate="no">{{
                    value || "Any"
                  }}</code>
                </template>
              </nly-table-lite>
            </template>
          </nly-table>
        </article>

        <article v-if="events && events.length > 0" class="bd-content">
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentName}-events`"
            level="4"
            class="mb-3"
          >
            Events
          </nly-docs-anchored-heading>
          <nly-table
            :items="events"
            :fields="eventsFields"
            primary-key="event"
            table-class="bv-docs-table"
            responsive="sm"
            bordered
            striped
          >
            <template v-slot:cell(event)="{ value, item }">
              <code class="notranslate" translate="no">{{ value }}</code>
              <nly-badge v-if="item.version" variant="secondary"
                >v{{ item.version }}+</nly-badge
              >
            </template>
            <template v-slot:cell(args)="{ value, item }">
              <ol v-if="value && value.length > 0" class="list-unstyled mb-0">
                <li
                  v-for="(arg, idx) in value"
                  :key="`event-${item.event}-${arg.arg || idx}`"
                >
                  <template v-if="arg.arg">
                    <code class="notranslate" translate="no">{{
                      arg.arg
                    }}</code>
                    -
                  </template>
                  <span v-if="arg.description">{{ arg.description }}</span>
                </li>
              </ol>
            </template>
          </nly-table>
        </article>

        <article
          v-if="rootEventListeners && rootEventListeners.length > 0"
          class="bd-content"
        >
          <nly-docs-anchored-heading
            :id="`comp-ref-${componentName}-rootEventListeners`"
            level="4"
            class="mb-3"
          >
            <code class="notranslate" translate="no">$root</code> event
            listeners
          </nly-docs-anchored-heading>
          <p>
            You can control
            <code class="notranslate" translate="no">{{ tag }}</code> by
            emitting the following events on
            <samp class="notranslate" translate="no">$root</samp>:
          </p>
          <nly-table-lite
            :items="rootEventListeners"
            :fields="rootEventListenersFields"
            primary-key="event"
            table-class="bv-docs-table"
            responsive="sm"
            bordered
            striped
          >
            <template v-slot:cell(event)="{ value, item }">
              <code class="text-nowrap notranslate" translate="no">{{
                value
              }}</code>
              <nly-badge v-if="item.version" variant="secondary"
                >v{{ item.version }}+</nly-badge
              >
            </template>
            <template v-slot:cell(args)="{ value, item }">
              <p
                v-for="arg in value"
                :key="`event-${item.event}-${arg.arg ? arg.arg : 'none'}`"
                class="mb-1"
              >
                <template v-if="arg.arg">
                  <code class="text-nowrap notranslate" translate="no">{{
                    arg.arg
                  }}</code>
                  <span v-if="arg.description"> - {{ arg.description }}</span>
                </template>
              </p>
            </template>
          </nly-table-lite>
        </article>
      </nly-card>
    </nly-col>
  </nly-row>
</template>

<style scoped>
h3::before {
  display: block;
  height: 1.25rem;
  margin-top: -1.25rem;
  content: "";
}

code.bigger {
  font-size: 105%;
}

ul.component-ref-mini-toc:empty {
  display: none;
}

/deep/ .word-wrap-normal {
  white-space: normal !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
}
</style>

<script>
import Vue from "vue";
// Fallback descriptions for common props (mainly router-link props)
import { kebabCase } from "../utils";
import NlyDocsAnchoredHeading from "./NlyDocsAnchoredHeading";

const name = "NlyDocsComponentDoc";

export default {
  name: name,
  components: { NlyDocsAnchoredHeading },
  props: {
    component: {},
    srcComponent: {
      // This prop is used only when the above `component` is a
      // "fake" component. This prop specifies a "real" component
      // to use when grabbing the component definition options
    },
    propsMeta: {
      // For getting prop descriptions
      type: Array,
      default: () => []
    },
    slots: {
      type: Array,
      default: () => []
    },
    events: {
      type: Array,
      default: () => []
    },
    rootEventListeners: {
      type: Array,
      default: () => []
    },
    aliases: {
      type: Array,
      default: () => []
    },
    version: {
      type: String,
      default: null
    }
  },
  computed: {
    componentOptions() {
      const component =
        Vue.options.components[this.srcComponent || this.component];
      if (!component) {
        return {};
      }

      let options = {};
      if (!component.options && typeof component === "function") {
        // Async component that hans't been resolved yet
        component(cmp => {
          if (Object.prototype.toString.call(cmp) === "[object Object]") {
            options = { ...cmp };
          } else if (cmp && cmp.options) {
            options = cmp.options;
          }
        });
      } else {
        // Regular component
        options = component.options || {};
      }

      return options;
    },
    componentFunctional() {
      return this.componentOptions.functional;
    },
    componentVModel() {
      const model = this.componentOptions.model || {};
      return model.prop && model.event ? model : false;
    },
    componentProps() {
      return this.componentOptions.props || {};
    },
    hasRouterProps() {
      return this.propsItems.some(p => {
        return (
          p.prop === "to" ||
          p.prop === "split-to" ||
          p.prop === "exact-active-class"
        );
      });
    },
    hasHtmlProps() {
      return this.propsItems.some(p => p.xss);
    },
    componentPropsMetaObj() {
      // Returns the propsMeta array in object format for easy lookups
      return this.propsMeta.reduce((obj, propMeta) => {
        if (propMeta.prop) {
          obj[propMeta.prop] = propMeta;
        }
        return obj;
      }, {});
    },
    propsFields() {
      const sortable = this.propsItems.length >= 10;
      const hasDescriptions = this.propsItems.some(p => p.description);
      return [
        { key: "prop", label: "props", sortable },
        { key: "type", label: "类型" },
        { key: "defaultValue", label: "默认值" },
        ...(hasDescriptions ? [{ key: "description", label: "描述" }] : [])
      ];
    },
    eventsFields() {
      return [
        { key: "event", label: "Event" },
        { key: "args", label: "Arguments" },
        { key: "description", label: "Description" }
      ];
    },
    rootEventListenersFields() {
      return [
        { key: "event", label: "Event" },
        { key: "args", label: "Arguments" },
        { key: "description", label: "Description" }
      ];
    },
    slotsFields() {
      const sortable = this.slotsItems.length >= 10;
      const hasScopedSlots = this.slots.some(s => s.scope);
      return [
        { key: "name", label: "Slot Name", sortable },
        ...(hasScopedSlots ? [{ key: "scope", label: "Scoped" }] : []),
        { key: "description", label: "Description" }
      ];
    },
    propsItems() {
      const props = this.componentProps;
      const propsMetaObj = this.componentPropsMetaObj;
      return Object.keys(props).map(prop => {
        const p = props[prop];
        const meta = propsMetaObj[prop] || {};

        let type = p.type;
        let types = [];
        if (Array.isArray(type)) {
          types = type.map(type => type.name);
        } else {
          types = type && type.name ? [type.name] : ["Any"];
        }
        type = types
          .map(
            type => `<code class="notranslate" translate="no">${type}</code>`
          )
          .join(" or ");

        let defaultValue = p.default;
        if (defaultValue instanceof Function && !Array.isArray(defaultValue)) {
          defaultValue = defaultValue();
        }
        defaultValue =
          typeof defaultValue === "undefined"
            ? ""
            : String(JSON.stringify(defaultValue, undefined, 1)).replace(
                /"/g,
                "'"
              );

        const description =
          typeof meta.description === "undefined" ? "" : meta.description;

        const settings = meta.settings || false;
        const version = typeof meta.version === "undefined" ? "" : meta.version;

        return {
          prop: kebabCase(prop),
          type,
          defaultValue,
          required: p.required || false,
          description: description || "",
          settings,
          version,
          xss: /[a-z]Html$/.test(prop),
          isVModel: this.componentVModel && this.componentVModel.prop === prop,
          deprecated: p.deprecated || false,
          deprecation: p.deprecation || false,
          _showDetails:
            typeof p.deprecated === "string" ||
            typeof p.deprecation === "string"
        };
      });
    },
    slotsItems() {
      // We use object spread here so that `_showDetails` doesn't
      // mutate the original array objects
      return this.slots ? this.slots.map(s => ({ ...s })) : [];
    },
    componentName() {
      return kebabCase(this.component).replace("{", "-{");
    },
    componentNameClean() {
      return this.componentName.replace("{", "").replace("}", "");
    },
    tag() {
      return `<${this.componentName}>`;
    },
    githubURL() {
      const name = this.componentName.replace(/^nly-/, "");
      if (name.indexOf("{") !== -1) {
        // Example component (most likely an auto generated component)
        return "";
      }
      const base =
        "https://github.com/nejinn/nly-adminlte-vue/tree/master/src/components";
      const slug = this.$route.params.slug;
      // Always point to the `.js` file (which may import a `.vue` file)
      return `${base}/${slug}/${name}.js`;
    }
  },
  methods: {
    kebabCase
  }
};
</script>
