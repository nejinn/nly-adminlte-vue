# 1. breadcrumb

> 面包屑导航， 可以带icon图标，支持router-link等跳转

## router-link to

> router-link to路由跳转

```html
<template>
    <nly-breadcrumb :item="itemTo" />
</template>

<script>
export default {
    data(){
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
        }
    }
}
</script>

<!-- nly-breadcrumb.vue -->
```

## router-link href

> 普通路由跳转，会刷新整个页面

```html
<template>
    <nly-breadcrumb :item="itemTo" />
</template>

<script>
export default {
    data(){
        return {
            itemTo: [
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
        }
    }
}
</script>

<!-- nly-breadcrumb.vue -->
```