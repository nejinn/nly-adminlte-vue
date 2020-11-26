<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-table</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="4">
          <nly-card header-variant="graydark">
            <nly-card-header>
              基础表，
            </nly-card-header>
            <nly-card-body>
              <nly-table striped hover :items="basicItems"></nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="graydark">
            <nly-card-header>
              行颜色，格子颜色，_rowVariant，_cellVariants
            </nly-card-header>
            <nly-card-body>
              <nly-table hover :items="variantCellItems"></nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="graydark">
            <nly-card-header>
              行式样 tbody-tr-class
            </nly-card-header>
            <nly-card-body>
              <nly-table
                hover
                :items="rowItems.items"
                :fields="rowItems.fields"
                :tbody-tr-class="rowClass"
              ></nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="4">
          <nly-card header-variant="graydark">
            <nly-card-header>
              Responsive tables 水平滚动条
            </nly-card-header>
            <nly-card-body>
              <nly-table responsive :items="responsiveItems"></nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="graydark">
            <nly-card-header>
              loading 加载 busy v-slot:table-busy
            </nly-card-header>
            <nly-card-body>
              <nly-table
                striped
                hover
                :items="captionItems.items"
                :fields="captionItems.fields"
                busy
              >
                <template v-slot:table-busy>
                  <div class="text-center text-pink my-2">
                    <nly-spinner class="align-middle"></nly-spinner>
                    <strong>Loading...</strong>
                  </div>
                </template>
              </nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="graydark">
            <nly-card-header>
              注释表 caption
            </nly-card-header>
            <nly-card-body>
              <nly-table
                striped
                hover
                :items="captionItems.items"
                :fields="captionItems.fields"
              >
                <template v-slot:table-caption>这是一个注释.</template>
              </nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="6">
          <nly-card header-variant="graydark">
            <nly-card-header>
              堆叠表 stacked
            </nly-card-header>
            <nly-card-body>
              <nly-table striped hover stacked :items="basicItems"></nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6">
          <nly-card header-variant="graydark">
            <nly-card-header>
              array fields
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                指定fields,类型array
              </nly-card-text>
              <nly-table
                striped
                hover
                :items="arrayItem.items"
                :field="arrayItem.field"
              ></nly-table>

              <nly-card-text>
                指定fields,类型array object
              </nly-card-text>
              <nly-table
                striped
                hover
                :items="arrayObjectItem.items"
                :fields="arrayObjectItem.fields"
              ></nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-card header-variant="graydark">
            <nly-card-header>
              插槽渲染
            </nly-card-header>
            <nly-card-body>
              <nly-table
                small
                :fields="slotData.fields"
                :items="slotData.items"
                responsive="sm"
              >
                <template v-slot:cell(index)="data">
                  {{ data.index + 1 }}
                </template>

                <!-- A custom formatted column -->
                <template v-slot:cell(name)="data">
                  <b class="text-info">{{ data.value.last.toUpperCase() }}</b
                  >, <b>{{ data.value.first }}</b>
                </template>

                <!-- A virtual composite column -->
                <template v-slot:cell(nameage)="data">
                  {{ data.item.name.first }} is {{ data.item.age }} years old
                </template>

                <!-- Optional default data cell scoped slot -->
                <template v-slot:cell()="data">
                  <i>{{ data.value }}</i>
                </template>
              </nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-card header-variant="graydark">
            <nly-card-header>
              格式化字符串
            </nly-card-header>
            <nly-card-body>
              <nly-table
                small
                :fields="formatterDate.fields"
                :items="formatterDate.items"
                responsive="sm"
              >
                <template v-slot:cell(name)="data">
                  <!-- `data.value` is the value after formatted by the Formatter -->
                  <a
                    :href="
                      `#${data.value.replace(/[^a-z]+/i, '-').toLowerCase()}`
                    "
                    >{{ data.value }}</a
                  >
                </template>
              </nly-table>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-card>
            <nly-card-header>
              houses table
            </nly-card-header>
            <nly-card-body>
              <nly-row>
                <nly-col xs="1">
                  <div class="custom-control custom-checkbox">
                    <input
                      class="custom-control-input custom-control-info"
                      type="checkbox"
                      id="customCheckbox1"
                      v-model="show1"
                    />
                    <label for="customCheckbox1" class="custom-control-label"
                      >1单元</label
                    >
                  </div>
                </nly-col>
                <nly-col xs="1">
                  <div class="custom-control custom-checkbox">
                    <input
                      class="custom-control-input custom-control-info"
                      type="checkbox"
                      id="customCheckbox2"
                      v-model="show2"
                    />
                    <label for="customCheckbox2" class="custom-control-label"
                      >2单元</label
                    >
                  </div>
                </nly-col>
              </nly-row>
              <nly-row>
                <nly-table
                  :fields="housesFileds"
                  :items="housesItems"
                  bordered
                  class="border-bottom-0"
                >
                  <template v-slot:custom-foot>
                    <nly-tr>
                      <nly-th class="text-center" style="width: 130px">
                        楼层/单元
                      </nly-th>
                      <nly-th
                        class="text-center border-0 "
                        ref="show10"
                        style="width: 30px"
                      >
                        <span class="sr-only">index1</span>
                      </nly-th>
                      <nly-th colspan="2" class="text-center" ref="show11"
                        >1单元</nly-th
                      >
                      <nly-th
                        class="text-center border-0"
                        ref="show20"
                        style="width: 30px"
                      >
                        <span class="sr-only">index2</span>
                      </nly-th>
                      <nly-th colspan="2" class="text-center" ref="show21"
                        >2单元</nly-th
                      >
                    </nly-tr>
                  </template>

                  <template v-slot:cell(101)="data">
                    <nly-badge
                      :bg-gradient-variant="
                        data.value.status === 1 ? 'lime' : 'lightblue'
                      "
                    >
                      {{ data.value.num }}
                    </nly-badge>
                  </template>

                  <template v-slot:cell(102)="data">
                    <nly-badge
                      :bg-gradient-variant="
                        data.value.status === 1 ? 'lime' : 'lightblue'
                      "
                    >
                      {{ data.value.num }}
                    </nly-badge>
                  </template>

                  <template v-slot:cell(201)="data">
                    <nly-badge
                      :bg-gradient-variant="
                        data.value.status === 1 ? 'lime' : 'lightblue'
                      "
                    >
                      {{ data.value.num }}
                    </nly-badge>
                  </template>

                  <template v-slot:cell(202)="data">
                    <nly-badge
                      :bg-gradient-variant="
                        data.value.status === 1 ? 'lime' : 'lightblue'
                      "
                    >
                      {{ data.value.num }}
                    </nly-badge>
                  </template>
                </nly-table>
              </nly-row>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-card>
            <nly-card-header>
              Select table
            </nly-card-header>
            <nly-card-body>
              <div>
                <nly-table
                  ref="selectableTable"
                  selectable
                  :select-mode="selectMode"
                  :items="items"
                  :fields="fields"
                  @row-selected="onRowSelected"
                  responsive="sm"
                >
                  <!-- Example scoped slot for select state illustrative purposes -->
                  <template v-slot:cell(selected)="{ rowSelected }">
                    <template v-if="rowSelected">
                      <span aria-hidden="true">&check;</span>
                      <span class="sr-only">Selected</span>
                    </template>
                    <template v-else>
                      <span aria-hidden="true">&nbsp;</span>
                      <span class="sr-only">Not selected</span>
                    </template>
                  </template>
                </nly-table>
                <p>
                  <nly-button
                    size="sm"
                    @click="selectAllRows"
                    variant="info"
                    button-class="mr-2"
                    >全选</nly-button
                  >
                  <nly-button
                    size="sm"
                    @click="clearSelected"
                    variant="info"
                    button-class="mr-2"
                    >清除全选</nly-button
                  >
                  <nly-button
                    size="sm"
                    @click="selectThirdRow"
                    variant="info"
                    button-class="mr-2"
                    >选择第三个</nly-button
                  >
                  <nly-button size="sm" @click="unselectThirdRow" variant="info"
                    >清除第三个</nly-button
                  >
                </p>
                <p>
                  Selected Rows:<br />
                  {{ selected }}
                </p>
              </div>
            </nly-card-body>
          </nly-card>
        </nly-col>
        <nly-col xs="6">
          <nly-table-simple hover small caption-top responsive>
            <caption>
              复杂布局
            </caption>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <colgroup>
              <col />
              <col />
              <col />
            </colgroup>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <nly-thead>
              <nly-tr>
                <nly-th colspan="2" rowspan="2"> header 1</nly-th>
                <nly-th colspan="3">header 2</nly-th>
                <nly-th colspan="2">header 3</nly-th>
              </nly-tr>
              <nly-tr>
                <nly-th>colum 1</nly-th>
                <nly-th>columm 2</nly-th>
                <nly-th>column 3</nly-th>
                <nly-th>column 4</nly-th>
                <nly-th>column 5</nly-th>
              </nly-tr>
            </nly-thead>
            <nly-tbody>
              <nly-tr>
                <nly-th rowspan="3">蜀国</nly-th>
                <nly-th class="text-right">张飞</nly-th>
                <nly-td>56</nly-td>
                <nly-td>22</nly-td>
                <nly-td>43</nly-td>
                <nly-td variant="success">72</nly-td>
                <nly-td>23</nly-td>
              </nly-tr>
              <nly-tr>
                <nly-th class="text-right">诸葛</nly-th>
                <nly-td>46</nly-td>
                <nly-td variant="warning">18</nly-td>
                <nly-td>50</nly-td>
                <nly-td>61</nly-td>
                <nly-td variant="danger">15</nly-td>
              </nly-tr>
              <nly-tr>
                <nly-th class="text-right">关羽</nly-th>
                <nly-td>51</nly-td>
                <nly-td>27</nly-td>
                <nly-td>38</nly-td>
                <nly-td>69</nly-td>
                <nly-td>28</nly-td>
              </nly-tr>
              <nly-tr>
                <nly-th rowspan="2">魏国</nly-th>
                <nly-th class="text-right">曹操</nly-th>
                <nly-td variant="success">89</nly-td>
                <nly-td>34</nly-td>
                <nly-td>69</nly-td>
                <nly-td>85</nly-td>
                <nly-td>38</nly-td>
              </nly-tr>
              <nly-tr>
                <nly-th class="text-right">司马懿</nly-th>
                <nly-td>80</nly-td>
                <nly-td variant="danger">12</nly-td>
                <nly-td>43</nly-td>
                <nly-td>36</nly-td>
                <nly-td variant="warning">19</nly-td>
              </nly-tr>
            </nly-tbody>
            <nly-tfoot>
              <nly-tr>
                <nly-td colspan="7" variant="secondary" class="text-right">
                  Total Rows: <b>5</b>
                </nly-td>
              </nly-tr>
            </nly-tfoot>
          </nly-table-simple>
        </nly-col>
        <nly-col xs="6">
          <nly-card header-variant="graydark">
            <nly-card-header>
              基础表，
            </nly-card-header>
            <nly-card-body>
              <nly-table striped hover :items="basicItems">
                <template v-slot:thead-top>
                  <nly-tr>
                    <nly-th variant="secondary" rowspan="2">header 1</nly-th>
                    <nly-th variant="primary" colspan="2">header 2</nly-th>
                  </nly-tr>
                  <nly-tr>
                    <nly-th variant="primary" colspan="1">header 3</nly-th>
                    <nly-th variant="danger">header 4</nly-th>
                  </nly-tr>
                </template>
              </nly-table>
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
      basicItems: [
        { age: 40, first_name: "玄德", last_name: "刘" },
        { age: 21, first_name: "云长", last_name: "关" },
        { age: 89, first_name: "汉升", last_name: "黄" },
        { age: 38, first_name: "孟起", last_name: "马" }
      ],
      variantCellItems: [
        { age: 40, first_name: "玄德", last_name: "刘" },
        { age: 21, first_name: "云长", last_name: "关" },
        {
          age: 89,
          first_name: "汉升",
          last_name: "黄",
          _rowVariant: "danger"
        },
        {
          age: 40,
          first_name: "玄德",
          last_name: "刘",
          _cellVariants: { age: "info", first_name: "warning" }
        },
        { age: 29, first_name: "翼德", last_name: "张" }
      ],
      arrayItem: {
        fields: ["first_name", "last_name", "age"],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "玄德",
            last_name: "刘"
          },
          { isActive: false, age: 21, first_name: "云长", last_name: "关" },
          {
            isActive: false,
            age: 89,
            first_name: "汉升",
            last_name: "黄"
          },
          { isActive: true, age: 38, first_name: "孟起", last_name: "马" }
        ]
      },
      arrayObjectItem: {
        fields: [
          {
            key: "last_name",
            sortable: true
          },
          {
            key: "first_name",
            sortable: false
          },
          {
            key: "age",
            label: "Person age",
            sortable: true,
            variant: "danger"
          }
        ],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "玄德",
            last_name: "刘"
          },
          { isActive: false, age: 21, first_name: "云长", last_name: "关" },
          {
            isActive: false,
            age: 89,
            first_name: "汉升",
            last_name: "黄"
          },
          { isActive: true, age: 38, first_name: "孟起", last_name: "马" }
        ]
      },
      rowItems: {
        fields: ["first_name", "last_name", "age"],
        items: [
          {
            age: 40,
            first_name: "玄德",
            last_name: "刘",
            status: "awesome"
          },
          { age: 21, first_name: "云长", last_name: "关" },
          { age: 89, first_name: "汉升", last_name: "黄" }
        ]
      },
      responsiveItems: [
        {
          heading1: "诸葛卧龙",
          heading2: "诸葛卧龙",
          heading3: "诸葛卧龙",
          heading4: "诸葛卧龙",
          heading5: "诸葛卧龙",
          heading6: "诸葛卧龙",
          heading7: "诸葛卧龙",
          heading8: "诸葛卧龙",
          heading9: "诸葛卧龙",
          heading10: "诸葛卧龙",
          heading11: "诸葛卧龙",
          heading12: "诸葛卧龙"
        },
        {
          heading1: "诸葛卧龙",
          heading2: "诸葛卧龙",
          heading3: "诸葛卧龙",
          heading4: "诸葛卧龙",
          heading5: "诸葛卧龙",
          heading6: "诸葛卧龙",
          heading7: "诸葛卧龙",
          heading8: "诸葛卧龙",
          heading9: "诸葛卧龙",
          heading10: "诸葛卧龙",
          heading11: "诸葛卧龙",
          heading12: "诸葛卧龙"
        },
        {
          heading1: "诸葛卧龙",
          heading2: "诸葛卧龙",
          heading3: "诸葛卧龙",
          heading4: "诸葛卧龙",
          heading5: "诸葛卧龙",
          heading6: "诸葛卧龙",
          heading7: "诸葛卧龙",
          heading8: "诸葛卧龙",
          heading9: "诸葛卧龙",
          heading10: "诸葛卧龙",
          heading11: "诸葛卧龙",
          heading12: "诸葛卧龙"
        }
      ],
      captionItems: {
        fields: ["first_name", "last_name", "age"],
        items: [
          { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
          { age: 21, first_name: "Larsen", last_name: "Shaw" },
          { age: 89, first_name: "Geneva", last_name: "Wilson" }
        ]
      },
      slotData: {
        fields: [
          // A virtual column that doesn't exist in items
          "index",
          // A column that needs custom formatting
          { key: "name", label: "Full Name" },
          // A regular column
          "age",
          // A regular column
          "sex",
          // A virtual column made up from two fields
          { key: "nameage", label: "First name and age" }
        ],
        items: [
          { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
          { name: { first: "Jane", last: "Doe" }, sex: "Female", age: 36 },
          { name: { first: "Rubin", last: "Kincade" }, sex: "Male", age: 73 },
          {
            name: { first: "Shirley", last: "Partridge" },
            sex: "Female",
            age: 62
          }
        ]
      },
      formatterDate: {
        fields: [
          {
            // A column that needs custom formatting,
            // calling formatter 'fullName' in this app
            key: "name",
            label: "Full Name",
            formatter: value => {
              return `${value.first} ${value.last}`;
            }
          },
          // A regular column
          "age",
          {
            // A regular column with custom formatter
            key: "sex",
            formatter: value => {
              return value.charAt(0).toUpperCase();
            }
          },
          {
            // A virtual column with custom formatter
            key: "birthYear",
            label: "Calculated Birth Year",
            formatter: (value, key, item) => {
              return new Date().getFullYear() - item.age;
            }
          }
        ],
        items: [
          { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
          { name: { first: "Jane", last: "Doe" }, sex: "Female", age: 36 },
          { name: { first: "Rubin", last: "Kincade" }, sex: "male", age: 73 },
          {
            name: { first: "Shirley", last: "Partridge" },
            sex: "female",
            age: 62
          }
        ]
      },
      housesFileds: [
        {
          key: "index",
          label: "楼层/单元",
          thStyle: "display:none",
          class: "text-center"
        },
        {
          key: "index1",
          label: "间隔",
          thStyle: "display:none",
          class: "border-0 ",
          parent: "1"
        },
        {
          key: "101",
          label: "1单元01",
          thStyle: "display:none",
          class: "text-center",
          parent: "1"
        },
        {
          key: "102",
          label: "1单元02",
          thStyle: "display:none",
          class: "text-center ",
          parent: "1"
        },
        {
          key: "index2",
          label: "间隔",
          thStyle: "display:none",
          class: "border-0",
          parent: "2"
        },
        {
          key: "201",
          label: "2单元01",
          thStyle: "display:none",
          class: "text-center",
          parent: "2"
        },
        {
          key: "202",
          label: "2单元02",
          thStyle: "display:none",
          class: "text-center",
          parent: "2"
        }
      ],
      housesItems: [
        {
          index: "一层",
          101: {
            num: "101",
            status: 1
          },
          102: {
            num: "102",
            status: 0
          },
          201: {
            num: "201",
            status: 1
          },
          202: {
            num: "202",
            status: 0
          }
        },
        {
          index: "二层",
          101: {
            num: "201",
            status: 0
          },
          102: {
            num: "202",
            status: 0
          },
          201: {
            num: "201",
            status: 1
          },
          202: {
            num: "202",
            status: 0
          }
        },
        {
          index: "三层",
          101: {
            num: "301",
            status: 0
          },
          102: {
            num: "302",
            status: 1
          },
          201: {
            num: "301",
            status: 0
          },
          202: {
            num: "302",
            status: 0
          }
        },
        {
          index: "四层",
          101: {
            num: "401",
            status: 1
          },
          102: {
            num: "402",
            status: 0
          },
          201: {
            num: "401",
            status: 1
          },
          202: {
            num: "402",
            status: 0
          }
        }
      ],
      show1: true,
      show2: true,
      modes: ["multi", "single", "range"],
      fields: ["selected", "isActive", "age", "first_name", "last_name"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ],
      selectMode: "multi",
      selected: []
    };
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.status === "awesome") return "table-success";
    },
    fullName(value) {
      return `${value.first} ${value.last}`;
    },
    showFunction(item, index) {
      const refindex0 = `show${index}0`;
      const refindex1 = `show${index}1`;
      if (!item) {
        this.$refs[refindex0].$el.classList.add("d-none");
        this.$refs[refindex1].$el.classList.add("d-none");
        this.housesFileds.forEach(element => {
          if (element.parent == index) {
            if (element.class.indexOf(" d-none") === -1) {
              element.class = element.class + " d-none";
            }
          }
        });
      } else {
        this.$refs[refindex0].$el.classList.remove("d-none");
        this.$refs[refindex1].$el.classList.remove("d-none");
        this.housesFileds.forEach(element => {
          if (element.parent == index) {
            if (element.class.indexOf(" d-none") !== -1) {
              element.class = element.class.replace(" d-none", "");
            }
          }
        });
      }
    }
  },
  watch: {
    show1: function(newval, oldval) {
      if (newval != oldval) {
        this.showFunction(newval, 1);
      }
    },
    show2: function(newval, oldval) {
      if (newval != oldval) {
        this.showFunction(newval, 2);
      }
    }
  }
};
</script>
