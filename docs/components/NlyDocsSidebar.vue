<template>
  <nav
    id="bd-docs-nav"
    class="bd-links d-none d-md-block"
    aria-label="Main navigation"
  >
    <nly-link to="/" exact router-tag="div" active-class="active">
      <nly-link to="/" exact class="bd-toc-link" active-class="">首页</nly-link>
    </nly-link>

    <nly-link
      v-for="group in nav"
      :key="group.base"
      :to="buildUrl('/docs/', [group.base])"
      :exact="group.exact"
      router-tag="div"
      class="bd-toc-item"
      active-class="active"
    >
      <nly-link
        :to="buildUrl('/docs/', [group.base])"
        :exact="group.exact"
        class="bd-toc-link"
        active-class=""
      >
        {{ group.title }}
        <nly-badge
          v-if="group.new"
          tag="small"
          variant="success"
          class="text-uppercase"
          >新增</nly-badge
        >
        <nly-badge
          v-if="group.breaking"
          tag="small"
          variant="danger"
          class="text-uppercase"
          >Breaking change</nly-badge
        >
        <nly-badge
          v-if="group.beta"
          tag="small"
          variant="warning"
          class="text-uppercase"
          >测试</nly-badge
        >
      </nly-link>

      <nly-nav class="bd-sidenav">
        <nly-link
          v-for="page in group.pages"
          :key="page.title"
          :to="buildUrl('/docs/', [group.base, page.slug])"
          router-tag="li"
          class="nav-item"
          active-class="active bd-sidenav-active"
        >
          <nly-link
            :to="buildUrl('/docs/', [group.base, page.slug])"
            :exact="group.exact"
            class="nav-link"
            active-class=""
          >
            {{ page.title }}{{ page.subtitle ? " - " : "" }}{{ page.subtitle }}
            <nly-badge
              v-if="page.new"
              tag="small"
              variant="success"
              class="text-uppercase"
              >新增</nly-badge
            >
            <nly-badge
              v-if="page.enhanced"
              tag="small"
              variant="info"
              class="text-uppercase"
              >Enhanced</nly-badge
            >
            <nly-badge
              v-if="page.breaking"
              tag="small"
              variant="danger"
              class="text-uppercase"
              >Breaking change</nly-badge
            >
            <nly-badge
              v-if="page.beta"
              tag="small"
              variant="warning"
              class="text-uppercase"
              >测试</nly-badge
            >
          </nly-link>
        </nly-link>
      </nly-nav>
    </nly-link>

    <nly-link to="/play" exact router-tag="div" active-class="active">
      <nly-link to="/play" exact class="bd-toc-link" active-class=""
        >在线测试代码</nly-link
      >
    </nly-link>
  </nav>
</template>

<script>
import { nav } from "~/content";

export default {
  name: "NlyDocsSidebar",
  data() {
    return { nav };
  },
  methods: {
    buildUrl(basePath, parts = []) {
      return `${basePath}/${parts.join("/")}`.replace(
        /(https?:\/\/)|(\/)+/g,
        "$1$2"
      );
    }
  }
};
</script>
