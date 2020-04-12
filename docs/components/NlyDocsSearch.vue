<template>
  <form
    role="search"
    class="bd-search d-flex align-items-center"
    @submit.stop.prevent
  >
    <span
      class="algolia-autocomplete"
      style="position: relative; display: inline-block; direction: ltr;"
      ><input
        id="bd-search-input"
        type="search"
        placeholder="Search..."
        autocomplete="off"
        class="form-control ds-input"
        aria-label="Search docs"
        spellcheck="false"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded="false"
        aria-owns="algolia-autocomplete-listbox-4"
        dir="auto"
        style="position: relative; vertical-align: top;"/>
      <pre
        aria-hidden="true"
        style='position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;'
      ></pre>
      <span
        class="ds-dropdown-menu"
        role="listbox"
        id="algolia-autocomplete-listbox-4"
        style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"
        ><div class="ds-dataset-5"></div></span
    ></span>
  </form>
</template>

<script>
import { relativeUrl } from "../utils";

let scriptsInjected = false;

export default {
  name: "NlyDocsSearch",
  data() {
    return {
      docsearch: null
    };
  },
  mounted() {
    this.loadDocsearch().then(this.initDocsearch);
  },
  methods: {
    async loadDocsearch() {
      if (scriptsInjected) {
        return;
      }

      const cdnBaseUrl = "//cdn.jsdelivr.net/docsearch.js/2/";
      const $body = document.body;

      // Load JS
      const loadJs = new Promise(resolve => {
        const $script = document.createElement("script");
        $script.setAttribute("type", "text/javascript");
        $script.setAttribute("src", `${cdnBaseUrl}docsearch.min.js`);
        $body.appendChild($script);
        $script.onload = resolve;
      });

      // Load CSS
      const loadCss = new Promise(resolve => {
        const $link = document.createElement("link");
        $link.setAttribute("rel", "stylesheet");
        $link.setAttribute("type", "text/css");
        $link.setAttribute("href", `${cdnBaseUrl}docsearch.min.css`);
        $body.appendChild($link);
        $link.onload = resolve;
      });

      await Promise.all([loadJs, loadCss]);

      scriptsInjected = true;
    },
    initDocsearch() {
      if (this.docsearch) {
        return;
      }
      // Initialize docsearch
      this.docsearch = window.docsearch({
        apiKey: "c816d3054b015320f0cfb40042f7e2bc",
        indexName: "bootstrap-vue",
        inputSelector: "#bd-search-input",
        transformData(hits) {
          return hits.map(function(hit) {
            // Transform URL to a relative URL
            hit.url = relativeUrl(hit.url);

            return hit;
          });
        },
        // Set debug to `true` if you want to inspect the dropdown
        debug: false
      });
    }
  }
};
</script>
