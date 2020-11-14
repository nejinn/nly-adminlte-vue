export default {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId() {
      const id = this.id || this.localId_;
      const fn = suffix => {
        if (!id) {
          return null;
        }
        suffix = String(suffix || "").replace(/\s+/g, "_");
        return suffix ? id + "_" + suffix : id;
      };
      return fn;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.localId_ = `_nly_id_${this._uid}`;
    });
  }
};
