import { toString } from "./string";

const escapeChar = value => "\\" + value;

const cssEscape = value => {
  value = toString(value);

  const length = value.length;
  const firstCharCode = value.charCodeAt(0);

  return value.split("").reduce((result, char, index) => {
    const charCode = value.charCodeAt(index);
    if (charCode === 0x0000) {
      return result + "\uFFFD";
    }

    if (
      charCode === 0x007f ||
      (charCode >= 0x0001 && charCode <= 0x001f) ||
      (index === 0 && charCode >= 0x0030 && charCode <= 0x0039) ||
      (index === 1 &&
        charCode >= 0x0030 &&
        charCode <= 0x0039 &&
        firstCharCode === 0x002d)
    ) {
      return result + escapeChar(`${charCode.toString(16)} `);
    }

    if (index === 0 && charCode === 0x002d && length === 1) {
      return result + escapeChar(char);
    }

    if (
      charCode >= 0x0080 ||
      charCode === 0x002d ||
      charCode === 0x005f ||
      (charCode >= 0x0030 && charCode <= 0x0039) ||
      (charCode >= 0x0041 && charCode <= 0x005a) ||
      (charCode >= 0x0061 && charCode <= 0x007a)
    ) {
      return result + char;
    }

    return result + escapeChar(char);
  }, "");
};

export default cssEscape;
