<template>
  <div class="tong-data-source-list">
    <p class="title">{{ title }}</p>
    <tongInput  v-model='value' v-bind="inputConfig" @input="filterTree" />

    <div class="tree-box">
      <tongTree ref="tongTree" v-bind="treeConfig" v-on="$listeners" />
    </div>
  </div>
</template>
<script>
import { tongInput, tongTree } from "../../../../../index";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    inputConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    treeConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  components: { tongInput, tongTree },

  watch:{
    "treeConfig.expandKeys":{
      handler(newValue){
        this.$refs.tongTree.setExpandKeys(newValue)
      },
    }
  },
  data(){
    return {
      value:""
    }
  },
  methods:{
    // 过滤树
    filterTree(val){
      this.$refs.tongTree.filter(val)
    }
  }
};
</script>