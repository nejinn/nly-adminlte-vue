const stableSort = (array, compareFn) => {
  return array
    .map((a, index) => [index, a])
    .sort(
      function(a, b) {
        return this(a[1], b[1]) || a[0] - b[0];
      }.bind(compareFn)
    )
    .map(e => e[1]);
};

export default stableSort;
