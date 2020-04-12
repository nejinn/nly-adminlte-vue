<template>
  <nly-render-function flat :content-to-render="navbarList" />
</template>

<style>
.nly-adminlte-vue-docs-header-navbar {
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25),
    inset 0 -1px 5px rgba(0, 0, 0, 0.25);
  /* left: 0;
  position: fixed;
  right: 0;
  z-index: 1037; */
}

.nly-adminlte-vue-docs-header-navbar-brandimg-class {
  border-radius: 10%;
  margin-right: 0.5rem;
}
</style>

<script>
import { navbarList } from "./config/header-navbar";
const name = "NlyDocsHeader";
export default {
  name: name,
  data() {
    return {
      navbarList
    };
  }
};
</script>
