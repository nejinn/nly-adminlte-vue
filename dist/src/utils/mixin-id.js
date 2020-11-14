export const nlyId = function nlyId(id) {
  return `nly_id_${id}`;
};

export const nlyDropdownParentId = function nlyDropdownParentId(id) {
  return `nly_dropdown_parent_id_${id}`;
};

export const nlyDropdownId = function nlyDropdownId(id) {
  return `nly_dropdown_id_${id}`;
};

export const nlyDropdownMenuId = function nlyDropdownMenuId(id) {
  return `nly_dropdown_menu_id_${id}`;
};

export const nlyCollapseId = function nlyCollapseId(id) {
  return `nly_collapse_id_${id}`;
};

export const nlySwitchId = id => {
  return id ? `nly_switch_id_${id}` : "";
};

export const nlyCardId = id => {
  return id ? `nly_card_id_${id}` : null;
};
