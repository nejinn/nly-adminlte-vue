# Log

> 日志组件是一个用来读取日志展示的组件, 支持实时刷新滚动, 底部锁定, 顶部锁定等功能。

```html
<template>
    <div>
        <nly-row>
            <nly-col>
                <nly-log>
                    <nly-log-header title="job log">
                        <nly-log-tools>
                            <nly-button variant="outlineInfo" size="sm">
                                刷新
                            </nly-button>
                        </nly-log-tools>
                    </nly-log-header>
                    <nly-log-body scrollbar :transition="false">
                        <nly-log-line-tree line="1" duration="30" text="init" title="info" icon="nlyfont nly-icon-arrow-bottom">
                            <nly-log-line line="-1" duration="20" text="测试" title="dsds" />
                        </nly-log-line-tree>
                        <nly-log-line v-for="(item, index) in items" :key="index" :line="index" :duration="item.duration" :text="item.text" :title="item.title" />
                    </nly-log-body>
                </nly-log>
            </nly-col>
        </nly-row>
        <nly-button @click="test" variant="info"> 添加日志看看效果 </nly-button>
</template>
</div>
<script>
    export default {
        data() {
            return {
                items: [{
                    duration: "20s",
                    title: "info",
                    icon: "nlyfont nly-icon-arrow-bottom",
                    text: "$ git clone --depth=50 --branch=[secure] https://github.com/[secure]/nly-adminlte-vue.git [secure]/nly-adminlte-vue"
                }]
            };
        },
        methods: {
            test() {
                this.items.push({
                    duration: "20s",
                    title: "info",
                    text: "$ git clone --depth=50 --branch=[secure] https://github.com/[secure]/nly-adminlte-vue.git [secure]/nly-adminlte-vue"
                });
            }
        }
    };
</script>

<!-- nly-log.vue -->
```
