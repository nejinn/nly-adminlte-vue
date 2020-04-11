import logo from "../..//static/logo.png";
import { version } from "../../content";

export const navbarList = [
  {
    _type: "nly-navbar",
    dark: true,
    navbarClass: "nly-adminlte-vue-docs-header-navbar bd-navbar flex-md-row",
    expand: "md",
    variant: "info",
    _children: [
      {
        _type: "nly-navbar-brand",
        to: "/",
        _children: [
          {
            _type: "nly-navbar-brandimg",
            src: logo,
            elevation: true,
            navbarBrandimgClass:
              "nly-adminlte-vue-docs-header-navbar-brandimg-class"
          },
          {
            _type: "nly-navbar-brandtext",
            _class: "font-weight-normal",
            _name: "NlyAdminlteVue"
          }
        ]
      },
      {
        _type: "nly-navbar-toggle",
        target: "nly-adminlte-vue-docs-navbar",
        navbarClass: "order-1"
      },
      {
        _type: "nly-collapse",
        isNav: true,
        id: "nly-adminlte-vue-docs-navbar",
        collapseClass: "order-3",
        appear: true,
        _children: [
          {
            _type: "nly-navbar-nav",
            _children: [
              {
                _type: "nly-nav-item",
                to: "/docs",
                exact: true,
                exactActiveClass: "active",
                _name: "文档"
              },
              {
                _type: "nly-nav-item",
                to: "/docs/components",
                exact: true,
                exactActiveClass: "active",
                _name: "组件"
              },
              {
                _type: "nly-nav-item",
                to: "/docs/directives",
                exact: true,
                exactActiveClass: "active",
                _name: "指令"
              },
              {
                _type: "nly-nav-item",
                to: "/play",
                exact: true,
                exactActiveClass: "active",
                _name: "在线代码测试"
              }
            ]
          }
        ]
      },
      {
        _type: "nly-navbar-nav",
        _class: "order-1 order-md-3 navbar-no-expand ml-auto",
        _children: [
          {
            _type: "nly-nav-dropdown",
            popup: true,
            dropdownToggle: true,
            menuClass: "border-0",
            size: "sm",
            hover: true,
            _children: [
              { _type: "template", _name: "版本", _slot: "linkcontent" },
              {
                _type: "template",
                _slot: "menucontent",
                _children: [
                  {
                    _name: `最新 V ${version}`,
                    _type: "nly-nav-item",
                    navItem: false,
                    dropdownItem: true,
                    to: "/"
                  }
                ]
              }
            ]
          },
          {
            _type: "nly-nav-item",
            href: "https://github.com/nejinn/nly-adminlte-vue",
            target: "_blank",
            _children: [
              {
                _type: "template",
                _name: "GitHub "
              },
              {
                _type: "nly-icon",
                icon: "nlyfont nly-icon-github"
              }
            ]
          },
          {
            _type: "nly-nav-item",
            href: "https://nejinn.github.io/nly-adminlte-vue-demo",
            target: "_blank",
            _children: [
              {
                _type: "template",
                _name: "Demo "
              },
              {
                _type: "nly-icon",
                icon: "nlyfont nly-icon-project-manage"
              }
            ]
          },
          {
            _type: "nly-nav-item",
            href: "https://nejinn.github.io/nly-adminlte-vue-demo",
            target: "_blank",
            _children: [
              {
                _type: "template",
                _name: "打赏 "
              },
              {
                _type: "nly-icon",
                icon: "nlyfont nly-icon-dashang"
              }
            ]
          }
        ]
      }
    ]
  }
];
