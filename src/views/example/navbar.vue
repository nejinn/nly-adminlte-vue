<template>
  <nly-container fluid>
    <nly-navbar variant="purple" navbar-class="xxx" expand="md">
      <nly-navbar-brand>
        <nly-navbar-brandimg :src="logo" elevation circle />
        <nly-navbar-brandtext>
          测试
        </nly-navbar-brandtext>
      </nly-navbar-brand>
      <nly-navbar-toggle target="aaa" navbar-class="xxx" />

      <nly-collapse is-nav id="aaa" collapse-class="xxxx">
        <nly-navbar-nav class="xxxxx">
          <nly-nav-item active class="xxx">
            home
          </nly-nav-item>

          <nly-nav-item disabled>
            home
          </nly-nav-item>

          <nly-nav-item>
            home
          </nly-nav-item>
        </nly-navbar-nav>
      </nly-collapse>
    </nly-navbar>
  </nly-container>
</template>

<script>
import logo from "../../assets/img/AdminLTELogo.png";
export default {
  data() {
    return {
      logo
    };
  }
};
</script>
