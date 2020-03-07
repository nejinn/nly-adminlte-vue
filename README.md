# nly-adminlte-vue

因为很多人用vue封装adminlte的时候，都会引入jq，一句话，用jq就没必要用vue。还会出现各种页面打开jq都没挂载上，尤其是单页面的时候特别明显。
github上很多adminlte-vue都是引入jq封装的。jq操作dom跟vue有本质区别，我是这样认为的。因为vue精髓是数据驱动
所以封装了nly-adminlte-vue。
nly-adminlte-vue是一个基础adminlte3封装的vue组件库。干掉jq，让vue更好的使用adminlte3。

## 进度

目前已经封装完成

### 组件

* 皮肤  theme
* 折叠板 collapse
* 导航栏 navbar
* 导航 nav
* 栅格布局 grid row col
* 容器 container
* 包装容器 warpper
* 文字路由 link
* 按钮 button
* 开关 switch
* 卡片 card
* 小标签 badge
* 下拉菜单 dropdown
* 图标 icon
* 右侧收缩板 control-sidebar
* 罩层 overlay

### 指令

* 左侧导航栏收起指令 v-nly-sidebar-collapse
* 右侧收缩版收起指令 v-nly-control-sidebar-collapse
* 卡片最大化指令 v-nly-card-maximized

## 使用

### 可以直接clone下载项目

```html
git clone https://github.com/nejinn/nly-adminlte-vue.git

npm install 

npm run server

http://localhost:8080
```

### 从npm下载

```html

npm install nly-adminlte-vue

main.js
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
```