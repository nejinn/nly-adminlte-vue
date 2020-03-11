import { deepFreeze } from "./object";

export default deepFreeze({
  NlyButtonClose: {
    content: "&times;",
    textVariant: null,
    ariaLabel: "Close"
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
  }
});
