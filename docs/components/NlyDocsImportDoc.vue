<template>
  <section
    v-if="components.length > 0 || directives.length > 0"
    class="bd-content"
  >
    <template v-if="components.length > 0">
      <article class="bd-content">
        <nly-docs-anchored-heading
          id="importing-individual-components"
          level="3"
        >
          单个组件导入
        </nly-docs-anchored-heading>

        <p>
          你可以从下表给出的导出路径和导出名称导入单个组件包
        </p>

        <nly-table
          :items="componentImports"
          :fields="componentFields"
          table-class="bv-docs-table"
          responsive="sm"
          head-variant="default"
          bordered
          striped
        >
          <template v-slot:cell(component)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{
              value
            }}</code>
          </template>
          <template v-slot:cell(namedExport)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{
              value
            }}</code>
          </template>
          <template v-slot:cell(importPath)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{
              value
            }}</code>
          </template>
        </nly-table>

        <p><strong>例子</strong></p>
        <pre
          class="hljs language-js text-monospace p-2 notranslate"
          translate="no"
          >{{ componentImportCode }}</pre
        >
      </article>
    </template>

    <template v-if="directives.length > 0">
      <article class="bd-content">
        <nly-docs-anchored-heading
          id="importing-individual-directives"
          level="3"
        >
          单个指令导出
        </nly-docs-anchored-heading>

        <p>
          你可以从下表给出的导出路径和导出名称导入单个指令包
        </p>

        <nly-table
          :items="directiveImports"
          :fields="directiveFields"
          table-class="bv-docs-table"
          responsive="sm"
          head-variant="default"
          bordered
          striped
        >
          <template v-slot:cell(directive)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{
              value
            }}</code>
          </template>
          <template v-slot:cell(namedExport)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{
              value
            }}</code>
          </template>
          <template v-slot:cell(importPath)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{
              value
            }}</code>
          </template>
        </nly-table>

        <p><strong>例子</strong></p>
        <pre
          class="hljs language-js text-monospace p-2 notranslate"
          translate="no"
          >{{ directiveImportCode }}</pre
        >
      </article>
    </template>

    <article class="bd-content">
      <nly-docs-anchored-heading id="importing-as-a-plugin" level="3">
        导出作为插件
      </nly-docs-anchored-heading>

      <p v-if="isComponentRoute">
        导出的插件包括上表中列出的组件<span v-if="directives.length">
          和指令</span
        >. 插件同样包含上表中所有组件的简称.
      </p>
      <p v-else>
        导出的插件包括上表中列出的指令.
      </p>

      <nly-table
        :items="pluginImports"
        :fields="pluginFields"
        table-class="bv-docs-table"
        responsive="sm"
        head-variant="default"
        caption-top
        bordered
        striped
      >
        <template v-slot:cell(namedExport)="{ value }">
          <code class="text-nowrap notranslate" translate="no">{{
            value
          }}</code>
        </template>
        <template v-slot:cell(importPath)="{ value }">
          <code class="text-nowrap notranslate" translate="no">{{
            value
          }}</code>
        </template>
      </nly-table>

      <template v-if="meta.plugins && meta.plugins.length > 0">
        <p>这个插件会自动包括以下插件:</p>
        <ul>
          <li v-for="plugin in meta.plugins" :key="plugin">
            <code class="notranslate" translate="no">{{ plugin }}</code>
          </li>
        </ul>
      </template>

      <p><strong>例子</strong></p>
      <pre
        class="hljs language-js text-monospace p-2 notranslate"
        translate="no"
        >{{ pluginImportCode }}</pre
      >
    </article>
  </section>
</template>

<script>
import startCase from "lodash/startCase";
import hljs from "../utils/hljs";
import { kebabCase } from "../utils";
import NlyDocsAnchoredHeading from "./NlyDocsAnchoredHeading";

const importPath = "nly-adminlte-vue";

const name = "NlyDocsImportDoc";

export default {
  name: name,
  data: function() {
    return {
      componentFields: [
        {
          key: "component",
          label: "组件"
        },
        {
          key: "namedExport",
          label: "导出名称"
        },
        {
          key: "importPath",
          label: "导出路径"
        }
      ],
      directiveFields: [
        {
          key: "directive",
          label: "指令"
        },
        {
          key: "namedExport",
          label: "导出名称"
        },
        {
          key: "importPath",
          label: "导出路径"
        }
      ],
      pluginFields: [
        {
          key: "namedExport",
          label: "导出名称"
        },
        {
          key: "importPath",
          label: "导出路径"
        }
      ]
    };
  },
  components: { NlyDocsAnchoredHeading },
  props: {
    meta: {}
  },
  computed: {
    importPath() {
      return "nly-adminlte-vue";
    },
    isComponentRoute() {
      const name = this.$route.name;
      return name === "docs-components-slug" || name === "docs-icons";
    },
    pluginDir() {
      return this.$route.params.slug || this.meta.slug;
    },
    pluginName() {
      // Directive plugin names are prefixed with `VB`
      const prefix = this.isComponentRoute ? "" : "VNLY";
      return `${prefix}${startCase(this.pluginDir).replace(/\s+/g, "")}Plugin`;
    },
    componentImports() {
      return this.components.map(c => {
        return {
          component: this.componentTag(c),
          namedExport: c,
          importPath: this.importPath
        };
      });
    },
    directiveImports() {
      return this.directives.map(d => {
        return {
          directive: this.directiveAttr(d),
          namedExport: d,
          importPath: this.importPath
        };
      });
    },
    pluginImports() {
      return [
        {
          namedExport: this.pluginName,
          importPath: this.importPath
        }
      ];
    },
    components() {
      let subcomponents = [];
      if (this.meta.components) {
        // We just want the sub-component name
        subcomponents = this.meta.components.map(m => m.component);
      }
      return [].concat(this.meta.component, subcomponents).filter(c => c);
    },
    directives() {
      // We just need the directive name
      return []
        .concat(this.meta.directive, this.meta.directives)
        .filter(d => d)
        .map(d => (typeof d === "string" ? d : d.directive));
    },
    componentImportCode() {
      const firstComponent = this.components[0];
      const firstComponentImport = this.componentImports[0];
      return [
        `import { ${firstComponent} } from '${firstComponentImport.importPath}'`,
        `Vue.component('${this.componentName(
          firstComponent
        )}', ${firstComponent})`
      ].join("\n");
    },
    directiveImportCode() {
      const firstDirective = this.directives[0];
      return [
        `import { ${firstDirective} } from '${importPath}'`,
        "// Note: Vue automatically prefixes the directive name with 'v-'",
        `Vue.directive('${this.directiveName(
          firstDirective
        )}', ${firstDirective})`
      ].join("\n");
    },
    pluginImportCode() {
      return [
        `import { ${this.pluginName} } from 'nly-adminlte-vue'`,
        `Vue.use(${this.pluginName})`
      ].join("\n");
    }
  },
  mounted() {
    // Highlight code blocks
    [...this.$el.querySelectorAll("pre.hljs")].forEach(pre => {
      hljs.highlightBlock(pre);
    });
  },
  methods: {
    componentName(component) {
      return kebabCase(component).replace("{", "-{");
    },
    componentTag(component) {
      return `<${this.componentName(component)}>`;
    },
    directiveName(directive) {
      return kebabCase(directive)
        .replace(/^v-/, "")
        .replace(/^vb-/, "b-");
    },
    directiveAttr(directive) {
      return kebabCase(directive).replace(/^vb-/, "v-b-");
    }
  }
};
</script>
