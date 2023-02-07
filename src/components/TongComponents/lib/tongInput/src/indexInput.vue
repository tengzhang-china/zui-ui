<template>
  <component
    class="tong-input"
    v-bind="$attrs"
    v-on="$listeners"
    :style="formateStyle"
    :size="size"
    :is="inputType"
    :value-key="valueKey"
  >
    <slot name="suffix"></slot>
    <slot name="prefix"></slot>
    <slot name="prepend"></slot>
    <slot name="append"></slot>
  </component>
</template>
<script>
import inputSuggest from "./inputSuggest.vue";
export default {
  components:{autocomplete:inputSuggest},
  props: {
    width: {
      type: String,
      default: "100%",
    },
    size: {
      type: String,
      default: "normal",
    },

    inputType: {
      type: String,
      default: "el-input",
    },

    valueKey: {
      type: String,
      default: "value",
    },
  },
  data() {
    return {};
  },
  computed: {
    formateStyle() {
      return {
        width: this.width,
      };
    },
  },
  methods: {},
};
</script>
