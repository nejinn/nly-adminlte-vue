# pagination

> 分页

## nly-pagination

> 分页

### props

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
total | Number, String | 1 | 总数据条数，不传默认为1
size | Number, String | 10 | 每页数量，默认10
currentPage | Number, String | 1 | 当前页码，默认为1
limit | Number, String | 5 | 显示元素，默认显示5个页码，最低5个
align | String | left | 位置，可选left，center，right
firstFunction | func |  | 点击第一页按钮触发函数。默认只跳转到第一页
prevFunction | func |  | 点击上一页按钮触发函数。默认只跳转到上一页
currentFunction | func |  | 点击具体页码按钮触发函数。
nextFunction | func |  | 点击下一页按钮触发函数。默认只跳转到下一页
lastFunction | func |  | 点击第最后一页按钮触发函数。默认只跳转到最后一页
sizeFunction | func |  | 修改size触发函数
show-pg | Boolean | false | 只有一个页时是否显示分页。默认显示。设置为true，则只有一页的时候不显示分页。
sm | Boolean | false | 小分页
lg | func | false | 大分页