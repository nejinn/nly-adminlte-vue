import { deepFreeze } from "./object";

export default deepFreeze({
  NlyButtonClose: {
    content: "&times;",
    textVariant: null,
    ariaLabel: "Close"
  },
  NlyListGroupItem: {
    variant: undefined
  },
  NlyProgress: {
    variant: null
  },
  NlyProgressBar: {
    variant: null
  },

  NlyToast: {
    toaster: "nly-toaster-top-right",
    autoHideDelay: 5000,
    variant: null,
    toastClass: null,
    headerClass: null,
    bodyClass: null
  },
  NlyToaster: {
    ariaLive: null,
    ariaAtomic: null,
    role: null
  },
  NlyTable: {
    selectedVariant: "active",
    headVariant: null,
    footVariant: null
  },
  NlyModal: {
    titleTag: "h5",
    size: "md",
    headerBgVariant: undefined,
    headerBorderVariant: undefined,
    headerTextVariant: undefined,
    headerCloseVariant: undefined,
    bodyBgVariant: undefined,
    bodyTextVariant: undefined,
    footerBgVariant: undefined,
    footerBorderVariant: undefined,
    footerTextVariant: undefined,
    cancelTitle: "Cancel",
    cancelVariant: "secondary",
    okTitle: "OK",
    okVariant: "primary",
    headerCloseContent: "&times;",
    headerCloseLabel: "Close"
  },
  NlyTime: {
    labelNoTimeSelected: "No time selected",
    labelSelected: "Selected time",
    labelHours: "Hours",
    labelMinutes: "Minutes",
    labelSeconds: "Seconds",
    labelAmpm: "AM/PM",
    // It would be nice to be able to get these from Intl.DateTimeFormat somehow
    labelAm: "AM",
    labelPm: "PM",
    // The following inherit from BFormSpinbutton if not provided
    labelIncrement: null,
    labelDecrement: null
  },
  NlyTooltip: {
    boundary: "scrollParent",
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  },
  NlyFormText: {
    textVariant: "muted"
  },
  NlyDropdown: {
    toggleText: "Nly Toggle Dropdown",
    size: undefined,
    variant: "secondary",
    splitVariant: undefined
  },
  NlyPopover: {
    boundary: "scrollParent",
    boundaryPadding: 5,
    customClass: undefined,
    delay: 50,
    variant: undefined
  },
  NlyBootstrapPagination: {
    size: undefined
  },
  NlyFormTags: {
    addButtonIcon: "nlyfont nly-icon-new",
    addButtonVariant: "outlineSecondary",
    duplicateTagText: "Duplicate tag(s)",
    invalidTagText: "Invalid tag(s)",
    limitTagsText: "Tag limit reached",
    placeholder: "Add tag...",
    tagRemoveLabel: "Remove tag",
    tagRemovedLabel: "Tag removed",
    tagVariant: "secondary"
  },
  NlyTreeItem: {
    subInputEditorButton: "Ok",
    subEditorButtonText: "Ok",
    editorButtonText: "Editor",
    deleteButtonText: "Delete",
    asynButtonText: "Asyn",
    addButtonText: "Add"
  },
  NlyTreeItemTree: {
    subInputEditorButton: "Ok",
    subEditorButtonText: "Ok",
    editorButtonText: "Editor",
    deleteButtonText: "Delete",
    asynButtonText: "Asyn",
    addButtonText: "Add",
    iconVariant: "primary"
  },
  NlyTree: {
    subInputEditorButton: "Ok",
    subEditorButtonText: "Ok",
    editorButtonText: "Editor",
    deleteButtonText: "Delete",
    asynButtonText: "Asyn",
    addButtonText: "Add",
    iconVariant: "primary"
  }
});
