# form

## nly-form-input

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
type | String | text | 类型，默认text,不传默认text。可选"text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"
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
form | String |  | 指定归属表单，可以放置再表单外面
autofocus | Boolean | false | 自动聚焦
size | String |  | 大小，可以sm,lg
valid | String |  | 验证提示，可选valid,invali,warning