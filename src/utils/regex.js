export const RX_ARRAY_NOTATION = /\[(\d+)]/g;
export const RX_DIGITS = /^\d+$/;
export const RX_EXTENSION = /^\..+/;
export const RX_HASH = /^#/;
export const RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
export const RX_HTML_TAGS = /(<([^>]+)>)/gi;
export const RX_HYPHENATE = /\B([A-Z])/g;
export const RX_LOWER_UPPER = /([a-z])([A-Z])/g;
export const RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
export const RX_PLUS = /\+/g;
export const RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
export const RX_SPACES = /[\s\uFEFF\xA0]+/g;
export const RX_SPACE_SPLIT = /\s+/;
export const RX_STAR = /\/\*$/;
export const RX_START_SPACE_WORD = /(\s|^)(\w)/g;
export const RX_TRIM_LEFT = /^\s+/;
export const RX_TRIM_RIGHT = /\s+$/;
export const RX_UNDERSCORE = /_/g;
export const RX_UN_KEBAB = /-(\w)/g;

export const RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/;

export const RX_DATE_SPLIT = /-|\s|T/;

export const RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/;

export const RX_HREF = /^.*(#[^#]+)$/;

export const RX_ENCODED_COMMA = /%2C/g;
export const RX_ENCODE_REVERSE = /[!'()*]/g;
export const RX_QUERY_START = /^(\?|#|&)/;

export const RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
export const RX_ASPECT_SEPARATOR = /[/:]/;

export const RX_COL_CLASS = /^col-/;

export const RX_ICON_PREFIX = /^BIcon/;

export const RX_STRIP_LOCALE_MODS = /-u-.+/;
