<template>
  <div class="tong-trans-tree-box" :style="{ height }">
    <tong-tree
      ref="tongTree"
      :treeData="formateData"
      v-bind="formateAttrs"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import tongTree from "../../../tongTree";
import { config_tree } from "../config/config.item";
import { mergeObject,getFirstWord } from "../../../../js/usual";
export default {
  props: ["treeData", "height","filterWord","order","labelKey","expandKeys","filterShow"],
  components: {
    tongTree,
  },
  computed: {
    formateAttrs() {
      return mergeObject({...config_tree,labelKey:this.labelKey}, this.$attrs);
    },

    formateData(){
      return this.filterShow?this.formateOrderData:this.formateNormalData
    },
    formateOrderData(){
      const labelKey = this.labelKey || config_tree.labelKey
      return this.treeData.sort(function(a,b){
        const res = getFirstWord(a[labelKey]).charCodeAt() - getFirstWord(b[labelKey]).charCodeAt()
        return this.order=="down"?(res>0?1:-1):(res>0?-1:1)
      }.bind(this))
    },
    formateNormalData(){
      return this.treeData
    },

    getHalfCheckedKeys(){
      return this.$refs.tongTree.getHalfCheckedKeys()
    }
  },

  watch:{
    formateData:{
      handler(){
        this.$nextTick(()=>{
          this.$refs.tongTree.setExpandKeys(this.expandKeys)
          this.$refs.tongTree.setCheckedKeys([]); //清空原选中
        })
      },
      deep:true
    }
  },  

  data() {
    return {};
  },
  methods: {
    getSelectData() {
      return this.$refs.tongTree.getCheckedArr();
    },
    filter(str) {
      this.$refs.tongTree.filter(str);
    },
  },
};
</script>