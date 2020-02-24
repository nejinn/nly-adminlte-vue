<template>
  <nly-container fluid>
    <nly-navbar variants="teal" navbar-class="xxx">
      <nly-navbar-nav>
        <nly-navbar-brand>
          <nly-navbar-brandimg :src="logo" elevation circle />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
      </nly-navbar-nav>
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
