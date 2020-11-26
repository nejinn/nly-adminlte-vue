// 获取当前激活子节点的所有 type 为 tree 的父节点
export const activeParentTree = (arr1, key) => {
  var temp = [];
  var forFn = function(arr, id) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      const { _type, dataGroup, _children, _key } = item;
      if (_key && dataGroup) {
        if (id === _key && _type === "nly-sidebar-nav-item") {
          forFn(arr1, dataGroup);
        } else if (id === _key && _type === "nly-sidebar-nav-tree") {
          temp.push(item);
          forFn(arr1, dataGroup);
        } else {
          if (_children) {
            forFn(_children, id);
          }
        }
      }
    }
  };
  forFn(arr1, key);
  return temp;
};
