<template>
  <component :is="formateType" v-bind="$attrs" v-on="$listeners" :value="value" :type="type" :width="width"></component>
</template>
<script>
import indexInput from "./indexInput";
import inputNumber from "./inputNumber";
export default {
  name: "tongInput",
  props: {
    value:{
      type:Number|String,
      default:""
    },
    type: {
      type: String,
      default: "input", //inputNumber
    },
    width: {
      type: String,
      default: "100%",
    },
  },
  components: { indexInput, inputNumber },
  data() {
    return {};
  },
  computed: {
    formateType() {
      return {
        inputNumber: "inputNumber",
      }[this.type]||"indexInput";
    },
  },
  methods: {},
};
</script>