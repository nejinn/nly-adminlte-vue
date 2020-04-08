const RX_UNDERSCORE = /_/g;
const RX_LOWER_UPPER = /([a-z])([A-Z])/g;
const RX_START_SPACE_WORD = /(\s|^)(\w)/g;

const startCase = str =>
  str
    .replace(RX_UNDERSCORE, " ")
    .replace(RX_LOWER_UPPER, (str, $1, $2) => $1 + " " + $2)
    .replace(RX_START_SPACE_WORD, (str, $1, $2) => $1 + $2.toUpperCase());

export default startCase;
