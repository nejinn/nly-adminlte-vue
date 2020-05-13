<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-dropdown</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
            <nly-dropdown-item>First Action</nly-dropdown-item>
            <nly-dropdown-item>Second Action</nly-dropdown-item>
            <nly-dropdown-item>Third Action</nly-dropdown-item>
            <nly-dropdown-divider></nly-dropdown-divider>
            <nly-dropdown-item active>Active action</nly-dropdown-item>
            <nly-dropdown-item disabled>Disabled action</nly-dropdown-item>
          </nly-dropdown>
        </nly-col>
        <nly-col>
          <div>
            <nly-dropdown text="Button text via Prop">
              <nly-dropdown-item href="#">An item</nly-dropdown-item>
              <nly-dropdown-item href="#">Another item</nly-dropdown-item>
            </nly-dropdown>

            <nly-dropdown>
              <template v-slot:button-content>
                Custom <strong>Content</strong> with <em>HTML</em> via Slot
              </template>
              <nly-dropdown-item href="#">An item</nly-dropdown-item>
              <nly-dropdown-item href="#">Another item</nly-dropdown-item>
            </nly-dropdown>
          </div>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-dropdown
            id="dropdown-header"
            text="Dropdown with header"
            class="m-2"
          >
            <nly-dropdown-header id="dropdown-header-label">
              Dropdown header
            </nly-dropdown-header>
            <nly-dropdown-item-button aria-describedby="dropdown-header-label">
              First item
            </nly-dropdown-item-button>
            <nly-dropdown-item-button aria-describedby="dropdown-header-label">
              Second Item
            </nly-dropdown-item-button>

            <nly-dropdown-footer id="dropdown-footer-label">
              Dropdown footer
            </nly-dropdown-footer>
          </nly-dropdown>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  mounted() {
    this.$root.$on("nly::dropdown::show", nlyEvent => {
      console.log("Dropdown is about to be shown", nlyEvent);
    });
  }
};
</script>
