// 检测监听事件是否已经注册
// 或者同一个名称的事件再父组件中已经注册

import { isArray, isUndefined } from "../utils/inspect";

export default {
  methods: {
    hasListener(name) {
      // 监测只包括 v-on:这一类的
      const $listeners = this.$listeners || {};
      // 包括 `v-on:name` and `this.$on('name')`两类

      const $events = this._events || {};

      return (
        !isUndefined($listeners[name]) ||
        (isArray($events[name]) && $events[name].length > 0)
      );
    }
  }
};
