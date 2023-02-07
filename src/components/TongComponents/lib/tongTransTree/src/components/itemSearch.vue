<template>
  <div class="tong-trans-tree-search">
    <slot v-if="$slots.default"></slot>

    <el-input v-else v-bind="formateAttrs" v-model="value" @keyup.native.enter="search">
      <el-button
        slot="append"
        icon="el-icon-search cursor"
        @click="search"
      ></el-button>
    </el-input>
  </div>
</template>
<script>
import { config_search } from "../config/config.item";
import { mergeObject } from "../../../../js/usual";
export default {
  props: ["type","searchValue"],
  computed: {
    formateAttrs() {
      return mergeObject(config_search, this.$attrs);
    },
  },
  watch:{
    searchValue:{
      handler(newValue){
        this.value = newValue
      },
      immediate:true
    }
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    /**
     * 搜索内容
     */
    search() {
      this.$emit("search", this.type, this.value);
    },
  },
};
</script>