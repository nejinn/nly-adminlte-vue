<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-modal</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="6" lg="3">
          <nly-button v-nly-modal.modal-1 variant="info">点击</nly-button>
          <nly-modal id="modal-1" title="NlyAdminlteVue">
            <p class="my-4">Hello from NlyAdminlteVue!</p>
          </nly-modal>
        </nly-col>
        <nly-col xs="12" md="6" lg="3">
          <div>
            <!-- Using modifiers -->
            <nly-button v-nly-modal.my-modal variant="info" button-class="mr-2"
              >点击</nly-button
            >

            <!-- Using value -->
            <nly-button v-nly-modal="'my-modal'" variant="info"
              >点击</nly-button
            >

            <!-- The modal -->
            <nly-modal id="my-modal">Hello From My NlyAdminlteVue!</nly-modal>
          </div>
        </nly-col>

        <nly-col xs="12" md="6" lg="3">
          <nly-button id="show-btn" @click="showModal" variant="info"
            >Open Modal</nly-button
          >
          <nly-button id="toggle-btn" @click="toggleModal" variant="info"
            >Toggle Modal</nly-button
          >

          <nly-modal ref="my-modal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
              <h3>Hello From My Modal!</h3>
            </div>
            <nly-button
              class="mt-3"
              variant="outlineDanger"
              block
              @click="hideModal"
              >Close Me</nly-button
            >
            <nly-button
              class="mt-2"
              variant="outlineWarning"
              block
              @click="toggleModal"
              >Toggle Me</nly-button
            >
          </nly-modal>
        </nly-col>

        <nly-col xs="12" md="6" lg="3">
          <nly-button v-nly-modal.modal-xl variant="primary">xl </nly-button>
          <nly-button v-nly-modal.modal-lg variant="primary">lg </nly-button>
          <nly-button v-nly-modal.modal-sm variant="primary">sm</nly-button>

          <nly-modal id="modal-xl" size="xl" title="Extra Large Modal"
            >Hello Extra Large Modal!</nly-modal
          >
          <nly-modal id="modal-lg" size="lg" title="Large Modal"
            >Hello Large Modal!</nly-modal
          >
          <nly-modal id="modal-sm" size="sm" title="Small Modal"
            >Hello Small Modal!</nly-modal
          >
        </nly-col>
        <nly-col xs="12" md="6" lg="3">
          <nly-button v-nly-modal.modal-tall variant="info"
            >Launch overflowing modal</nly-button
          >

          <nly-modal id="modal-tall" title="Overflowing Content">
            <p class="my-4" v-for="i in 20" :key="i">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </nly-modal>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-button @click="showModalRoot" ref="btnShow">show</nly-button>
          <nly-button @click="toggleModalRoot" ref="btnToggle"
            >Toggle</nly-button
          >

          <nly-modal id="modal-root">
            <div class="d-block">Hello NlyAdminlteVue</div>
            <nly-button @click="hideModalRoot">hide</nly-button>
            <nly-button @click="toggleModalRoot">Toggle</nly-button>
          </nly-modal>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    showModalRoot() {
      this.$root.$emit("nlya::show::modal", "modal-root", "#btnShow");
    },
    hideModalRoot() {
      this.$root.$emit("nlya::hide::modal", "modal-root", "#btnShow");
    },
    toggleModalRoot() {
      this.$root.$emit("nlya::toggle::modal", "modal-root", "#btnToggle");
    }
  }
};
</script>
