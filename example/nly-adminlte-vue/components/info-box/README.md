# Infobox

> 信息盒是一个用于展示简单重要数据的卡片组件。

## 总览

信息盒通常用来展示重要数据或者需求醒眼的数据。

``` html
<nly-row>
    <nly-col xs="12" md="3" sm="6">
        <nly-infobox>
            <nly-infobox-icon icon="far fa-envelope" bg-variant="info" />
            <nly-infobox-body number="65378454" text="Messages" />
        </nly-infobox>
    </nly-col>
    <nly-col xs="12" md="3" sm="6">
        <nly-infobox>
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>
    <nly-col xs="12" md="3" sm="6">
        <nly-infobox>
            <nly-infobox-icon icon="far fa-copy" bg-variant="danger" />
            <nly-infobox-body number="65378454" text="Uploads" />
        </nly-infobox>
    </nly-col>
    <nly-col xs="12" md="3" sm="6">
        <nly-infobox>
            <nly-infobox-icon icon="far fa-star" bg-variant="success" />
            <nly-infobox-body>
                <nly-infobox-text>
                    Likes
                </nly-infobox-text>
                <nly-infobox-number>
                    65378454
                </nly-infobox-number>
            </nly-infobox-body>
        </nly-infobox>
    </nly-col>
</nly-row>

<!-- 总览.name -->
<!-- nly-infobox.vue -->
```

## loading 加载状态

可以通过设置 `loading=true` 来开启加载状态

``` html
<nly-infobox loading>
    <nly-infobox-icon icon="far fa-envelope" bg-variant="info" />
    <nly-infobox-body number="65378454" text="Messages" />
</nly-infobox>

<!-- loading.name -->
<!-- nly-infobox.vue -->
```

我们可以设置 `dark=true` 来调整 loading 颜色

``` html
<nly-infobox loading dark>
    <nly-infobox-icon icon="far fa-envelope" bg-variant="info" />
    <nly-infobox-body number="65378454" text="Messages" />
</nly-infobox>

<!-- dark.name -->
<!-- nly-infobox.vue -->
```

### loadingContent 加载状态文字内容

`loading-content` 可以设置加载状态的自定义文本内容。必须在 `loading=true` 的情况下才生效。传入内容会覆盖 `icon-loading` 

``` html
<nly-row>
    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-content="加载中">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-content="加载中" loading-content-tag="h3">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-content="加载中" loading-content-tag="h1" loading-content-class="text-danger">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-content="加载中" loading-content-tag="h1" loading-content-class="text-danger">
        </nly-infobox>
    </nly-col>
</nly-row>

<!-- loading-content.name -->
<!-- nly-infobox.vue -->
```

### loadingIcon 加载状态图标

`loading-icon` 是 `loading=true` 的情况下默认显示的加载图标，默认值为 `fas fa-2x fa-sync-alt fa-spin` ，如果传入 `loading-content` ，会覆盖 `loading-icon` 。

``` html
<nly-row>
    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-icon="nlyfont nly-icon-sr-rementuijian-fill text-xl
">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-icon="nlyfont nly-icon-sr-rementuijian-fill text-xl text-info
">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-icon="nlyfont nly-icon-sr-rementuijian-fill text-xl text-info
">
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="3" sm="6">
        <nly-infobox loading loading-icon="nlyfont nly-icon-sr-rementuijian-fill text-xl text-info" loading-content="加载中">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
        </nly-infobox>
    </nly-col>
</nly-row>

<!-- loading-icon.name -->
<!-- nly-infobox.vue -->
```

### loadingImgSrc 加载状态背景图

`loading-img-src` 可以设置加载状态下背景图。可能会被 `loading-content` 和 `loading-icon` 覆盖。

``` html
<nly-infobox loading loading-img-src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png">
    <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
    <nly-infobox-body number="65378454" text="Bookmarks" />
</nly-infobox>

<!-- loading-img-src.name -->
<!-- nly-infobox.vue -->
```

## body

`nly-infobox-body` 可以接收 `text` , `number` , `progress-value` , `progress-description` 来分别生成一个内置的 `nly-infobox-text` , `nly-infobox-number` , `nly-progress` , `nly-progress-description` 组件。

可以通过对应的 `class` 来自定义他们的式样

``` html
<nly-row>
    <nly-col xs="12" md="6" sm="6">
        <nly-infobox bg-variant="success">
            <nly-infobox-icon icon="far fa-calendar-alt" />
            <nly-infobox-body number="41,410" text="Events" progress-value="60" progress-description="70% Increase in 30 Days" />
        </nly-infobox>
    </nly-col>

    <nly-col xs="12" md="6" sm="6">
        <nly-infobox bg-variant="success">
            <nly-infobox-icon icon="far fa-calendar-alt" />
            <nly-infobox-body>
                <nly-infobox-text>Events</nly-infobox-text>
                <nly-infobox-number>33006689</nly-infobox-number>
                <nly-progress value=70></nly-progress>
                <nly-progress-description>70% Increase in 30 Days</nly-progress-description>
            </nly-infobox-body>
        </nly-infobox>
    </nly-col>
</nly-row>

<!-- body.name -->
<!-- nly-infobox.vue -->
```
