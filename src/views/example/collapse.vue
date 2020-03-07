<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-collapse</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-card header-variant="pink" header-outline>
            <nly-card-header>
              nly-collapse e&
              accordion。这种动画效果放在边侧导航栏中，当开启child-indent时会失效，请使用nly-collapse-noclass
            </nly-card-header>
            <nly-card-body>
              <nly-card>
                <nly-button variant="info" v-nly-toggle.collapseTest1 block>
                  collapseTest1
                </nly-button>
              </nly-card>
              <nly-collapse id="collapseTest1">
                <nly-card>
                  我的标识是collapseTest1 我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                </nly-card>
              </nly-collapse>

              <nly-card>
                <nly-button variant="info" v-nly-toggle.collapseTest2 block>
                  collapseTest2
                </nly-button>
              </nly-card>
              <nly-collapse id="collapseTest2">
                <nly-card>
                  我的标识是collapseTest2 我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                  我是一个非手风琴演示，我跟他们都没关系
                </nly-card>
              </nly-collapse>

              <nly-card>
                <nly-button variant="warning" v-nly-toggle.accordion1 block>
                  accordion1
                </nly-button>
              </nly-card>
              <nly-collapse id="accordion1" accordion="accordion">
                <nly-card>
                  我的标识是id="accordion1" accordion='accordion'
                  我是一个手风琴演示 我是一个手风琴演示 我是一个手风琴演示
                  我是一个手风琴演示 我是一个手风琴演示
                </nly-card>
              </nly-collapse>

              <nly-card>
                <nly-button variant="warning" v-nly-toggle.accordion2 block>
                  accordion2
                </nly-button>
              </nly-card>
              <nly-collapse id="accordion2" accordion="accordion" visible>
                <nly-card>
                  我的标识是id="accordion2" accordion='accordion'
                  我是一个手风琴演示 因为我有visible，所以我最开始就被打开了
                </nly-card>
              </nly-collapse>

              <nly-card>
                <nly-button variant="warning" v-nly-toggle.accordion3 block>
                  accordion3
                </nly-button>
              </nly-card>
              <nly-collapse id="accordion3" accordion="accordion" visible>
                <nly-card>
                  我的标识是id="accordion3" accordion='accordion'
                  我是一个手风琴演示
                </nly-card>
              </nly-collapse>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-card header-variant="pink" header-outline>
            <nly-card-header>
              nly-collapse-noclass e& accordion。
            </nly-card-header>
            <nly-card-body>
              <nly-sidebar-nav class="mt-2" pill child-indent>
                <nly-sidebar-nav-tree
                  target="collapsenoclass1"
                  accordion="collapsenoclass"
                  icon="nav-icon fas nlyfont nly-logo-aperture"
                  link-class="bg-info"
                  visible
                >
                  <template slot="link">
                    accordion1
                  </template>
                  <template slot="linktool">
                    <nly-badge variant="primary" badge-class="right" pill>
                    </nly-badge>
                  </template>

                  <nly-sidebar-nav-item
                    link-class="xxx zzz"
                    class="sss"
                    icon="nav-icon far nlyfont nly-logo-chrome"
                  >
                    i have props visible,so i opened here
                    <nly-badge
                      bg-variant="fuchsia"
                      badge-class="right"
                      size="sm"
                    >
                      NEW
                    </nly-badge>
                  </nly-sidebar-nav-item>
                </nly-sidebar-nav-tree>

                <nly-sidebar-nav-tree
                  target="collapsenoclass2"
                  accordion="collapsenoclass"
                  icon="nav-icon fas nlyfont nly-nav-fill"
                  link-class="bg-info"
                >
                  <template slot="link">
                    accordion2
                  </template>
                  <nly-sidebar-nav-item
                    link-class="xxx zzz"
                    class="sss"
                    icon="nav-icon far nlyfont nly-nav-tool"
                  >
                    上面的有visible props，所以他最开始就打开了
                  </nly-sidebar-nav-item>
                </nly-sidebar-nav-tree>

                <nly-sidebar-nav-tree
                  target="collapsenoclass3"
                  accordion="collapsenoclass"
                  icon="nav-icon fas nlyfont nly-magic-cube"
                  link-class="bg-info"
                >
                  <template slot="link">
                    accordion3
                  </template>
                  <nly-sidebar-nav-item
                    link-class="xxx zzz"
                    class="sss"
                    icon="nav-icon far nlyfont nly-keypad"
                    exact
                  >
                    我跟上面的2个都是accordion='collapse'，所以我们是同一组手风琴
                  </nly-sidebar-nav-item>
                </nly-sidebar-nav-tree>

                <nly-sidebar-nav-item
                  link-class="xxx zzz"
                  class="bg-danger"
                  icon="nav-icon far nlyfont nly-keypad"
                  v-nly-toggle.collapseTest
                >
                  我是一个非手风琴演示
                </nly-sidebar-nav-item>
                <nly-collapse id="collapseTest">
                  我是一个非手风琴演示，我跟他们都没关系
                </nly-collapse>
              </nly-sidebar-nav>
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
      show: false
    };
  }
};
</script>
