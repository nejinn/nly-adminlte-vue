<template>
  <div>
    <nly-button variant="info" v-nly-toggle.zzz>
      dianji
    </nly-button>
    <NlyCollapse is-nav id="zzz" accordion="aa">
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
    <NlyCollapse is-nav id="aaa" accordion="aa">
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
    <NlyCollapse is-nav id="bbb">
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
