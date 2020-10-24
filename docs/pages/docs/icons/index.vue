<template>
  <NlyDocsMain>
    <NlyDocsSection tag="header" v-html="titleLead"></NlyDocsSection>
    <NlyDocsQuickLinks key="quick-/docs"></NlyDocsQuickLinks>
    <NlyDocsSection>
      <h2 id="Base-icons" class="nly-no-focus-ring">
        <span class="bd-content-title"
          >Base Icons<a
            class="anchorjs-link"
            href="#Base-icons"
            aria-labelledby="Base-icons"
          ></a
        ></span>
      </h2>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card fill>
              <nly-tab title="Unicode" active>
                <div v-html="baseIconUnicode" />
              </nly-tab>
              <nly-tab title="Font class">
                <nly-card-text>
                  <div v-html="baseIconFontClass" />
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>
      <nly-row><nly-col v-html="body"></nly-col></nly-row>

      <h2 id="Base-fill-icons" class="nly-no-focus-ring">
        <span class="bd-content-title"
          >Base Fill Icons<a
            class="anchorjs-link"
            href="#Base-fill-icons"
            aria-labelledby="Base-fill-icons"
          ></a
        ></span>
      </h2>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card fill>
              <nly-tab title="Unicode" active>
                <div v-html="baseFillIconUnicode" />
              </nly-tab>
              <nly-tab title="Font class">
                <nly-card-text>
                  <div v-html="baseFillIconFontClass" />
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>

      <h2 id="nav-icons" class="nly-no-focus-ring">
        <span class="bd-content-title"
          >Nav Icons<a
            class="anchorjs-link"
            href="#nav-icons"
            aria-labelledby="nav-icons"
          ></a
        ></span>
      </h2>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card fill>
              <nly-tab title="Unicode" active>
                <div v-html="navIconUnicode" />
              </nly-tab>
              <nly-tab title="Font class">
                <nly-card-text>
                  <div v-html="navIconFontClass" />
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>

      <h2 id="logo-icons" class="nly-no-focus-ring">
        <span class="bd-content-title"
          >Logo Icons<a
            class="anchorjs-link"
            href="#logo-icons"
            aria-labelledby="logo-icons"
          ></a
        ></span>
      </h2>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card fill>
              <nly-tab title="Unicode" active>
                <div v-html="logoIconUnicode" />
              </nly-tab>
              <nly-tab title="Font class">
                <nly-card-text>
                  <div v-html="logoIconFontClass" />
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>

      <h2 id="sr-icons" class="nly-no-focus-ring">
        <span class="bd-content-title"
          >Scientific Research<a
            class="anchorjs-link"
            href="#sr-icons"
            aria-labelledby="sr-icons"
          ></a
        ></span>
      </h2>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card fill>
              <nly-tab title="Unicode" active>
                <div v-html="srIconUnicode" />
              </nly-tab>
              <nly-tab title="Font class">
                <nly-card-text>
                  <div v-html="srIconFontClass" />
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>
    </NlyDocsSection>
  </NlyDocsMain>
</template>

<style>
@import "../../../../example/assets/nly-adminlte-vue/icon/demo.css";

.dib {
  display: inline-block;
}

.dib-box .dib {
  vertical-align: top;
  font-size: 12px;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: inherit;
}

.icon_lists {
  padding-left: 0;
}
</style>

<script>
import { parseReadme } from "~/utils";
import NlyDocsMain from "~/components/nly-docs-main";
import NlyDocsQuickLinks from "~/components/NlyDocsQuickLinks";
import NlyDocsSection from "~/components/nly-docs-section";
import docsMixin from "~/plugins/docs-mixin";
import { defaultConfig } from "~/content";
import meta from "../../../../example/nly-adminlte-vue/icons/package.json";
import readme from "../../../../example/nly-adminlte-vue/icons/README.md";
import {
  baseIconUnicode,
  baseIconFontClass,
  baseFillIconUnicode,
  baseFillIconFontClass,
  navIconUnicode,
  navIconFontClass,
  logoIconUnicode,
  logoIconFontClass,
  srIconUnicode,
  srIconFontClass
} from "./base";

const { titleLead, body } = parseReadme(readme);

export default {
  name: "BDVDocs",
  layout: "docs",
  components: {
    NlyDocsMain,
    NlyDocsQuickLinks,
    NlyDocsSection
  },
  mixins: [docsMixin],
  data() {
    return {
      defaultConfig,
      titleLead,
      body,
      readme,
      baseIconUnicode,
      baseIconFontClass,
      baseFillIconUnicode,
      baseFillIconFontClass,
      navIconUnicode,
      navIconFontClass,
      logoIconUnicode,
      logoIconFontClass,
      srIconUnicode,
      srIconFontClass
    };
  },
  computed: {
    meta() {
      return meta;
    }
  }
};
</script>

};
