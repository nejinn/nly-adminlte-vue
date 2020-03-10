# 1. Dropdown

<!-- TOC -->

- [1. Dropdown](#1-dropdown)
    - [1.1. nly-dropdown](#11-nly-dropdown)
        - [1.1.1. props](#111-props)
    - [1.2. nly-dropdown-menu](#12-nly-dropdown-menu)
        - [1.2.1. props](#121-props)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->

## 1.1. nly-dropdown

### 1.1.1. props

> 接受所有nly-botton的参数

参数 | 类型 |  默认值 | 描述
-|-|-|-
vertical | Boolean | false | 是否垂直，默认水平
dropdown-size | String |  | 大小，会覆盖nly-botton组件size，可选sm，lg
dropdown-tag | div |  | 标签
dropdown-toggle | Boolean |  | 开启下拉icon，默认不开启
dropdown-icon | Boolean | | 下拉icon与文字对齐，默认不开启
text | String |  | 文字内容
toggle-text | String | Nly Toggle Dropdown | toggle文字内容
dropdown-class | String |  | 自定义css式样
data-show | String |  | 触发的显示的下拉内容，对应为nly-dropdown-menu的id prop，必传
placement | String | auto | 下拉内容出现的位置，默认auto，会选择最节省空间的地方显示。可选  "auto"，auto-start，"auto-end""top"，"top-start"，"top-end"，"bottom"，"bottom-start"，"bottom-end"，"right""right-start"，"right-end"，"left"，"left-start"，"left-end"

## 1.2. nly-dropdown-menu

> dropdown 下拉菜单内容

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
dropdownMenuClass | String | | 自定义css式样
role | String | menu | html role属性
id | String |  | 组件id，必传

## 1.3. 单包导出

> 如果只需要使用dropdownPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> dropdownPlugin包括以下组件

名称 | 导出路径
-|-
NlyDropdown | nly-adminlte-vue
NlyDropdownMenu | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyDropdown } from "./nly-adminlte-vue";
Vue.component('nly-dropdown', NlyDropdown)
```

> 整个dropdownPlugin导出

```js
import { dropdownPlugin } from "./nly-adminlte-vue";
Vue.use(dropdownPlugin);
```