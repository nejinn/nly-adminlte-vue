# 1. form
<!-- TOC -->

- [1. form](#1-form)
  - [1.1. nly-form](#11-nly-form)
    - [1.1.1. props](#111-props)
  - [1.2. nly-form-input](#12-nly-form-input)
    - [1.2.1. props](#121-props)
  - [1.3. nly-form-feedback](#13-nly-form-feedback)
    - [1.3.1. props](#131-props)

<!-- /TOC -->
## 1.1. nly-form

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
id | String |  | id
inline | Boolean | false | 水平布局
novalidate | Boolean | false | 禁用浏览器htm5验证
validated | Boolean | false | 添加was-validated css类,会自动验证表单内容

## 1.2. nly-form-input

> col一类的props请参考grid中的nly-col

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
type | String | text | 类型，默认text,不传默认text。可选text,password,email,number,url,tel,search,range,color,date,time,datetime,datetime-local,month,week
max | String, Number |  | 输入值的最大范围，type=number和range才有效
min | String, Number |  | 输入值的最小范围，type=number和range才有效
maxlength | String, Number |  | 输入值的最大长度，type='text'或者'password'时有用
step | String, Number |  | 有效间隔，type=number和range才有效
list | String| null | 输入时出现预先设定的option下拉列表，password无效
value | String, Number| '' | 值，v-model传入的值会传给value
readonly | Boolean | false | 只读
plaintext | Boolean | false | 无外框
autocomplete | String |  | 自动提示完成填写
placeholder | String | null | 提示文本
formatter  | Function | null | 文本格式转换
lazy-formatter  | Boolean | false | 懒惰模式文本格式转换
trim | Boolean | false | 去除首尾空格
lazy | Boolean | false | 懒加载模式，事件和v-model有效
name | String |  | 放置form中，可以根据name属性取值
id | String |  | id
disabled | Boolean | false | 禁用
required | Boolean | false | html校验必填，放置form中，提交才会生效
form | String |  | 指定归属表单，可以放置在表单外面
autofocus | Boolean | false | 自动聚焦
size | String |  | 大小，可以sm,lg
valid | String |  | 验证提示，可选valid,invalid,warning,novalid
col | Boolean | false | 在没有其他props的情况下，所有列等宽,放在class='row'的元素下有效
xs | String |  | 宽度在xs及以上断点列宽,可选1，2，3，4，5，6，7，8，9，10，11，12，auto，auto为根据子节点自动宽度，放在class='row'的元素下有效
md | String |  | 宽度在md及以上断点列宽,可选同上
lg | String |  | 宽度在lg及以上断点列宽，可选同上
xl | String |  | 宽度在xl及以上断点列宽，可选同上
offset-xs | String |  | 宽度在xs及以上断点右移列数,可选0，2，3，4，5，6，7，8，9，10，11，放在class='row'的元素下有效
offset-sm | String |  | 宽度在sm及以上断点右移列数,可选同上
offset-md | String |  | 宽度在md及以上断点右移列数,可选同上
offset-lg | String |  | 宽度在lg及以上断点右移列数,可选同上
offset-xl | String |  | 宽度在xl及以上断点右移列数,可选同上
order-xs | String |  | 宽度在xs及以上断点排列顺序,可选0，2，3，4，5，6，7，8，9，10，11，12，放在class='row'的元素下有效
order-sm | String |  | 宽度在sm及以上断点排列顺序,可选同上
order-md | String |  | 宽度在md及以上断点排列顺序,可选同上
order-lg | String |  | 宽度在lg及以上断点排列顺序,可选同上
order-xl | String |  | 宽度在xl及以上断点排列顺序,可选同上

## 1.3. nly-form-feedback

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
id | String |  | id
tag | String |  | id
id | String |  | id



  id: {
    type: String
  },
  tag: {
    type: String,
    default: "span"
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: String,
    default: "novalid",
    validator: state => nlyGetOptionInclusion(formValidOptions, state)
  },
  ariaLive: {
    type: String
  },
  role: {
    type: String
  },
  text: {
    type: String
  }