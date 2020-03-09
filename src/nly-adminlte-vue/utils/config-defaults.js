import { deepFreeze } from "./object";

export default deepFreeze({
  // Breakpoints
  breakpoints: ["xs", "sm", "md", "lg", "xl"],

  // Form controls
  formControls: {
    size: null
  },

  BButton: {
    size: null,
    variant: "secondary"
  },
  NlyButtonClose: {
    content: "&times;",
    textVariant: null,
    ariaLabel: "Close"
  },
  BCardSubTitle: {
    // `<b-card>` and `<b-card-body>` also inherit this prop
    subTitleTextVariant: "muted"
  },
  BCarousel: {
    labelPrev: "Previous Slide",
    labelNext: "Next Slide",
    labelGotoSlide: "Goto Slide",
    labelIndicators: "Select a slide to display"
  },
  BDropdown: {
    toggleText: "Toggle Dropdown",
    size: null,
    variant: "secondary",
    splitVariant: null
  },
  BFormFile: {
    browseText: "Browse",
    // Chrome default file prompt
    placeholder: "No file chosen",
    dropPlaceholder: "Drop files here"
  },
  BFormTag: {
    removeLabel: "Remove tag",
    variant: "secondary"
  },
  BFormTags: {
    addButtonText: "Add",
    addButtonVariant: "outline-secondary",
    duplicateTagText: "Duplicate tag(s)",
    invalidTagText: "Invalid tag(s)",
    placeholder: "Add tag...",
    tagRemoveLabel: "Remove tag",
    tagVariant: "secondary"
  },
  BFormText: {
    textVariant: "muted"
  },
  BImg: {
    blankColor: "transparent"
  },
  BImgLazy: {
    blankColor: "transparent"
  },
  BInputGroup: {
    size: null
  },
  BJumbotron: {
    bgVariant: null,
    borderVariant: null,
    textVariant: null
  },
  BListGroupItem: {
    variant: null
  },
  BModal: {
    titleTag: "h5",
    size: "md",
    headerBgVariant: null,
    headerBorderVariant: null,
    headerTextVariant: null,
    headerCloseVariant: null,
    bodyBgVariant: null,
    bodyTextVariant: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerTextVariant: null,
    cancelTitle: "Cancel",
    cancelVariant: "secondary",
    okTitle: "OK",
    okVariant: "primary",
    headerCloseContent: "&times;",
    headerCloseLabel: "Close"
  },
  BNavbar: {
    variant: null
  },
  BNavbarToggle: {
    label: "Toggle navigation"
  },
  BPagination: {
    size: null
  },
  BPaginationNav: {
    size: null
  },
  BPopover: {
    boundary: "scrollParent",
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  },
  BProgress: {
    variant: null
  },
  BProgressBar: {
    variant: null
  },
  BSpinner: {
    variant: null
  },
  BTable: {
    selectedVariant: "active",
    headVariant: null,
    footVariant: null
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
  BTooltip: {
    boundary: "scrollParent",
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  }
});
