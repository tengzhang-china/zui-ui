<template>
  <el-radio class="my-radio" v-model="radio" :disabled="disabled" :label="Label" @change="change">
  </el-radio>
</template>
<script>
export default {
  props: ["scope", "radioKey", "value","disabled"],
  components: {},
  data() {
    return {
      radio: "",
    };
  },

  watch: {
    value: {
      handler(newValue) {
        this.radio = newValue;
      },
      immediate: true,
    },
  },
  computed: {
    Label() {
      return this.scope.row[this.radioKey];
    },
  },
  methods: {
    change(val) {
      this.$emit("update:value", val);
    },
  },
};
</script>