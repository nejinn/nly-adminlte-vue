<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-badge</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <ul class="list-unstyled mb-0 d-flex flex-wrap align-items-center">
            <nly-badge tag="li">
              ssss
              <nly-button-close class="nly-tag-remove" />
            </nly-badge>
            <nly-badge tag="li">
              ssss
              <nly-button-close class="nly-tag-remove" />
            </nly-badge>
            <li class="flex-grow-1">
              <input
                class="w-100 flex-grow-1 p-0 m-0 bg-transparent border-0"
                style="outline: 0px; min-width: 5rem;"
              />
            </li>
          </ul>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <div class="nly-form-tags form-control h-auto">
            <ul
              class="nly-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
            >
              <nly-badge
                tag="li"
                class="nly-form-tag d-inline-flex align-items-baseline mw-100 disabled"
              >
                <nly-icon
                  icon="nlyfont nly-icon-star"
                  class="nly-form-tag-icon"
                />
                <span class="text-truncate flex-grow-1 nly-form-tag-text">
                  我是form-tags
                  <nly-icon
                    icon="nlyfont nly-icon-star"
                    class="nly-form-tag-icon"
                  />
                </span>
                <nly-button-close class="nly-form-tag-remove  d-inline-flex" />
              </nly-badge>
              <nly-badge
                tag="li"
                class="nly-form-tag d-inline-flex align-items-baseline mw-100"
              >
                <span class="text-truncate flex-grow-1 nly-form-tag-text">
                  zzzz</span
                >
                <nly-button-close class="nly-form-tag-remove d-inline-flex" />
              </nly-badge>
              <li class="flex-grow-1 nly-form-tag-field"></li>
            </ul>
          </div>
          <nly-badge
            tag="li"
            class="nly-form-tag d-inline-flex align-items-baseline mw-100"
          >
            <span class="text-truncate flex-grow-1 nly-form-tag-text">
              zzzz</span
            >
            <nly-button-close class="nly-form-tag-remove d-inline-flex" />
          </nly-badge>
        </nly-col>
      </nly-row>
      <nly-form-tag icon="nlyfont nly-icon-star">
        我是tags
      </nly-form-tag>
      <nly-form-tag icon="nlyfont nly-icon-star" pill>
        我是tags
      </nly-form-tag>

      <nly-form-tag icon="nlyfont nly-icon-star" size="lg">
        我是tags
      </nly-form-tag>

      <nly-form-tag icon="nlyfont nly-icon-star" variant="danger">
        我是tags
      </nly-form-tag>

      <nly-form-tag icon="nlyfont nly-icon-star" variant="danger" outline>
        我是tags
      </nly-form-tag>

      <nly-form-tag
        icon="nlyfont nly-icon-star"
        variant="danger"
        outline
        dashed
      >
        我是tags
      </nly-form-tag>

      <nly-form-tag icon="nlyfont nly-icon-star" disabled>
        我是tags
      </nly-form-tag>

      <nly-form-tag icon="nlyfont nly-icon-star" no-close>
        我是tags
      </nly-form-tag>

      <div>
        <label for="tags-basic">Type a new tag and press enter</label>
        <nly-form-tags
          input-id="tags-basic"
          v-model="value"
          no-add-on-enter
          tag-no-close
        >
        </nly-form-tags>
        <p class="mt-2">Value: {{ value }}</p>
      </div>

      <div>
        <label for="tags-pills">Enter tags</label>
        <nly-form-tags
          input-id="tags-pills"
          v-model="value"
          bg-variant="olive"
          tag-outline
          tag-dashed
          tag-pills
          size="lg"
          separator=" "
          placeholder="Enter new tags separated by space"
          tag-no-close
        ></nly-form-tags>
        <p class="mt-2">Value: {{ value }}</p>
      </div>

      <div>
        <nly-form-group
          :state="state"
          label="Tags validation example"
          label-for="tags-validation"
        >
          <nly-form-tags
            input-id="tags-validation"
            :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
            v-model="tags"
            :state="state"
            :tag-validator="tagValidator"
            separator=" "
            tag-no-close
          ></nly-form-tags>
          <!-- The following slots are for nly-form-group -->
          <!-- <template #invalid-feedback>
            You must provide at least 3 tags and no more than 8
          </template>
          <template #description>
            <div id="tags-validation-help">
              Tags must be 3 to 5 characters in length and all lower case. Enter
              tags separated by spaces or press enter.
            </div>
          </template> -->
        </nly-form-group>
      </div>
      <div>
        <label for="tags-limit">Enter tags</label>
        <nly-form-tags
          input-id="tags-limit"
          v-model="value"
          :limit="limit"
          remove-on-delete
          tag-no-close
          disabled
        ></nly-form-tags>
        <p class="mt-2">Value: {{ value }}</p>
      </div>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      value: ["apple", "orange"],
      tags: [],
      limit: 5,
      dirty: false
    };
  },
  computed: {
    state() {
      // Overall component validation state
      return this.dirty ? this.tags.length > 2 && this.tags.length < 9 : null;
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    tags(newVal, oldVal) {
      // Set the dirty flag on first change to the tags array
      this.dirty = true;
    }
  },
  methods: {
    tagValidator(tag) {
      // Individual tag validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6;
    }
  }
};
</script>

<style lang="scss">
.form-control:focus {
  color: #495057;
  background-color: #ffffff;
  border-color: #80bdff;
  outline: 0;
  -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), none;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), none;
}
</style>
