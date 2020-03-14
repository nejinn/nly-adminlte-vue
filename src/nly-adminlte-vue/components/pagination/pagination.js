import Vue from "../../utils/vue";
import { toInteger } from "../../utils/number";
import { NlyRenderFunction } from "../render-function/render-function";
import { NlyLink } from "../link/link";

const name = "NlyPagination";

export const NlyPagination = Vue.extend({
  name: name,
  data() {
    return {
      tempalteCurrentPage: ""
    };
  },
  props: {
    total: {
      type: [Number, String]
    },
    size: {
      type: [Number, String],
      default: 10
    },
    currentPage: {
      type: [Number, String],
      default: 1
    },
    limit: {
      type: [Number, String],
      default: 5
    },
    align: {
      default: "left",
      type: String
    },
    firstFunction: {
      type: Function
    },
    prevFunction: {
      type: Function
    },
    currentFunction: {
      type: Function
    },
    nextFunction: {
      type: Function
    },
    lastFunction: {
      type: Function
    },
    sizeFunction: {
      type: Function
    },
    showPg: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _firstFunction() {
      if (this.firstFunction) {
        this.tempalteCurrentPage = 1;
        this.firstFunction();
      } else {
        this.tempalteCurrentPage = 1;
      }
    },
    _prevFunction() {
      if (this.prevFunction) {
        this.tempalteCurrentPage = this.tempalteCurrentPage - 1;
        this.prevFunction();
      } else {
        this.tempalteCurrentPage = this.tempalteCurrentPage - 1;
      }
    },
    _currentFunction(item) {
      if (this.currentFunction) {
        this.tempalteCurrentPage = item;
        this.currentFunction();
      } else {
        this.tempalteCurrentPage = item;
      }
    },
    _nextFunction() {
      if (this.nextFunction) {
        this.tempalteCurrentPage = this.tempalteCurrentPage + 1;
        this.nextFunction();
      } else {
        this.tempalteCurrentPage = this.tempalteCurrentPage + 1;
      }
    },
    _lastFunction() {
      if (this.lastFunction) {
        this.tempalteCurrentPage = this.nlyPgPages;
        this.lastFunction();
      } else {
        this.tempalteCurrentPage = this.nlyPgPages;
      }
    },
    _sizeFunction() {
      if (this.sizeFunction) {
        this.sizeFunction();
      }
    }
  },
  computed: {
    nlyPgFontSize() {
      if (this.sm) {
        return "pagination-sm";
      } else if (this.lg) {
        return "pagination-lg";
      } else {
        return "";
      }
    },
    nlyPgtTotal: function() {
      return isNaN(toInteger(this.total))
        ? 1
        : toInteger(this.total) <= 0
        ? 1
        : toInteger(this.total);
    },
    nlyPgSize: function() {
      return isNaN(toInteger(this.size))
        ? 10
        : toInteger(this.size) <= 0
        ? 10
        : toInteger(this.size);
    },
    nlyPgCurrentPage: function() {
      return toInteger(this.tempalteCurrentPage);
    },
    nlyPgLimit: function() {
      return isNaN(toInteger(this.limit))
        ? 5
        : toInteger(this.limit) <= 4
        ? 5
        : toInteger(this.limit);
    },
    nlyPgPages: function() {
      return Math.ceil(this.nlyPgtTotal / this.nlyPgSize);
    },
    nlyPgItemArray: function() {
      if (
        this.nlyPgCurrentPage + 1 <= this.nlyPgLimit &&
        this.nlyPgPages < this.nlyPgLimit
      ) {
        const itemList = Array.from({ length: this.nlyPgPages }).map(
          (v, k) => k + 1
        );
        return itemList;
      } else if (
        this.nlyPgCurrentPage + 1 <= this.nlyPgLimit &&
        this.nlyPgPages == this.nlyPgLimit
      ) {
        const itemList = Array.from({ length: this.nlyPgLimit }).map(
          (v, k) => k + 1
        );
        return itemList;
      } else if (
        this.nlyPgCurrentPage + 2 <= this.nlyPgLimit &&
        this.nlyPgPages > this.nlyPgLimit
      ) {
        const itemList = Array.from({ length: this.nlyPgLimit - 1 }).map(
          (v, k) => k + 1
        );
        itemList.push("···");
        return itemList;
      } else if (
        this.nlyPgPages - this.nlyPgCurrentPage + 2 < this.nlyPgLimit &&
        this.nlyPgPages > this.nlyPgLimit
      ) {
        const itemList = Array.from({ length: this.nlyPgLimit - 1 }).map(
          (v, k) => k + (this.nlyPgPages - this.nlyPgLimit + 2)
        );
        itemList.splice(0, 0, "···");
        return itemList;
      } else if (
        this.nlyPgPages - this.nlyPgCurrentPage + 2 < this.nlyPgLimit &&
        this.nlyPgPages == this.nlyPgLimit
      ) {
        const itemList = Array.from({ length: this.nlyPgLimit - 1 }).map(
          (v, k) => k + (this.nlyPgPages - this.nlyPgLimit + 2)
        );
        return itemList;
      } else {
        const itemList = Array.from({ length: this.nlyPgLimit - 2 }).map(
          (v, k) =>
            k + this.nlyPgCurrentPage - Math.ceil(this.nlyPgLimit / 2) + 2
        );
        itemList.splice(0, 0, "···");
        itemList.push("···");
        return itemList;
      }
    },
    alignClass: function() {
      const align = this.align;
      if (align === "center") {
        return "justify-content-center";
      } else if (align === "end" || align === "right") {
        return "justify-content-end";
      }
      return "";
    },
    tempalteArray: function() {
      const _tempalteArray = () => {
        if (this.showPg) {
          if (this.nlyPgPages <= 1) {
            return [];
          }
        } else {
          let nlyPgItemArrayAll = this.nlyPgItemArray;
          nlyPgItemArrayAll.splice(0, 0, "‹");
          nlyPgItemArrayAll.splice(0, 0, "‹‹");
          nlyPgItemArrayAll.push("›");
          nlyPgItemArrayAll.push("››");
          let nlyPgTempalteArray = nlyPgItemArrayAll.map(item => {
            if (item == "‹‹") {
              if (this.nlyPgCurrentPage == 1) {
                return {
                  _type: "li",
                  _class: "page-item disabled",
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              } else {
                return {
                  _type: "li",
                  _class: "page-item",
                  _on: { click: this._firstFunction },
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              }
            } else if (item == "‹") {
              if (this.nlyPgCurrentPage == 1) {
                return {
                  _type: "li",
                  _class: "page-item disabled",
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              } else {
                return {
                  _type: "li",
                  _class: "page-item",
                  _on: { click: this._prevFunction },
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              }
            } else if (item == "···") {
              return {
                _type: "li",
                _class: "page-item disabled",
                _children: [
                  {
                    _type: NlyLink,
                    _name: item,
                    _class: "page-link"
                  }
                ]
              };
            } else if (item == "›") {
              if (this.nlyPgCurrentPage == this.nlyPgPages) {
                return {
                  _type: "li",
                  _class: "page-item disabled",
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              } else {
                return {
                  _type: "li",
                  _class: "page-item",
                  _on: { click: this._nextFunction },
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              }
            } else if (item == "››") {
              if (this.nlyPgCurrentPage == this.nlyPgPages) {
                return {
                  _type: "li",
                  _class: "page-item disabled",
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              } else {
                return {
                  _type: "li",
                  _class: "page-item",
                  _on: { click: this._lastFunction },
                  _children: [
                    {
                      _type: NlyLink,
                      _name: item,
                      _class: "page-link"
                    }
                  ]
                };
              }
            } else if (item == this.tempalteCurrentPage) {
              return {
                _type: "li",
                _class: "page-item active",
                _on: { click: () => this._currentFunction(item) },
                _children: [
                  {
                    _type: NlyLink,
                    _name: item,
                    _class: "page-link"
                  }
                ]
              };
            } else {
              return {
                _type: "li",
                _class: "page-item",
                _on: { click: () => this._currentFunction(item) },
                _children: [
                  {
                    _type: NlyLink,
                    _name: item,
                    _class: "page-link"
                  }
                ]
              };
            }
          });

          let nlyPgTempalteArrayAll = [
            {
              _type: "ul",
              _class: ["pagination", this.nlyPgFontSize, this.alignClass],
              _children: nlyPgTempalteArray
            }
          ];

          return nlyPgTempalteArrayAll;
        }
      };
      return _tempalteArray();
    }
  },
  created() {
    this.tempalteCurrentPage = isNaN(toInteger(this.currentPage))
      ? 1
      : toInteger(this.currentPage) <= 1
      ? 1
      : toInteger(this.currentPage);
  },
  watch: {
    tempalteCurrentPage: function() {
      this.$emit("getCurrentPage", this.tempalteCurrentPage);
    },
    currentPage: function(newval, oldval) {
      if (newval != oldval) {
        this.tempalteCurrentPage = toInteger(this.currentPage);
      }
    },
    nlyPgPages: function(newval, oldval) {
      if (newval != oldval) {
        this.tempalteCurrentPage =
          this.tempalteCurrentPage > newval ? newval : this.tempalteCurrentPage;
      }
    },
    nlyPgSize: function(newval, oldval) {
      if (newval != oldval) {
        this._sizeFunction();
      }
    }
  },
  render(h) {
    return h(NlyRenderFunction, {
      props: {
        contentToRender: this.tempalteArray,
        flat: true
      }
    });
  }
});
