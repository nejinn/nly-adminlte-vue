// 获取当前激活子节点的所有 type 为 tree 的父节点
export const activeParentTree = (arr1, id) => {
  var temp = [];
  var forFn = function(arr, id) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (item._key === id) {
        if (item._type === "nly-sidebar-nav-tree") {
          temp.push(item);
        }
        forFn(arr1, item.dataGroup);
        break;
      }
      if (item._children) {
        forFn(item._children, id);
      }
    }
  };
  forFn(arr1, id);
  return temp;
};
