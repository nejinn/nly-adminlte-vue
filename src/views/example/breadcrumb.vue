<template>
  <nly-content-wrapper>
    <nly-breadcrumb>
      <nly-breadcrumb-item text="home" />
      <nly-breadcrumb-item text="breadcrumb" active />
    </nly-breadcrumb>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-card-header>
              array item
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                item to
              </nly-card-text>
              <nly-breadcrumb :item="itemTo" />

              <nly-card-text>
                item href
              </nly-card-text>
              <nly-breadcrumb :item="itemHref" />

              <nly-card-text>
                item icon
              </nly-card-text>
              <nly-breadcrumb :item="itemIcon" />
              <nly-breadcrumb :item="itemIconOnly" />

              <nly-card-text>
                left right
              </nly-card-text>
              <nly-content-header>
                <nly-container fluid>
                  <nly-row row-class="mb-2">
                    <nly-col sm="6">
                      <h1 class="m-0 text-dark">Home</h1>
                    </nly-col>
                    <nly-col sm="6">
                      <nly-breadcrumb
                        :item="itemIconOnly"
                        breadcrumb-class="float-sm-right"
                      />
                    </nly-col>
                  </nly-row>
                </nly-container>
              </nly-content-header>
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
      itemTo: [
        {
          text: "home",
          to: "/"
        },
        {
          text: "collapse",
          to: "/collapse"
        },
        {
          text: "breadcrumb",
          to: "/breadcrumb",
          active: true
        }
      ],
      itemHref: [
        {
          text: "home",
          href: "/"
        },
        {
          text: "collapse",
          href: "/collapse"
        },
        {
          text: "breadcrumb",
          href: "/breadcrumb",
          active: true
        }
      ],
      itemIcon: [
        {
          text: "home",
          to: "/",
          icon: "nlyfont nly-home-fill"
        },
        {
          text: "collapse",
          to: "/collapse",
          icon: "nlyfont nly-outlet"
        },
        {
          text: "breadcrumb",
          to: "/breadcrumb",
          active: true,
          icon: "nlyfont nly-security-fill"
        }
      ],
      itemIconOnly: [
        {
          text: "home",
          to: "/",
          icon: "nlyfont nly-home-fill"
        },
        {
          text: "collapse",
          to: "/collapse"
        },
        {
          text: "breadcrumb",
          to: "/breadcrumb",
          active: true
        }
      ]
    };
  }
};
</script>
