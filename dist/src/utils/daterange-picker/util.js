const getDateUtil = (dateUtil = "native") => {
  if (dateUtil instanceof Object) return dateUtil;
  else if (typeof dateUtil === "string" || dateUtil instanceof String) {
    return require("./" + dateUtil).default;
  }
};

export { getDateUtil };
