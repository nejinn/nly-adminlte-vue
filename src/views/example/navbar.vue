<template>
  <nly-container fluid>
    <nly-navbar variant="lightlight" navbar-class="xxx" expand="md">
      <nly-navbar-brand>
        <nly-navbar-brandimg :src="logo" elevation circle />
        <nly-navbar-brandtext>
          测试
        </nly-navbar-brandtext>
      </nly-navbar-brand>
      <nly-navbar-toggle target="aaa" navbar-class="xxx" />

      <nly-collapse is-nav id="aaa" collapse-class="xxxx">
        <nly-navbar-nav>
          <li class="nav-item">
            <a href="index3.html" class="nav-link">
              Home
            </a>

            <nly-link href="333.html">
              home
            </nly-link>
          </li>
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
