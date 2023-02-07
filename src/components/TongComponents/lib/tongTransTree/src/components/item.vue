<template>
  <div class="tong-trans-tree-item">
    <item-title
      :title="title"
      :count="(selectData&&selectData.length||0) + '/' + treeData.length"
      :countShow="countShow"
    />

    <item-filter
      v-if="filterShow"
      @update:filterWord="val=>$emit('update:filterWord',val)"
      @update:order="changeOrder"
      v-bind="{order,filterWord}"
    />

    <div class="tree-box">
      <item-search
        v-show="searchShow"
        :searchValue="searchValue"
        :type="type"
        @search="doSearch"
      >
        <slot name="mySearch"></slot>
      </item-search>
      <item-tree
        ref="itemTree"
        :treeData="treeData"
        :nodeKey="nodeKey"
        @checkChanged="checkChanged"
        @node-expand="nodeExpand"
        v-bind="$attrs"
        :filterNodeMethod="defaultFilter"
        :filterWord="filterWord"
        :order="order"
        :defaultProps="defaultProps"
        :filterShow="filterShow"
        :expandKeys="expandKeys"
        v-on="$listeners"
      />
    </div>
  </div>
</template>
<script>
import itemTitle from "./itemTitle";
import itemSearch from "./itemSearch";
import itemTree from "./itemTree";
import itemFilter from "./itemFilter";
import { getFirstWord } from "../../../../js/usual";
export default {
  props: [
    "type",
    "title",
    "search",
    "searchShow",
    "searchValue",
    "filteredData",
    "moveFilterData",
    "filter",
    "filterShow",
    "filterWord",
    "defaultProps",
    "order",
    "orderChanged",
    "treeData",
    "nodeKey",
    "countShow",
  ],
  components: { itemTitle, itemSearch, itemTree, itemFilter },
  data() {
    return {
      selectData: [],
      expandKeys:[],
      filterRecord:[]
    };
  },
  computed: {
    filterData() {
      return {
        type: this.type,
        word: this.filterWord,
        search: this.searchValue,
        order:this.order
      };
    },
  },
  watch: {
    treeData: {
      handler() {
        this.selectData = [];
      },
      deep: true,
    },

    filterWord: {
      handler() {
        if (this.filter) {
          this.filter(this.filterData);
        } else {
          this.filterTree();
        }
      },
    },
  },
  methods: {
    nodeExpand(data,node){
      this.expandKeys.push(data[this.nodeKey]);
      this.checkChanged(data,node)
    },
    checkChanged(data,node) {
      setTimeout(()=>{
        this.selectData = this.$refs.itemTree.getSelectData();
        this.$emit("update:selectData", this.selectData);
      },300)
    },

    

    /**
     * 过滤
     */
    doSearch(type, value) {
      this.$emit("update:searchValue", value);
      if (this.search) {
        this.search(type, value, this.filterWord);
      } else {
        this.filterTree();
      }
    },

    filterTree() {
      this.$nextTick(() => {
        this.filterRecord=[];
        this.$refs.itemTree.filter(this.filterData);
      });
    },

    defaultFilter(value, data, node) {
      const { word, search } = value;
      let isTrue = (word ? getFirstWord(data.label) === word : true) &&
        data[this.defaultProps.label].indexOf(search) > -1;

      if(isTrue && this.moveFilterData){
        this.filterRecord.push(data);
        this.$emit("update:filteredData",this.filterRecord);
      }
      return isTrue;
    },

    changeOrder(val){
      this.$emit('update:order',val);
      if(this.orderChanged){
        this.orderChanged({...this.filterData,order:val})
      }
    }
  },
};
</script>