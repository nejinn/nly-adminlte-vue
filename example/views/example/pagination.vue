<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-pagination</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-card header-variant="navy">
            <nly-card-header>
              分页
            </nly-card-header>
            <nly-card-body>
              <nly-pagination total="10" />
              <nly-pagination total="100" />
              <nly-pagination total="100" sm />
              <nly-pagination total="100" lg />
              <nly-pagination total="100" align="center" />
              <nly-pagination :total="testTotal" align="right" show-pg />
              <input type="number" v-model="testTotal" />
              {{ testTotal }}
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content></nly-content-wrapper
  ></template
>

<script>
export default {
  data() {
    return {
      testTotal: 6
    };
  }
};
</script>
