<template>
  <div class="btn-group">
    <button type="button" class="btn btn-info">Action</button>
    <button
      type="button"
      class="btn btn-info dropdown-toggle dropdown-hover dropdown-icon"
      data-toggle="dropdown"
    >
      <span class="sr-only">Toggle Dropdown</span>
      <div class="dropdown-menu dropdown-menu-1" role="menu" v-show="false">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this);
  }
};
</script>

<style>
.dropdown-menu-1 {
  display: block;
}
</style>
