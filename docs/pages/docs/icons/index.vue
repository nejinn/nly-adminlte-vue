<template>
  <NlyDocsMain>
    <NlyDocsSection tag="header" v-html="titleLead"></NlyDocsSection>
    <NlyDocsQuickLinks key="quick-/docs"></NlyDocsQuickLinks>
    <NlyDocsSection>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card fill>
              <nly-tab title="Unicode" active>
                <div v-html="iconUnicode" />
              </nly-tab>
              <nly-tab title="Font class">
                <nly-card-text>
                  <div v-html="iconFontClass" />
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>
      <nly-row><nly-col v-html="body"></nly-col></nly-row>
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
import meta from "../../../../src/icons/package.json";
import readme from "../../../../src/icons/README.md";
import { iconUnicode, iconFontClass } from "./base";

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
      iconUnicode,
      iconFontClass
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
