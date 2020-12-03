<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-badge</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <ul class="list-unstyled mb-0 d-flex flex-wrap align-items-center">
            <nly-badge tag="li">
              ssss
              <nly-button-close class="nly-tag-remove" />
            </nly-badge>
            <nly-badge tag="li">
              ssss
              <nly-button-close class="nly-tag-remove" />
            </nly-badge>
            <li class="flex-grow-1">
              <input
                class="w-100 flex-grow-1 p-0 m-0 bg-transparent border-0"
                style="outline: 0px; min-width: 5rem;"
              />
            </li>
          </ul>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      status: "not_accepted"
    };
  }
};
</script>
