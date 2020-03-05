<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-collapse</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-button variant="info" v-nly-toggle.zzz>
        dianji
      </nly-button>
      <NlyCollapse is-nav id="zzz" accordion="aa" collapse-class="xxxx">
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
      </NlyCollapse>
      <nly-button variant="info" v-nly-toggle.aaa>
        dianji
      </nly-button>
      <NlyCollapse is-nav id="aaa" accordion="aa" collapse-class="xxxx">
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
      </NlyCollapse>
      <nly-button variant="info" v-nly-toggle.bbb>
        dianji
      </nly-button>
      <NlyCollapse is-nav id="bbb" collapse-class="xxxx">
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
      </NlyCollapse>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
