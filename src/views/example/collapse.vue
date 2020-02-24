<template>
  <div>
    <NlyCollapse :delay="30000">
      <div v-show="show">
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
        <p>
          sssss
        </p>
      </div>
    </NlyCollapse>

    <nly-button variant="info" @click.native="show = !show">
      dianji
    </nly-button>
  </div>
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
