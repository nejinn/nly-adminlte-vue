<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-toast</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-card header-variant="dark" header-outline>
            <nly-card-header>
              static toast
            </nly-card-header>
            <nly-card-body>
              <nly-button
                class="mb-2"
                variant="primary"
                @click.native="$nlyaToast.show('toast-static')"
              >
                显示toast
              </nly-button>
              <nly-toast
                id="toast-static"
                title="NlyAdminlteVue"
                static
                no-auto-hide
              >
                我是一个弹窗消息
              </nly-toast>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12">
          <nly-card header-variant="dark" header-outline>
            <nly-card-header>
              append toast
            </nly-card-header>
            <nly-card-body>
              <nly-button
                gradient="purple"
                @click.native="appendToast()"
                button-class="mb-2"
                >显示Toast</nly-button
              >
              <nly-button
                @click.native="appendToast(true)"
                gradient="olive"
                button-class="mb-2"
                >显示 Toast (appended)</nly-button
              >
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12">
          <nly-card header-variant="dark" header-outline>
            <nly-card-header>
              variant toast
            </nly-card-header>
            <nly-card-body>
              <nly-button
                variant="default"
                @click.native="variantToast('default')"
              >
                default
              </nly-button>

              <nly-button
                variant="primary"
                @click.native="variantToast('primary')"
              >
                primary
              </nly-button>

              <nly-button
                variant="secondary"
                @click.native="variantToast('secondary')"
              >
                secondary
              </nly-button>

              <nly-button
                variant="success"
                @click.native="variantToast('success')"
              >
                success
              </nly-button>

              <nly-button variant="info" @click.native="variantToast('info')">
                info
              </nly-button>

              <nly-button
                variant="danger"
                @click.native="variantToast('danger')"
              >
                danger
              </nly-button>

              <nly-button
                variant="warning"
                @click.native="variantToast('warning')"
              >
                warning
              </nly-button>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12">
          <nly-card header-variant="dark" header-outline>
            <nly-card-header>
              variant toast
            </nly-card-header>
            <nly-card-body>
              <nly-button
                @click.native="areaToast('nly-toaster-top-right')"
                gradient="indigo"
                >nly-toaster-top-right</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-top-left')"
                gradient="primary"
                >nly-toaster-top-left</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-top-center')"
                gradient="info"
                >nly-toaster-top-center</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-top-full')"
                gradient="navy"
                >nly-toaster-top-full</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-bottom-right', true)"
                gradient="warning"
                >nly-toaster-bottom-right</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-bottom-left', true)"
                gradient="lime"
                >nly-toaster-bottom-left</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-bottom-center', true)"
                gradient="teal"
                >nly-toaster-bottom-center</nly-button
              >
              <nly-button
                @click.native="areaToast('nly-toaster-bottom-full', true)"
                gradient="pink"
                >nly-toaster-bottom-full</nly-button
              >
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12">
          <nly-card header-variant="dark" header-outline>
            <nly-card-header>
              link toast
            </nly-card-header>
            <nly-card-body>
              <nly-button @click.native="linkHrefToast()" gradient="indigo"
                >link href</nly-button
              >

              <nly-button @click.native="linkToToast()" gradient="pink"
                >link to</nly-button
              >
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    appendToast(append = false) {
      this.num++;
      this.$nlyaToast.toast(`This is toast number ${this.num}`, {
        title: "NlyadminlteVue Toast",
        autoHideDelay: 3000,
        appendToast: append
      });
    },
    variantToast(variant = null) {
      this.$nlyaToast.toast(`颜色 ${variant}`, {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    areaToast(toaster, append = false) {
      this.counter++;
      this.$nlyaToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    },
    linkHrefToast() {
      this.$nlyaToast.toast(`Toast href link`, {
        href: "/nav",
        title: "link href toast"
      });
    },
    linkToToast() {
      this.$nlyaToast.toast(`Toast to link`, {
        to: "nav",
        title: "link to toast"
      });
    }
  }
};
</script>
