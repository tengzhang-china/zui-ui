<template>
  <div class="tong-input-number">
    <span v-if="preText" class="pre-text">{{preText}}</span>
    <el-input-number
      :value="value"
      @input="val=>$emit('update:value',val)"
      v-bind="formateBind"
      v-on="$listeners"
      :size="size"
      :style="formateStyle"
    ></el-input-number>
    <span v-if="nextText" class="next-text">{{nextText}}</span>
  </div>
</template>
<script>
import inputNumberConfig from "../config/inputNumber.config";
import { mergeObject } from "../../../js/usual";
export default {
  props: {
    value: {
      type: String | Number,
      default: 0,
    },
    width: {
      type: String,
      default: "100px",
    },
    size: {
      type: String,
      default: "normal",
    },
    preText: {
      type: String | Number,
      default: "",
    },
    nextText: {
      type: String | Number,
      default: "",
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

    formateBind() {
      return mergeObject(inputNumberConfig, this.$attrs);
    },
  },
  methods: {},
};
</script>
