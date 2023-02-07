<template>
  <div class="tong-trans-tree">
    <tong-trans-tree-item
      key="left-item"
      type="left"
      ref="leftItem"
      :title="title[0]"
      :selectData.sync="selectData[0]"
      :treeData="treeData[0]"
      :search="search[0]"
      :searchShow="searchShow[0]"
      :searchValue.sync="searchValue[0]"
      :filteredData.sync="filteredData[0]"
      :moveFilterData="moveFilterData"
      :filter="filter[0]"
      :filterShow="filterShow[0]"
      :filterWord.sync="filterWord[0]"
      :order.sync="order[0]"
      :orderChanged="orderChanged[0]"
      :nodeKey="nodeKey"
      :defaultProps="defaultProps"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template slot="mySearch">
        <slot name="leftSearch"></slot>
      </template>
    </tong-trans-tree-item>

    <!-- 中间按钮部分 -->
    <tong-trans-tree-button
      :treeData="treeData"
      :selectData="selectData"
      :getTreeData="getTreeData"
      :searchValue.sync="searchValue"
      :filteredData="filteredData"
      :moveFilterData="moveFilterData"
      @update:selectData="updat_selectData"
      :nodeKey="nodeKey"
      :defaultProps="defaultProps"
      v-on="$listeners"
    />

    <tong-trans-tree-item
      key="right-item"
      type="right"
      ref="rightItem"
      :title="title[1]"
      :selectData.sync="selectData[1]"
      :treeData="treeData[1]"
      :search="search[1]"
      :searchShow="searchShow[1]"
      :searchValue.sync="searchValue[1]"
      :filteredData.sync="filteredData[1]"
      :moveFilterData="moveFilterData"
      :filter="filter[1]"
      :filterShow="filterShow[1]"
      :filterWord.sync="filterWord[1]"
      :order.sync="order[1]"
      :orderChanged="orderChanged[1]"
      :nodeKey="nodeKey"
      :defaultProps="defaultProps"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template slot="mySearch">
        <slot name="rightSearch"></slot>
      </template>
    </tong-trans-tree-item>
  </div>
</template>
<script>
import tongTransTreeItem from "./components/item";
import tongTransTreeButton from "./components/button";
export default {
  name: "tongTransTree",
  props: {
    title: {
      type: Array,
      default() {
        return ["左标题", "右标题"];
      },
    },
    search: {
      type: Array,
      default: function () {
        return [undefined, undefined];
      },
    },
    searchShow: {
      type: Array,
      default: function () {
        return [true, true];
      },
    },
    moveFilterData:{
      type:Boolean,
      default:false
    },
    filter: {
      type: Array,
      default: function () {
        return [undefined, undefined];
      },
    },
    filterShow: {
      type: Array,
      default: function () {
        return [undefined, undefined];
      },
    },
    orderChanged: {
      type: Array,
      default: function () {
        return [undefined, undefined];
      },
    },
    defaultProps: {
      type: Object,
      default: function () {
        return {};
      },
    },
    nodeKey: {
      type: String,
      default: "value",
    },
    treeData: {
      type: Array,
      default() {
        return [[], []];
      },
    },
  },
  components: {
    tongTransTreeItem,
    tongTransTreeButton,
  },
  watch: {
    treeData: {
      handler() {
        this.$nextTick(() => {
          if (this.filterWord[0] || this.searchValue[0])this.$refs.leftItem.filterTree();
          setTimeout(() => {
            if (this.filterWord[1] || this.searchValue[1])
              this.$refs.rightItem.filterTree();
              this.initTree=false
          }, 1000);
        });
      },
      deep: true,
      
    },
  },
  data() {
    return {
      selectData: [[], []],
      filterWord: ["", ""],
      filteredData:[[],[]],
      searchValue: ["", ""],
      order: ["down", "down"],

      initTree:false,
    };
  },

  methods: {
    updat_selectData(val) {
      this.selectData = val;
      this.initTree = true;
    },

    getTreeData(){
      return this.$refs.leftItem.$refs.itemTree.$refs.tongTree.tongTreeObj.data
    }
  },
};
</script>